import React, {useState, useEffect} from 'react';
import OperatingSystems from './OperatingSystems';
import Architectures from './Architectures';
import Packages from './Packages';
import ReleasesTable from './ReleasesTable';
import { Box, Typography } from '@mui/material';
import { RotatingLines } from "react-loader-spinner";
import fetchReleaseAssets, {FilteredAsset} from './fetchReleases';



const DownloadsComponent = () => {
    const [assets, setAssets] = useState<FilteredAsset[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchReleaseAssets().then(setAssets);
      }, []);    

    return (
        <Box sx={{ display: "flex", flexDirection:"column", alignItems:"center"}}>
            <Box style={{ display: "flex", flexDirection:"row", alignItems:"center", margin: "0 auto" }} >
                <OperatingSystems/>
                <Architectures/>
                <Packages/>
            </Box>
            <ReleasesTable rows={assets} />
        </Box>
    )
}

export default DownloadsComponent;