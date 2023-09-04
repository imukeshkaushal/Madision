import React, { useEffect, useState } from "react";
import Carousel from "../Components/Carousel";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Features from "../Components/Features";
import Testimonails from "../Components/Testimonails";
import axios from "axios";
import Consultation from "../Components/Consultation";
import Customization from "../Components/Customization";


const Home = () => {
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

  return (
    <Box>
      <Carousel/>
      {apiData && (
        <>
        <Box backgroundColor={"white"}>
          <Flex
            gap={["none","30px","30px"]}
            maxWidth={["100%", "95%", "90%"]}
            m={"auto"}
            pt={12}
            direction={["column", "column", "row"]}
          >
            <Flex
              width={["100%", "100%", "60%"]}
              direction="column"
              gap={["none","30px","30px"]}
            >
              <Box
                height="500px"
                p={[4, 8, 12]}
                position="relative"
                backgroundPosition="bottom center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                bgImage="url('https://madisonavenuearmor.com/new/wp-content/uploads/2023/08/imgpsh_fullsize_anim-3-1-1.webp')"
              >
                <Text
                  fontSize={["50px", "60px", "60px"]}
                  fontWeight={"bold"}
                  color={"gainsboro"}
                >
                  01
                </Text>
                <Text
                  fontSize={["26px", "28px", "35px"]}
                  mt={"-40px"}
                  lineHeight={"40px"}
                  fontWeight={"bold"}
                  color={"white"}
                  w={["100%", "80%", "70%"]}
                >
                  {apiData.services.first_title}
                </Text>
                <Text
                  fontSize={["20px", "20px", "22px"]}
                  color={"white"}
                  mt={8}
                  fontWeight={"300"}
                  w={["100%", "80%", "70%"]}
                >
                  {apiData.services.first_desc}{" "}
                  <Link to="#" className="know_more">
                    {" "}
                    click to know more
                  </Link>
                </Text>
              </Box>

              <Box
                height="500px"
                p={[4, 8, 12]}
                position="relative"
                backgroundPosition="bottom center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                bgImage={[
                  "url('https://madisonavenuearmor.com/new/wp-content/uploads/2023/08/Group-554.webp')",
                  "url('https://madisonavenuearmor.com/new/wp-content/uploads/2023/08/imgpsh_fullsize_anim-6.webp')",
                  "url('https://madisonavenuearmor.com/new/wp-content/uploads/2023/08/imgpsh_fullsize_anim-6.webp')",
                ]}
              >
                <Text
                  fontSize={["50px", "60px", "60px"]}
                  fontWeight={"bold"}
                  color={"gainsboro"}
                >
                  02
                </Text>
                <Text
                  fontSize={["26px", "28px", "35px"]}
                  mt={"-40px"}
                  lineHeight={"50px"}
                  fontWeight={"bold"}
                  color={"white"}
                  w={["100%", "80%", "60%"]}
                >
                  {apiData.second_service.title}
                </Text>
                <Text
                  fontSize={["20px", "20px", "22px"]}
                  color={"white"}
                  mt={8}
                  fontWeight={"300"}
                  w={["100%", "80%", "40%"]}
                >
                  {apiData.second_service.Description}
                  <Link to="#" className="know_more">
                    {" "}
                    click to know more
                  </Link>
                </Text>
              </Box>
            </Flex>
            <Box
              width={["100%", "100%", "40%"]}
              height={["700px", "700px", "auto"]}
              position="relative"
              backgroundPosition="bottom center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              bgImage="url('https://madisonavenuearmor.com/new/wp-content/uploads/2023/08/Group-552.webp')"
              p={[4, 8, 12]}
            >
              {/* Your content goes here */}
              <Text
                fontSize={["50px", "60px", "60px"]}
                fontWeight={"bold"}
                color={"#BAC3C6"}
              >
                03
              </Text>
              <Text
                fontSize={["26px", "28px", "35px"]}
                mt={"-40px"}
                lineHeight={"50px"}
                fontWeight={"bold"}
                w={["100%", "80%", "70%"]}
              >
                {apiData.third_service.title}
              </Text>
              <Text
                mt={12}
                fontSize={["20px", "20px", "22px"]}
                fontWeight={"300"}
                w={["100%", "80%", "70%"]}
              >
                {apiData.third_service.Description}{" "}
                <Link to="#" className="know_more">
                  click to know more
                </Link>
              </Text>
            </Box>
          </Flex>
          </Box>
          <Box backgroundColor={"white"}>
          <Flex
            maxWidth={["100%", "95%", "90%"]}
            m={"auto"}
            direction={["column", "column", "row"]}
            pt={["8", "8", "24"]}
            pb={["8", "8", "24"]}
            gap={["8", "8", "28"]}
            px={["6", "6", "0"]}
          >
            <Box width={["100%", "100%", "37%"]}>
              <Text
                color={"#E7E7E7"}
                fontSize={["30px", "30px", "50px"]}
                fontWeight={"500"}
              >
                {apiData.story.Title_1}
              </Text>
              <Text
                fontSize={["30px", "28px", "48px"]}
                mt={["-20px", "-20px", "-30px"]}
                lineHeight={["30px", "40px", "50px"]}
                fontWeight={"600"}
              >
                {apiData.story.Title_2}
              </Text>
              <Button
                fontWeight={"400"}
                variant={"none"}
                bgColor={"#051F16"}
                py={"25px"}
                px={"35px"}
                mt={4}
                borderRadius={"none"}
                color={"white"}
                _hover={{
                  bgColor: "white",
                  color: "black",
                  border: "1px solid black",
                }}
              >
                {apiData.story.Button}
              </Button>
            </Box>
            
            <Box width={["100%", "100%", "30%"]}>
              <Text
                fontSize={["16px", "16px", "18px"]}
                letterSpacing={"0.5px"}
                lineHeight={"35px"}
              >
                {apiData.story.Discription_1}
              </Text>
            </Box>
           
            <Box width={["100%", "100%", "30%"]}>
              <Text
                fontSize={["16px", "16px", "18px"]}
                letterSpacing={"0.5px"}
                lineHeight={"35px"}
              >
                {apiData.story.Discription_1}
              </Text>
            </Box>
          </Flex>
          </Box>
          <Box bgColor={"#F6F6F6"}>
            <Box
              maxWidth={["100%", "95%", "90%"]}
              py={12}
              px={[4, 4, 0]}
              m={"auto"}
            >
              <Text
                color={"#E7E7E7"}
                fontSize={["30px", "30px", "50px"]}
                fontWeight={"500"}
                textAlign={"center"}
              >
              {apiData.testimonial_title1}
              </Text>
              <Text
                fontSize={["30px", "28px", "48px"]}
                mt={["-20px", "-20px", "-30px"]}
                lineHeight={["30px", "40px", "50px"]}
                fontWeight={"600"}
                textAlign={"center"}
              >
              {apiData.testimonial_title2}
              </Text>
              <Testimonails />
              <Text textAlign={"center"}>
                <Button
                  textAlign={"center"}
                  fontWeight={"400"}
                  bgColor={"transparent"}
                  border={"1px solid black"}
                  px={"35px"}
                  py={"25px"}
                  borderRadius={"none"}
                  variant={"none"}
                  mt={12}
                >
                  VIEW ALL TESTIMONIALS
                </Button>
              </Text>
            </Box>
          </Box>
          <Box backgroundColor={"white"}>
          <Box maxWidth={["100%", "95%", "90%"]} m={"auto"} pt={12} pb={12} backgroundColor={"white"}>
            <Text
              color={"#E7E7E7"}
              fontSize={["30px", "30px", "50px"]}
              fontWeight={"500"}
              textAlign={"center"}
            >
              {apiData.feature_title1}
            </Text>
            <Text
              fontSize={["30px", "28px", "48px"]}
              mt={["-20px", "-20px", "-30px"]}
              lineHeight={["30px", "40px", "50px"]}
              fontWeight={"600"}
              textAlign={"center"}
            >
              {apiData.feature_title2}
            </Text>
            <Features />
          </Box>
          </Box>
          <Consultation/>
          <Customization/>
        </>
      )}
    </Box>
  );
};

export default Home;
