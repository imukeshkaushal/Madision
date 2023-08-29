import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/products`, {
        params: {
          populate: "*",
          "pagination[page]": currentPage,
          "pagination[pageSize]": itemsPerPage,
        },
      })
      .then((response) => {
        setApiData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  const totalPages = Math.ceil(apiData.length / itemsPerPage);
  return (
    <Box>
      <Flex
        direction={"column"}
        gap={"20px"}
        maxW={["95%", "95%", "90%"]}
        p={"5"}
        m={"auto"}
        backgroundColor={"#F6F6F6"}
      >
        {apiData &&
          apiData.map((el) => {
            return (
              <Flex
                gap={"20px"}
                direction={["column", "column", "row"]}
                key={el.id}
              >
                <Box w={["100%", "100%", "18%"]}>
                  <Link to={`/cars/${el.id}`}>
                    <Image
                      h={"100%"}
                      w={"100%"}
                      src={`http://localhost:1337${
                        el && el.attributes.slider_img.data[0].attributes.url
                      }`}
                      alt="madison product"
                    />
                  </Link>
                </Box>
                <Box w={["100%", "100%", "70%"]}>
                  <Link to={`/cars/${el.id}`}>
                    <Text
                      fontSize={["20px", "22px", "24px"]}
                      fontWeight={"500"}
                    >
                      {el && el.attributes.product_name}
                    </Text>
                  </Link>
                  <Text
                    fontSize={"17px"}
                    fontWeight={"200"}
                    mt={4}
                    noOfLines={3}
                  >
                    {el && el.attributes.product_fullDesc}
                  </Text>
                  <Link to={`/cars/${el.id}`}>
                    <Button
                      fontWeight={"300"}
                      backgroundColor={"#051F16"}
                      color={"white"}
                      variant={"none"}
                      borderRadius={"none"}
                      padding={"25px 45px"}
                      mt={8}
                    >
                      READ MORE
                    </Button>
                  </Link>
                </Box>
              </Flex>
            );
          })}
      </Flex>
      <Flex alignItems={"center"} justifyContent={"center"} gap={"20px"} mt={12} mb={12}> 
        <Button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          variant={"none"}
          fontWeight={"300"}
          border={"1px solid black"}
          borderRadius={"none"}
          backgroundColor={"#051F16"}
          color={"white"}
          padding={"25px 40px"}
        >
          Previous Page
        </Button>
        <Text>{currentPage}</Text>
        
        <Button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          color={"white"}
          variant={"none"}
          fontWeight={"300"}
          border={"1px solid black"}
          borderRadius={"none"}
          backgroundColor={"#051F16"}
          padding={"25px 40px"}
        >
          Next Page
        </Button>
      </Flex>
    </Box>
  );
};

export default Products;
