import { CircularProgress, Container, Typography, Box, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from "react";
import MarkdownContainer from '@/components/MarkdownContainer';
import { GitHubReleaseData } from "../../../utils/github";

async function getReleases() {
  const url = `https://api.github.com/repos/PelicanPlatform/pelican/releases`;
  return fetch(url).then(response => response.json());
}
export async function generateStaticParams() {
  const allReleases = await getReleases();
  const params = allReleases.map((release: GitHubReleaseData) => ({
    slug: release.tag_name.split('.')
  }));
  console.log('Static Params:', params); // Add this line
  return params;
}

async function getPageData(slug: string[]) {
  const allReleases = await getReleases();
  const slugArray = slug.join('.');
  const [majorVersion, minorVersionBase] = slugArray.split('.');
  const minorVersion = parseInt(minorVersionBase, 10);
  const newVersionPrefix = `${majorVersion}.${minorVersion}`;
  const release = allReleases.find((release: GitHubReleaseData) => release.tag_name === slugArray);
  const minorReleases = allReleases.filter((release: GitHubReleaseData) => 
    release.tag_name.startsWith(newVersionPrefix) && 
    !release.tag_name.endsWith('0')
  );
  return { release, minorReleases };
}

const Page = async ({ params }: { params: { slug: string[] } }) => {
  const releaseData = await getPageData(params.slug);
  const { release, minorReleases } = releaseData;

  if (!releaseData) {
    return (
      <Container maxWidth="md">
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }
  return (
      <Container maxWidth="md">
      <Box pt={6} pb={4}>
        <Typography variant="h2" component="h1">
          {params.slug}
        </Typography>
        <Divider sx={{
          bgcolor: "primary.main",
          height: "0.25rem",
        }} />
      </Box>
      <MarkdownContainer
        content={release?.body || ""}
      />
      <Box pt={4}>
        <Box pb={4}>
          {minorReleases.map((release: GitHubReleaseData) => (
            <Accordion key={release.tag_name}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls={`${release.tag_name}-content`}
                id={`${release.tag_name}-header`}
              >
                <Typography variant="h5" component="h2">
                  {release.tag_name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ mx: 3 }}>
                <MarkdownContainer
                  content={release.body}
                />
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Page;