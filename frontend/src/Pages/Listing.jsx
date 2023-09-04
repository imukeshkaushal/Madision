import { Box, Text } from "@chakra-ui/react";
import VideoPlayer from "../Components/VideoPlayer";
import Products from "../Components/Products";
import { useEffect, useState } from "react";
import axios from "axios";

const Listing = () => {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
      axios
        .get("http://localhost:1337/api/listing-page?populate=*")
        .then((response) => {
          setApiData(response.data.data.attributes);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
    
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
            {`http://localhost:1337${apiData && apiData.image.data.attributes.url}`}
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
            {apiData && apiData.cover_title}
          </Text>
        </Box>
          <VideoPlayer/>
          <Products/>
      </Box>
    </div>
  );
};

export default Listing;
