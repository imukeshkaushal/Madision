import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContactForm from "../Components/ContactForm";
import {FaMailBulk, FaPhoneAlt} from "react-icons/fa"
import {ImLocation2} from "react-icons/im"
import axios from "axios";


const Contact = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/contact-us?populate=*")
      .then((response) => {
        setApiData(response.data.data.attributes);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(apiData);
  return (
    <div>
      <Box backgroundColor={"white"} >
        <Box
          height="450px"
          p={[4, 8, 12]}
          position="relative"
          backgroundPosition="center center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage={
            `http://localhost:1337${apiData && apiData.image.data.attributes.url}`
          }
        >
          <Text
            position="absolute"
            top="50%"
            left="50px"
            fontSize={"48px"}
            fontWeight={"bold"}
            color={"white"}
            textShadow={"2px 2px solid black"}
          >
            {apiData && apiData.page_title}
          </Text>
        </Box>
        <Box w={["90%","90%","80%"]} m={"auto"} py={"50px"} >
           <Text  fontSize={"20px"} align={"center"} fontWeight={"400"} color={"#6E6B6B"}>
           {apiData && apiData.description}
          </Text>
          <ContactForm/>
          <Flex w={"90%"} m={"auto"} gap={8} alignItems={["flex-start","flex-start","center"]} justifyContent={["flex-start","flex-start","center"]} py={16} direction={["column","column","row"]}>
            <Flex gap={4} alignItems={"center"}>
              <FaMailBulk fontSize={"30px"}/>
              <Flex flexDirection={"column"}>
                <Text fontWeight={"500"}>E MAIL</Text>
                <Text fontWeight={"400"}>{apiData && apiData.contact_details.email}</Text>
              </Flex>
            </Flex>
            <Flex gap={4} alignItems={"center"}>
              <FaPhoneAlt fontSize={"30px"}/>
              <Flex flexDirection={"column"}>
                <Text fontWeight={"500"}>CALL US</Text>
                <Text fontWeight={"400"}>{apiData && apiData.contact_details.phone_number}</Text>
              </Flex>
            </Flex>
            <Flex gap={4} alignItems={"center"}>
              <ImLocation2 fontSize={"30px"}/>
              <Flex flexDirection={"column"}>
                <Text fontWeight={"500"}>LOCATION</Text>
                <Text fontWeight={"400"}>{apiData && apiData.contact_details.location}</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
