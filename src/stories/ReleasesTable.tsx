import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FilteredAsset } from './fetchReleases';



interface ReleasesTableProps {
    rows: FilteredAsset[];
  }

  const ReleasesTable: React.FC<ReleasesTableProps> = ({ rows }) => {
    return(
        <TableContainer component={Paper} sx={{marginTop:"15px"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Version</TableCell>
                <TableCell>Operating System</TableCell>
                <TableCell>Architecture</TableCell>
                <TableCell>Package</TableCell>
                <TableCell>Download</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.version}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.version}
                </TableCell>
                <TableCell>{row.operatingSystem}</TableCell>
                <TableCell>{row.architecture}</TableCell>
                <TableCell>{row.packageType}</TableCell>
                <TableCell>{row.downloadUrl}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}

export default ReleasesTable;