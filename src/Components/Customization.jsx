import { Box, Button, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Customization = () => {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
      axios
        .get('http://localhost:1337/api/home?populate=Customization.background_image')
        .then((response) => {
          setApiData(response.data.data.attributes.Customization);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    const backgroundImageUrl = apiData?.background_image?.data?.attributes?.url || '';
  return (
    <Box backgroundColor={"white"} display={["none","none","block"]}>
    <Box
    height="900px"
    p={[4, 8, 12]}
    position="relative"
    backgroundPosition="center center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    style={{ backgroundImage: `url(http://localhost:1337${backgroundImageUrl})` }}
  >
    {/* Text on top of the image */}
    <Text
      color="white"
      position="absolute"
      top="50px"
      left="50%"
      transform="translateX(-50%)"
      textAlign="center"
      width="100%"
      fontSize={["30px", "30px", "50px"]}
      fontWeight={"500"}
    >
    {apiData && apiData.title_1}
    </Text>
    <Text
      color="black"
      position="absolute"
      top="80px"
      left="50%"
      transform="translateX(-50%)"
      textAlign="center"
      width="100%"
      fontSize={["30px", "30px", "50px"]}
      fontWeight={"500"}
    >
    {apiData && apiData.title_2}
    </Text>
  
    {/* Button at the bottom of the image localhost:3000/#*/}
    <Link to={apiData && apiData.Button_Link}>
    <Button
      fontWeight="400"
      variant="none"
      bgColor="black"
      border="1px solid black"
      borderRadius="none"
      color="white"
      position="absolute"
      bottom="50px"
      left="50%"
      transform="translateX(-50%)"
      _hover={{
        bgColor: "white",
        color: "black",
        border: "1px solid black",
      }}
    >
    {apiData && apiData.Button_Text}
    </Button>
    </Link>
  </Box>
  
    </Box>
  )
}

export default Customization