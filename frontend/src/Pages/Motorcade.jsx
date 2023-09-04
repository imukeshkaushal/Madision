import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Motorcade = () => {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/categories/4`, {
        params: {
          populate: "products.slider_img",
          "pagination[page]": currentPage,
          "pagination[pageSize]": itemsPerPage,
        },
      })
      .then((response) => {
        setApiData(response.data.data.attributes.products.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  const totalPages = Math.ceil(apiData.length / itemsPerPage);

  return (
    <div>
      <Box backgroundColor={"white"}>
        <Box
          height="450px"
          p={[4, 8, 12]}
          position="relative"
          backgroundPosition="center center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage=
            {"https://madisonavenuearmor.com/new/wp-content/uploads/2023/08/imgpsh_fullsize_anim-1-1-1.webp"}
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
            MOTORCADE SERVICES
          </Text>
        </Box>
        <Flex
        direction={"column"}
        gap={"20px"}
        maxW={["95%", "95%", "90%"]}
        p={"5"}
        m={"auto"}
        marginTop={12}
        marginBottom={12}
        backgroundColor={"#F6F6F6"}
      >
        {
            apiData.map((el,index) => {
                return(
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
                )
            })
        }
        </Flex>
        <Flex
        alignItems={"center"}
        justifyContent={"center"}
        gap={"20px"}
        mt={12}
        mb={12}
      >
        <button
          className="pagination_btn"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Flex alignItems={"center"} gap={2}>
            <ChevronLeftIcon />
            <Text>Previous</Text>
          </Flex>
        </button>
        <Text
          backgroundColor={"#051F16"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"40px"}
          width={"40px"}
          color={"white"}
          borderRadius={"50%"}
        >
          {currentPage}
        </Text>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <Flex alignItems={"center"} >
            <Text>Next</Text>
            <ChevronRightIcon />
          </Flex>
        </button>
      </Flex>
      </Box>
      
    </div>
  );
};

export default Motorcade;
