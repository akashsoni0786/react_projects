import './App.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Home = () => {
  return (
    <div>
        <img className='carousel' alt="" src='./carousel.jpg'/>
        <h1 className='heading'>TOP SERVICES</h1>
        <div className='services'>
            <div className='everyblock'><img alt='' src='icon1.png' />
            <p className='blockhead'>MAKE AN ORDER</p>
            <p className='blockwork'>Sed egestas tincidunt mollis. Suspendisse rhoncus vitae enim et faucibus. Ut dignissim nec arcu nec hendrerit. Sed arcu sagittis vel diam in, malesuada malesuada risus. Aenean a sem leoneski.</p>
            </div>
            <div className='everyblock'><img alt='' src='icon2.png' />
            <p className='blockhead'>PROMOTIONS</p>
            <p className='blockwork'>Sed egestas tincidunt mollis. Suspendisse rhoncus vitae enim et faucibus. Ut dignissim nec arcu nec hendrerit. Sed arcu sagittis vel diam in, malesuada malesuada risus. Aenean a sem leoneski.</p>
            </div>
            <div className='everyblock'><img alt='' src='icon3.png' />
            <p className='blockhead'>READY TO SERVE</p>
            <p className='blockwork'>Sed egestas tincidunt mollis. Suspendisse rhoncus vitae enim et faucibus. Ut dignissim nec arcu nec hendrerit. Sed arcu sagittis vel diam in, malesuada malesuada risus. Aenean a sem leoneski.</p>
            </div>
            <div className='everyblock'><img alt='' src='icon4.png' />
            <p className='blockhead'>SATISFACTION</p>
            <p className='blockwork'>Sed egestas tincidunt mollis. Suspendisse rhoncus vitae enim et faucibus. Ut dignissim nec arcu nec hendrerit. Sed arcu sagittis vel diam in, malesuada malesuada risus. Aenean a sem leoneski.</p>
            </div>

        </div>
        <h1 className='heading2'>LATEST BLOG POSTS</h1>
        <TitlebarBelowMasonryImageList />
     
    </div>
  )
}
export function TitlebarBelowMasonryImageList() {
    return (
      <Box sx={{ width: "100%",  }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar position="below" title={item.author} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    );
  }
  
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdHVyYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Clarity',
      author: 'Clarity',
    },
    {
      img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdHVyYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Untasted taste',
      author: 'Untasted taste',
    },
    {
      img: 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdHVyYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Selfie view',
      author: 'Selfie view',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
      author: 'Clear kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1513618364580-fe1596762e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdHVyYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Eco friendly',
      author: 'Eco friendly',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
      author: 'Hygienic seats',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
      author: 'Professionals feelings',
    },
    {
      img: 'https://images.unsplash.com/photo-1563567930343-7f24fd8766dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3R1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Doors',
      author: 'We met first here',
    },
    {
      img: 'https://images.unsplash.com/photo-1618644195280-44360cfd6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3R1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Burger',
      author: 'My favourite',
    },
    {
      img: 'https://images.unsplash.com/photo-1577219492769-b63a779fac28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: 'Storage',
      author: 'Taste kings',
    },
    {
      img: 'https://images.unsplash.com/photo-1611783214219-8f3662a26838?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: 'Candle',
      author: 'Best serving peoples',
    },
    {
      img: 'https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoZWZzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Coffee table',
      author: 'Unbeatable',
    },
  ];



  



export default Home