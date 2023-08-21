import React from 'react'
import Carousel from '../Components/Carousel'
import { Box, Flex } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
        <Carousel/>
        <Flex>
            <Box>
                <Box
                    border = "2px solid red"
                    width = "50%"
                    height = "400px"
                    position="relative"
                    backgroundPosition="bottom center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    bgImage="url('https://madisonavenuearmor.com/new/wp-content/uploads/2023/07/Group-552.jpg')"
                >
                  {/* Your content goes here */}
                </Box>
            </Box>
            <Box
               border = "2px solid red"
               width = "50%"
               height = "1200px"
                position="relative"
                backgroundPosition="bottom center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                bgImage="url('https://madisonavenuearmor.com/new/wp-content/uploads/2023/07/Group-552.jpg')"
            >
              {/* Your content goes here */}
            </Box>
            
        </Flex>
    </div>
  )
}

export default Home