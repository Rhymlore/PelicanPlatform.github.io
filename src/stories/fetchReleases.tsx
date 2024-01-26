// Typescript interfaces
export interface Asset {
    name: string;
    browser_download_url: string;
    // Add more properties as needed from the GitHub API response
  }
  
  export interface Release {
    assets: Asset[];
    // Add more properties as needed from the GitHub API response
  }
  
  export type FilteredAsset = {
    version: string;
    operatingSystem: string;
    architecture: string;
    packageType: string;
    downloadUrl: string;
  };

// Next.js API route or page method
async function fetchReleaseAssets(): Promise<FilteredAsset[]> {
    const response = await fetch('https://api.github.com/repos/PelicanPlatform/pelican/releases/latest');
    const release: Release = await response.json();
  
    // Assuming the asset names are structured like 'pelican-<version>-<os>-<arch>.<package>'
    const filteredAssets: FilteredAsset[] = release.assets.map(asset => {
      const parts = asset.name.split('-');
      const version = parts[1];
      const os = parts[2];
      const archPackage = parts[3].split('.');
      const arch = archPackage[0];
      const packageType = archPackage[1];
  
      return {
        version,
        operatingSystem: os,
        architecture: arch,
        packageType,
        downloadUrl: asset.browser_download_url
      };
    });
  
    // Add further filtering logic if needed
    return filteredAssets;
  }
  
  export default fetchReleaseAssets;