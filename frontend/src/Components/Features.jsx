import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Features = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/home?populate=Features.image")
      .then((response) => {
        setApiData(response.data.data.attributes);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Box
        mt={16}
        display={"grid"}
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
        ]}
        alignItems={"center"}
        justifyContent={"center"}
        gap={16}
      >
        {apiData &&
          apiData.Features.map((feature, index) => (
            <Flex
              key={index}
              direction={"column"}
              gap={8}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                maxW={"120px"}
                src={`http://localhost:1337${feature.image.data.attributes.url}`}
                alt={feature.Title}
              />
              <Text fontWeight={"500"}>{feature.Title}</Text>
            </Flex>
          ))}
      </Box>
    </div>
  );
};

export default Features;
