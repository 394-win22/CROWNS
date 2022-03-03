import * as React from 'react';
import { Typography, Grid, Card } from '@mui/material';
import Type1 from '../images/Type1.PNG';
import Type2a from '../images/Type2a.PNG';
import Type2b from '../images/Type2b.PNG';
import Type2c from '../images/Type2c.PNG';
import Type3a from '../images/Type3a.PNG';
import Type3b from '../images/Type3b.PNG';
import Type3c from '../images/Type3c.PNG';
import Type4a from '../images/Type4a.PNG';
import Type4b from '../images/Type4b.PNG';
import Type4c from '../images/Type4c.PNG';
import Types from '../images/types.PNG';
import {all_types} from '../data/HairTypes.js';
import { useNavigate } from 'react-router-dom';
import "@fontsource/aileron";
import "@fontsource/caveat";
import "@fontsource/raleway";
import {useUserState, setUser} from '../utilities/firebase'



const TypeSelector = ({ setHairType }) => {
    let navigate = useNavigate();
    const itemData = [
        {image: Type1, subtype: all_types[0].subtypes[0]},
        {image: Types, subtype: null},
        {image: Type2a, subtype: all_types[1].subtypes[0]},
        {image: Type2b, subtype: all_types[1].subtypes[1]},
        {image: Type2c, subtype: all_types[1].subtypes[2]},
        {image: Type3a, subtype: all_types[2].subtypes[0]},
        {image: Type3b, subtype: all_types[2].subtypes[1]},
        {image: Type3c, subtype: all_types[2].subtypes[2]},
        {image: Type4a, subtype: all_types[3].subtypes[0]},
        {image: Type4b, subtype: all_types[3].subtypes[1]},
        {image: Type4c, subtype: all_types[3].subtypes[2]}
    ]
    const [user] = useUserState();

  const chooseHairType = (hairType) => {
    setHairType(hairType);
    if (user) setUser(user.uid, {hairType: hairType.code});
    navigate("/results");
  }

  return (
    
    <Card variant="outlined" sx={{maxWidth: '450px', width:'100%', height: '100vh', position: 'absolute', left: '50%', top: '45%', transform: 'translate(-50%, -50%)', pb: '60px'}}>
        <Typography align={'center'}  sx={{ fontSize: '2rem', fontFamily: 'Raleway', padding: '1rem', fontWeight: '900', marginTop: '2rem', marginBottom: '3rem' }}>
                Choose the type that is most like your Hair
        </Typography>
      <Grid container spacing={{ xs: 0.5}}>
        {itemData.map((item, index) => {
        if (index === 1) {
        return (
            <Grid item xs={8} sm={8} md={8} key={index} >
                <img style={{ width: `${100}%`, height: 'auto' }} src={item.image} alt={``} />
            </Grid>
        )}
        return (
            <Grid item xs={4} sm={4} md={4} key={index} onClick={() => {chooseHairType(item.subtype); console.log(item.subtype)}}>
                <img style={{ width: `${100}%`, height: 'auto' }} src={item.image} alt={``} />
            </Grid>     
        )})}
    </Grid>
    </Card>
  );
}

export default TypeSelector;