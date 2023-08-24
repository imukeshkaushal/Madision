
import React, { useState } from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 200,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState("");

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'SECURED ARMORED VEHICLE',
      text: "PROVIDING DESCRETE AND SECURE ARMORED VEHICLE AND SERVICES",
      image:
        'https://madisonavenuearmor.com/new/wp-content/uploads/2023/08/imgpsh_fullsize_anim-2-1.png',
    },
    {
      title: 'LUXURT ARMORED TRANSPORTATION',
      text: "UNPARALLED SERVICES AND PRODUCT TO AN ULTRA DISCRIMANTING AUDIANCE",
      image:
        'https://madisonavenuearmor.com/new/wp-content/uploads/2023/08/Slider-2-Blank-1.jpg',
    },
    {
      title: 'ULTIMATE BESPOKE ARMORED VEHICLE EXPERIENCE',
      text: "COMMITMENT TO INNOVATION, CRAFTSMANSHIP, SECURITY EXPERTISE AND TRUSTED PARTNERSHIPS WITH EACH AND EVERY CUSTOMER",
      image:
        'https://madisonavenuearmor.com/new/wp-content/uploads/2023/08/Slider-3-Blank-1.jpg',
    },
    {
        title: 'NEW YORKS LUXURY ARMORED TRANSPORTATION',
        text: "LUXURY ARMORED TRANSPORTATION AND PROTECTION BUSINESS AND AN INDUSTRY LEADING PERFECT SAFETY RECORD!",
        image:
          'https://madisonavenuearmor.com/new/wp-content/uploads/2023/08/Slider-4-Blank-1.jpg',
    },
  ]

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'} backgroundColor={"white"}>
      {/* CSS files for react-slick */}
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
        variant="none"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="20px" color='white'/>
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="none"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="20px" color="white"/>
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container  size="container.lg" height="600px" position="relative"  m={0}>
              <Stack
                spacing={6}
                w={'full'}
                maxW={'sm'}
               
                position="relative"
                top="50%"
                left = {["2%","10%","20%"]}
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color = {"white"}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="white" >
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}