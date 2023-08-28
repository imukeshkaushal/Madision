import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/home?populate=footer.menu_1_list,footer.menu_2_list,footer.social_links.logo,footer.contact_links.icon,footer.logo')
      .then((response) => {
        setApiData(response.data.data.attributes.footer);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  console.log(apiData);
  const logo = apiData && apiData.logo.data.attributes.url
  return (
    <footer className="footer-wrapper">
      <Box backgroundColor={"#051F16"}>
        <Box display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]}  gap={16} py={12} pt={20} fontSize={"18px"} w={"90%"} m={"auto"}>
        <Box>
          <Image src={`http://localhost:1337${logo}`} alt='logo'/>
          <Text color={"white"} fontWeight={"300"}>{apiData && apiData.footer_desc}</Text>
        </Box>
        <Box>
          <Text color={"white"} fontSize={"18px"}>{apiData && apiData.menu_1_title}</Text>
          <Flex mt={8} direction={"column"} gap={4}>
          {apiData && apiData.menu_1_list.map((el) => {
            return(
              <Flex color={"white"} fontWeight={"300"} alignItems={"center"} gap={"5px"} key={el.id}>
              <ChevronRightIcon/>
              <Text>{el.menu_name}</Text>
            </Flex>
            )
          })}
          </Flex>
        </Box>
        <Box>
          <Text color={"white"} fontSize={"18px"}>{apiData && apiData.menu_2_title}</Text>
          <Flex mt={8} direction={"column"} gap={4}>
          {apiData && apiData.menu_2_list.map((el) => {
            return(
              <Flex color={"white"} fontWeight={"300"} alignItems={"center"} gap={"5px"} key={el.id}>
              <ChevronRightIcon/>
              <Text>{el.menu_name}</Text>
            </Flex>
            )
          })}
          
          </Flex>
        </Box>
        <Box>
          <Text color={"white"} fontSize={"18px"}>{apiData && apiData.menu_3_title}</Text>
          <Flex mt={8} gap={4}>
          {
            apiData && apiData.social_links.map((el) => {
              return(
                <Box key={el.id}>
                <Link to={el && el.link}><Image w={"35px"} h={"35px"} src={`http://localhost:1337${el && el.logo.data.attributes.url}`} alt='logo'/> </Link>
                </Box>
              )
            })
          }
            
          </Flex>
          {apiData && apiData.contact_links.map((el) => {
            return(
              <Flex mt={8} gap={4} alignItems={"center"}>
            <Image w={"30px"} h={"30px"} src={`http://localhost:1337${el && el.icon.data.attributes.url}`} alt='icons'/>
            <Text color={"white"} fontWeight={"300"}>{el && el.text}</Text>
          </Flex>
            )
          })}
          
        </Box>
      </Box>
      <hr/>
      <Box>
        <Text color={"white"} fontWeight={"300"} textAlign={"center"} p={2}>{apiData && apiData.copyright}</Text>
      </Box>
    </Box>
    </footer>
  )
}

export default Footer