import React from "react";
import Stack  from '@mui/material/Stack';
import { ListItem } from '@mui/material';

const LandingPage = () => {
    console.log("navigated to landing page");
    return (
        <div className="LandingPage" style={{
            position: 'absolute', left: '50%', top: '40%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                <div> 
                    Item 1  //title
                </div>
                <div>
                    Item 2 //logo image
                </div>
                <div>
                    Item 3 // (figure out my hair type)
                </div>
               
            </Stack>
        </div>
    );
  }
  
  export default LandingPage;