import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductSlider from "../Components/ProductSlider";


const ProductDetail = () => {
  const [apiData, setApiData] = useState(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/products/${id}`, {
        params: {
          populate: "*",
        },
      })
      .then((response) => {
        setApiData(response.data.data.attributes);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  //   console.log(apiData);
  return (
    <Box>
      <Box>
        <Box backgroundColor={"#f0f1f2"} pt={8} pb={8}>
          <Flex
            w={"92%"}
            m="auto"
            gap={4}
            direction={["column", "column", "column", "column", "row"]}
          >
            <Box w={["100%", "100%", "100%", "100%", "50%"]}>
              <ProductSlider />
            </Box>
            <Box w={["100%", "100%", "100%", "100%", "50%"]}>
              <Text
                fontSize={["20px", "22px", "24px", "28px", "38px"]}
                fontWeight={"bold"}
              >
                {apiData && apiData.product_name}
              </Text>
              <Text mt={"10px"} color={"#0A875A"}>
                {apiData && apiData.discription}
              </Text>
              <Box
                marginTop={"20px"}
                style={{ padding: "20px" }}
                border={"5px solid white"}
              >
                <table>
                  <tbody>
                    {apiData &&
                      apiData.product_information.map((el) => {
                        return (
                          <tr key={el.id}>
                            <td className="table_key">{el.key}</td>
                            <td>:</td>
                            <td className="table_value">{el.value}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
                {apiData && (
                  <Link to={"/contact"}>
                    <Button
                      backgroundColor={"black"}
                      color={"white"}
                      fontWeight={"300"}
                      variant={"none"}
                      borderRadius={"2px"}
                      mt={8}
                    >
                      {apiData && apiData.button_text}
                    </Button>
                  </Link>
                )}
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box w={"92%"} margin={"auto"} mt={"70px"} mb={"70px"}>
        <Box>
          <Text
            color={"#E7E7E7"}
            fontSize={["30px", "30px", "50px"]}
            fontWeight={"500"}
            textAlign={"center"}
          >
            {apiData && apiData.key_features}
          </Text>
          <Text
            fontSize={["30px", "28px", "48px"]}
            mt={["-20px", "-20px", "-30px"]}
            lineHeight={["30px", "40px", "50px"]}
            fontWeight={"600"}
            textAlign={"center"}
            
          >
            {apiData && apiData.detail_specification}
          </Text>
        </Box>
        <Box>
          <Text mt={8} mb={4} fontSize={["18px", "19px", "22px", "24px"]}>
            {apiData && apiData.product_name}
          </Text>
          <Text
            fontSize={"18px"}
            fontWeight={"300"}
            mb={4}
            color={"blackAlpha.700"}
            lineHeight={"35px"}
          >
            {apiData && apiData.product_fullDesc}
          </Text>
          <Flex direction={["column", "column", "column", "column", "row"]}>
            <Box w={["100%", "100%", "100%", "100%", "50%"]}>
              <table>
                <tbody>
                  {apiData && apiData.product_specification_1 ? (
                    apiData.product_specification_1.map((el) => (
                      <tr key={el.id}>
                        <td className="table_key">{el.key}</td>
                        <td>:</td>
                        <td className="table_value">{el.value}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </Box>
            <Box w={["100%", "100%", "100%", "100%", "50%"]}>
              <table>
                <tbody>
                  {apiData && apiData.product_spec_2 ? (
                    apiData.product_spec_2.map((el) => (
                      <tr key={el.id}>
                        <td className="table_key">{el.key}</td>
                        <td>:</td>
                        <td className="table_value">{el.value}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </Box>
          </Flex>
          <Box my={16}>
          <Text
            color={"#E7E7E7"}
            fontSize={["30px", "30px", "50px"]}
            fontWeight={"500"}
            textAlign={"center"}
          >
            HAVE A QUESTION
          </Text>
          <Text
            fontSize={["30px", "28px", "48px"]}
            mt={["-20px", "-20px", "-30px"]}
            lineHeight={["30px", "40px", "50px"]}
            fontWeight={"600"}
            textAlign={"center"}
            
          >
            FAQ'S
          </Text>
        </Box>
        <Accordion allowMultiple>
        {apiData && apiData.faq.map((el) => (
          <AccordionItem
            key={el.id} // Use a unique identifier here
            backgroundColor={"#f8f8f8"}
            border={"2px solid white"}
            padding={"10px"}
          >
            <h2>
              <AccordionButton _hover={{ bgColor: "none" }}>
                <Box as="span" flex="1" textAlign="left">
                  {el.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color={"gray"} fontWeight={"300"}>
             {el.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
