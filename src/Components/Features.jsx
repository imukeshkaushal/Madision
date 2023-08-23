import { Box, Flex, Image, Text} from '@chakra-ui/react'
import React from 'react'

const Features = () => {
  return (
    <div>
        <Box mt={16} display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]} alignItems={"center"} justifyContent={"center"} gap={16}>
            <Flex direction={"column"} gap={8} alignItems={"center"} justifyContent={"center"}>
                <Image maxW={"120px"} src='https://madisonavenuearmor.com/new/wp-content/uploads/2023/07/Group-560.png' alt='exp'/>
                <Text  fontWeight={"500"}>25 YEARS OF EXPERIENCE</Text>
            </Flex>
            <Flex direction={"column"} gap={8} alignItems={"center"} justifyContent={"center"}>
                <Image maxW={"120px"} src='https://madisonavenuearmor.com/new/wp-content/uploads/2023/07/Group-559.png' alt='exp'/>
                <Text  fontWeight={"500"}>TEAM OF SKILLED PROFESSIONALS</Text>
            </Flex>
            <Flex direction={"column"} gap={8} alignItems={"center"} justifyContent={"center"}>
                <Image maxW={"120px"} src='https://madisonavenuearmor.com/new/wp-content/uploads/2023/07/Group-558.png' alt='exp'/>
                <Text  fontWeight={"500"}>VARIETY OF VEHICLES AND BRANDS</Text>
            </Flex>
            <Flex direction={"column"} gap={8} alignItems={"center"} justifyContent={"center"}>
                <Image maxW={"120px"} src='https://madisonavenuearmor.com/new/wp-content/uploads/2023/07/Group-557.png' alt='exp'/>
                <Text  fontWeight={"500"}>COMPITATIVE RATES</Text>
            </Flex>

        </Box>
    </div>
  )
}

export default Features