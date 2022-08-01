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
import { Link } from 'react-router-dom';

export default function MediaControlCard(props) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', backgroundColor:"", width:"80%",
    alignItems:"center",margin:"30px 0px",
    border:"1px solid #f78e21",borderRadius:"10px",flexDirection:"row",justifyContent:"space-between",boxShadow:"0px 0px 5px 5px #f78e21"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column',width:"40%" }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="p" style={{fontSize:"25px",fontWeight:"bold"}}>
            {props.nameofrestuarent}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
         {props.location}
        </Box>
          <Typography variant="subtitle1" color="text.secondary" component="div" >
            Cuisine: {props.cuisine} 
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" >
            Location: {props.locations} 
          </Typography>
        </CardContent>
        <Link 
        style={{textDecoration:"none"}}
       to='/details'
       state={{ detalis: props.idofresturents }}
       >
<Button sx={{width:"150px" ,margin:"10px 20px",border:"1px solid #f78e21",color:"#f78e21"}} variant="outlined">View</Button>
</Link>
        
      </Box>

      <CardMedia
        component="img"
        sx={{ width:"40%", height:"max-content"}}
        image={props.resimg}
        alt="Live from space album cover"
      />
    </Card>
  );
}