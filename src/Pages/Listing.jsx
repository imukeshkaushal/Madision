import { Flex, Box, Text, IconButton } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import VideoPlayer from "../Components/VideoPlayer";

const Listing = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
      setIsPlaying(true);
    };
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
          backgroundImage={
            "https://madisonavenuearmor.com/new/wp-content/uploads/2023/08/imgpsh_fullsize_anim-1-1.png"
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
            NEW VEHICLE INVENTORY
          </Text>
        </Box>
          <VideoPlayer/>
      </Box>
    </div>
  );
};

export default Listing;
