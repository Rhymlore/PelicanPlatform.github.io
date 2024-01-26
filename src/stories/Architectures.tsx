import React, {useState} from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

const Architectures = () => {

    const [alignment, setAlignment] = useState('arm64');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
      ) => {
        if (newAlignment !== null) {
          setAlignment(newAlignment);
        }
      };

    return (
        <Box sx={{ display: "flex", flexDirection:"column", alignItems:"center", margin: "0 10px"}}>
            <Typography variant="overline" display="block" gutterBottom>
            Architectures
            </Typography>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                aria-label="Architecture"
                onChange={handleAlignment}
            >
                <ToggleButton value="arm64">arm64</ToggleButton>
                <ToggleButton value="amd64">amd64</ToggleButton>
                <ToggleButton value="ppc64le">ppc64le</ToggleButton>
                <ToggleButton value="x86_64">x86_64</ToggleButton>
            </ToggleButtonGroup>
        </Box>
        
    )
}

export default Architectures;
