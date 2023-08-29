import { Flex, Box, Text} from "@chakra-ui/react";
import axios from "axios";

import { useEffect, useRef, useState } from "react";

function VideoPlayer() {
    const [apiData, setApiData] = useState(null);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

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
    <Flex w={["95%", "95%", "90%"]} m={"auto"} py={12} gap={16} alignItems={"center"} direction={["column","column","row"]}>
      <Box width={["100%","100%","45%"]}>
        <Text
          color={"#E7E7E7"}
          fontSize={["30px", "30px", "50px"]}
          fontWeight={"500"}
        >
          {apiData && apiData.title_1}
        </Text>
        <Text
          fontSize={["30px", "28px", "48px"]}
          mt={["-20px", "-20px", "-30px"]}
          lineHeight={["30px", "40px", "50px"]}
          fontWeight={"600"}
        >
          {apiData && apiData.title_2}
        </Text>
        <Text fontSize={["16px", "18px", "18px"]} mt={8}>
         {apiData && apiData.listing_desc}
        </Text>
      </Box>
      <Box w={["100%","100%","60%"]} border={"1px solid green"} height={"auto"} position="relative">
      {apiData && apiData.video && apiData.video.data && apiData.video.data.attributes && (
        <Box padding={"5px"}>
          <video
            ref={videoRef}
            width={"100%"}
            height={"100%"}
            preload="metadata"
            controls={false}
            muted={true}
            onClick={handlePlay}
          >
            <source
              src={`http://localhost:1337${apiData.video.data.attributes.url}`}
              type="video/webm"
            />
          </video>
        </Box>
      )}
      </Box>
    </Flex>
  );
}

export default VideoPlayer;
