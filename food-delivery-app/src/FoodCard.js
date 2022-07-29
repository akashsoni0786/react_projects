import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button } from '@mui/material';

export default function MediaControlCard(props) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', backgroundColor:"", width:"450px",
    margin:"10px 20px",
    border:"1px solid black",borderRadius:"10px",flexDirection:"row",justifyContent:"space-between",boxShadow:"0px 0px 5px 5px black"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column',width:"50%" }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="p" style={{fontSize:"25px",fontWeight:"bold"}}>
            {props.nameoffood}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
         Veg <img style={{width:"18px"}} alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/1200px-Indian-vegetarian-mark.svg.png'/>
        </Box>
          <Typography variant="subtitle1" color="text.secondary" component="div" >
            Price : ${props.price} 
          </Typography>
        </CardContent>

        <Button sx={{width:"150px" ,margin:"10px 20px",border:"1px solid red",color:"red"}} onClick={props.addtocart} id = {props.id}variant="outlined">Add to cart</Button>
      </Box>

      <CardMedia
        component="img"
        sx={{ width:"50%" }}
        image="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
        alt="Live from space album cover"
      />
    </Card>
  );
}
