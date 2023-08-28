import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Consultation = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/home?populate=Consultation.Points,Consultation.bg_img')
      .then((response) => {
        setApiData(response.data.data.attributes.Consultation);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const backgroundImageUrl = apiData?.bg_img?.data?.attributes?.url || '';

  return (
    <Box position="relative">
      {backgroundImageUrl && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={-1}
          backgroundPosition="bottom center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          style={{ backgroundImage: `url(http://localhost:1337${backgroundImageUrl})` }}
        />
      )}

      <Box
        height={["1650px","1300px","800px","800px","800px"]}
        width={["100%","100%","55%"]} 
        ml={["none","none","45%"]}
        p={4} 
      >
        <Box
          border={"10px solid #E7E7E7"}
          m={[0,0,8]}
          p={8}
          backgroundColor={"#051F16"}
          opacity={0.9}
        >
          <Text
            fontSize={["26px", "28px", "35px"]}
            lineHeight={"40px"}
            fontWeight={"bold"}
            color={"white"}
            w={["100%", "80%", "70%"]}
          >
            {apiData && apiData.Title}
          </Text>
          <Text
            fontSize={["16px", "16px", "18px"]}
            letterSpacing={"0.5px"}
            lineHeight={"35px"}
            mt={"5px"}
            color={"white"}
          >
            {apiData && apiData.consultation_title1}
          </Text>
          <hr className="horizontalLine" />
          <Text
            fontSize={["16px", "16px", "18px"]}
            letterSpacing={"0.5px"}
            lineHeight={"35px"}
            mt={"5px"}
            color={"white"}
            fontWeight={300}
          >
            {apiData && apiData.Description}
          </Text>
          <Box mt={4}>
            {apiData && apiData.Points && (
              <Flex flexDirection="column" gap={4}>
                {apiData.Points.map((point) => (
                  <Flex key={point.id} alignItems="center" gap={4}>
                    <CheckCircleIcon color="white" w={6} h={6} />
                    <Text
                      fontSize={["16px", "16px", "18px"]}
                      letterSpacing={"0.5px"}
                      lineHeight={"35px"}
                      mt={"5px"}
                      color={"white"}
                      fontWeight={300}
                    >
                      {point.list_title}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            )}
          </Box>
          <Button
            fontWeight={"400"}
            variant={"none"}
            bgColor={"#051F16"}
            py={"25px"}
            px={"35px"}
            mt={8}
            border={"1px solid white"}
            borderRadius={"none"}
            color={"white"}
            _hover={{
              bgColor: "white",
              color: "black",
              border: "1px solid black",
            }}
          >
            CONTACT US FOR DETAILS
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Consultation;
