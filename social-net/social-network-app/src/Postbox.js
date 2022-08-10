import { Avatar, Checkbox, InputBase } from '@mui/material'
import React from 'react';
import "./Home.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const Postbox = (props) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
    <div className='postbox'>
        <div className='upperarea'>
        <div className='user_pic_post'>
            <Avatar>
                <img style={{width:"40px"}} alt='' src='https://i.pinimg.com/736x/82/66/af/8266afd59e5dbcd0f732de33b3235c71.jpg'/>
            </Avatar>
            <p className='post_username'>Santa Clause</p>
        </div>
            <ShareOutlinedIcon  sx={{margin:"15px 5px",fontSize:"20px"}}/>

        </div>
        <img className='post_pic' alt='' src={props.postImg}/>
            {/* <img className='post_pic' alt='' src='https://images.unsplash.com/photo-1511600173735-a896042389cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80'/> */}
            <div className='postcontnt'>
            <Checkbox {...label} icon={<FavoriteBorderIcon  />} checkedIcon={<FavoriteIcon sx={{color:"red"}} />} />
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Comment...."
                inputProps={{ 'aria-label': 'Comment....' }}
            />
            <SendOutlinedIcon  sx={{margin:"5px 5px",cursor:"pointer"}}/>
        </div>
        </div>
  )
}

export default Postbox