'use client'

import React, { useEffect, useState } from 'react'
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import { useParams } from 'react-router-dom'
import axios from 'axios'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function ProductSlider() {
    const [apiData, setApiData] = useState([]);
  const [slider, setSlider] = useState("");

  const params = useParams();
  const id = params.id

  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '10px' })

  

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/products/${id}`, {
        params: {
          populate: "*",
        },
      })
      .then((response) => {
        setApiData(response.data.data.attributes.slider_img.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

 
 

  return (
    <Box position={'relative'} height={["350px","400px","500px","550px","xl"]} width={['100%','100%','100%','100%','95%']} m={"auto"} overflow={'hidden'}>

      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        color={"black"}
        borderRadius="full"
        backgroundColor={"white"}
        position="absolute"
        left={side}
        opacity = {"0.5"}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        color = {"black"}
        backgroundColor={"white"}
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        opacity = {"0.5"}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {apiData && apiData.map((el, index) => (
          <Box
            key={index}
            height={['350px','400px','500px','550px','xl']}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(http://localhost:1337${el.attributes.url})`}
          />
        ))}
      </Slider>
    </Box>
  )
}