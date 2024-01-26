import React, {useState} from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

const OperatingSystems = () => {
    const [alignment, setAlignment] = useState('darwin');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
      ) => {
        if (newAlignment !== null) {
          setAlignment(newAlignment);
        }
      };

    return (
        <Box sx={{ display: "flex", flexDirection:"column", alignItems:"center", margin: "0 10px 0 0"}}>
            <Typography variant="overline" display="block" gutterBottom>
            Operating Systems
            </Typography>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                aria-label="Platform"
                onChange={handleAlignment}
            >
                <ToggleButton value="darwin">darwin</ToggleButton>
                <ToggleButton value="linux">linux</ToggleButton>
                <ToggleButton value="windows">windows</ToggleButton>
            </ToggleButtonGroup>
        </Box>
        
    )
}

export default OperatingSystems;
