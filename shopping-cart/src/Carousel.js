import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export default function MyCarousel(props)
{
    var items = [
    
        {
            name: "Random Name #2",
            pics : "https://admintcns.wforwoman.com/banner/1659660224A-mf22-Web-banner.jpg"
        },
        {
            name: "Random Name #3",
            pics : "https://admintcns.wforwoman.com/banner/1654855395Aurelia-desktop-WEB_BANNER4.jpg"
        },
        {
            name: "Random Name #4",
            pics : "https://admintcns.wforwoman.com/banner/1660715188A-Web-Banner9.jpg"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper sx={{height:"inherit",marginTop:"70px",}}>
            <img style={{width:"100%"}} alt='' src={props.item.pics}/>
        </Paper>
    )
}