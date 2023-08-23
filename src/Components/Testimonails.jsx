import { Box, Flex, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Testimonails = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/home?populate=*")
      .then((response) => {
        setApiData(response.data.data.attributes);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!apiData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     
        <Box

          display={"grid"}
          gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]}
          gap={12}
          mt={12}
        > {apiData.Testimonials.map((el) => (
          <Box border={"10px solid gainsboro"} py={4} px={["4","4","12"]} key={el.id} >
            <Text fontSize={"80px"} fontWeight={"600"} fontFamily="Akaya Telivigala" color={"#808184"}>{el.icon_text}</Text>
            <Text fontSize={"18px"} mt={"-35px"} fontWeight={"300"}>{el.description}</Text>
            <Flex borderTop={"1px solid gainsboro"} mt={8} pt={4} gap={4} mb={4}>
              <Image h={"50px"} w={"50px"} borderRadius={"80%"} src='https://madisonavenuearmor.com/new/wp-content/uploads/2023/07/testimonial-page_10.webp' alt='avtar'/>
              <Box>
                <Text fontWeight={"500"}>{el.designation_title} </Text>
                <Text fontWeight={"300"}>{el.designation_desc}</Text>
              </Box>
            </Flex>
          </Box>
          ))}
        </Box>
     
    </div>
  );
}

export default Testimonails;
