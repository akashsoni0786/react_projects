import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export default function MyCarousel(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            pics :"https://admintcns.wforwoman.com/banner/1658998339a-web-banner-28.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            pics : "https://admintcns.wforwoman.com/banner/1659660224A-mf22-Web-banner.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            pics : "https://admintcns.wforwoman.com/banner/1654855395Aurelia-desktop-WEB_BANNER4.jpg"
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
        <Paper sx={{height:"inherit"}}>
            {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p> */}
            <img style={{width:"100%"}} alt='' src={props.item.pics}/>

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}