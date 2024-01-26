import React, {useState} from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

const Packages = () => {
    const [alignment, setAlignment] = useState('rpm');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
      ) => {
        if (newAlignment !== null) {
          setAlignment(newAlignment);
        }
      };

    return (
        <Box sx={{ display: "flex", flexDirection:"column", alignItems:"center", margin: "0 0 0 10px"}}>
            <Typography variant="overline" display="block" gutterBottom>
            Packages
            </Typography>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                aria-label="Platform"
                onChange={handleAlignment}
            >
                <ToggleButton value="rpm">rpm</ToggleButton>
                <ToggleButton value="apk">apk</ToggleButton>
                <ToggleButton value="deb">debian</ToggleButton>
                <ToggleButton value="targz">tar.gz</ToggleButton>
                <ToggleButton value="zip">zip</ToggleButton>
            </ToggleButtonGroup>
        </Box>
        
    )
}

export default Packages;
