import { Flex, Box, Text, IconButton } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <Flex w={["95%", "95%", "90%"]} m={"auto"} py={12} gap={16} alignItems={"center"}>
      <Box width={"45%"}>
        <Text
          color={"#E7E7E7"}
          fontSize={["30px", "30px", "50px"]}
          fontWeight={"500"}
        >
          AVAILABLE
        </Text>
        <Text
          fontSize={["30px", "28px", "48px"]}
          mt={["-20px", "-20px", "-30px"]}
          lineHeight={["30px", "40px", "50px"]}
          fontWeight={"600"}
        >
          NEW ARMORED PASSENGER VEHICLES FOR YOU
        </Text>
        <Text fontSize={["16px", "18px", "18px"]} mt={8}>
          MADISON AVENUE ARMOR SELLS A LIMITED NUMBER OF OUR FAILSAFE
          BULLET-RESISTANT VVIP PASSENGER VEHICLES TO SELECT ORGANIZATIONS.
          SECURITY COMPANIES, PRIVATE ESTATES, AND GOVERNMENTS. HERE IS A LIST
          OF OUR CURRENT INVENTORY OF NEW ARMORED PASSENGER VEHICLES AVAILABLE
          FOR IMMEDIATE PURCHASE.
        </Text>
      </Box>
      <Box w={"60%"} border={"1px solid green"} height={"auto"} position="relative">
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
            src="https://madisonavenuearmor.com/new/wp-content/uploads/2023/08/Madison-Video.mp4"
            type="video/webm"
          />
        </video>
      </Box>
    </Flex>
  );
}

export default VideoPlayer;
