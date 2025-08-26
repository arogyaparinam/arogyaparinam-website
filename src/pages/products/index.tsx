import { Box, Button, Container, HStack, Stack, VStack,Text, Grid, GridItem } from "@chakra-ui/react";
import Header from "../header";
import Footer from "../footer";
import { FaArrowRightLong, FaGraduationCap } from "react-icons/fa6";
import ProductsImg from "../components/icons/productsImg";
import { PiCirclesThreeFill } from "react-icons/pi";
import { RiFileUploadFill } from "react-icons/ri";
import { useRouter } from "next/router";



const Products = () => {

  const router = useRouter();



    return (
        <Box>
            {/*Header */}
            <Header />

            {/*Hero Section*/}
             <Box
              bgGradient="linear(to-b, rgba(246, 251, 255, 1), rgba(255, 255, 255, 1))"
              py={15}
              pt={20}
              px={5}
            >
              <Container maxW="8xl" mt={10}>
                <Stack
                  direction={"column"}
                  align="center"
                  spacing={{ base: 10, md: 20, lg: 32 }}
                >
                  {/* Left Content */}
                  <VStack
                    spacing={{base:5,lg:8}}
                    maxW={{ base: "full", md: "500px", lg: "75%" }}
                    flex="1"
                    align="center"
                  >
                    <Text
                      fontSize={{ base: "24px", md: "40px", lg: "54px" }}
                      fontWeight="700"
                      color="rgba(29, 29, 31, 1)"
                      lineHeight={{base:'34px',md:'44px',lg:'60px'}}
                      letterSpacing="-0.03em"
                      textAlign="center"
                      px={0}
                      
                    >
<Box as="span" whiteSpace="nowrap">
    Delivering Innovations Shaping
  </Box>{" "}
  <br />
  Health Futures
                    </Text>
            
                    <Text
                      fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                      color="rgba(106, 106, 106, 1)"
                      lineHeight="1.6"
                      textAlign="center"
                    >
                      At Arogya Parinam, we create solutions that improve healthcare delivery, enhance patient experiences, and empower medical professionals. Each of our products is designed with innovation, precision, and compassion to ensure better health outcomes for all.
                    </Text>
            
                    <HStack spacing={4} pt={4}  justify="center">
                      <Button
                        bg="rgba(31, 107, 161, 1)"
                        color="white"
                        size="lg"
                        px="22px"
                        height={{base:'40px',lg:"58px"}}
                        minW={{ base: "120px", md: "150px", lg: "200px" }}
                        fontSize={{ base: "sm", lg: "md" }}
                        fontWeight="500"
                        borderRadius={{base:'10px',lg:"16px"}}
                      
                        _active={{ bg: "blue.800" }}
                       
                        rightIcon={<FaArrowRightLong />}
                         _hover={{
                    bg: "blue.700",
                    transform: "translateX(-2px)",
                  }}
                  transition="all 0.1s"
                  onClick={()=>router.push("/contact")}
                      >
                        Get Started
                      </Button>
            
                     
                    </HStack>
                  </VStack>
            
                  
                  <Box flex="1" w="full" textAlign="center">
                    <ProductsImg
                      maxW="100%"
                      w="full"
                      h="auto"
                      objectFit="contain"
                    />
                  </Box>
                </Stack>
              </Container>
            </Box>


            {/*Why choose Arogya-parinam products*/}
               <Box  bg="white"  py={20} pb={15}>
                    <Container maxW="8xl" bgColor={"rgba(255, 255, 255, 1)"} borderRadius={{base:'12px',lg:'40px'}}px={8} >
                      <Stack display={"flex"} flexDir={"column"} alignItems={"flex-start"} spacing={{base:7,lg:10}}>
            
                        <Text fontSize={{base:'24px',md:'34px',lg:'44px'}} lineHeight={{base:'34px',md:'44px',lg:'52px'}} fontWeight={"700"}
                         color={"#12161D"} >Why Choose Arogya <br /> Parinam Products?</Text>

                         <Text color={{base:'rgba(59, 59, 59, 1)',lg:'#61656E'}}>At Arogya Parinam, we go beyond creating products — we deliver solutions that truly make a difference in healthcare and everyday life.</Text>
                      </Stack>
                       <Grid
               templateColumns={{ base: "1fr", lg: "repeat(13, 1fr)" }} 
              templateRows="repeat(4, 1fr)"
              gap={8} 
            
              mt={{base:12,lg:14}}
            >
              <GridItem colSpan={{base:8,lg:7}} rowSpan={4} >
                <Box bgColor="rgba(244, 244, 244, 1)" border="1px solid rgba(231, 231, 231, 1)" borderRadius={{base:'12px',lg:'24px'}} p={4} px={6}>
                  <Box w="60px" h="60px" display={"flex"} alignItems={"center"} justifyContent={"center"} borderRadius={"60px"} bgColor="rgba(246, 251, 255, 1)">
                  <RiFileUploadFill  size={26} color="rgba(74, 150, 216, 1)" />
                  </Box>
            
                  <Text color="rgba(7, 7, 7, 1)" mt={{base:'20px',lg:'34px'}} fontSize={{base:'18px',md:'23px',lg:'26px'}} fontWeight={600}>Designed for Real Needs</Text>
                  
                  <Text mt={{base:'12px',lg:'22px'}} color={{base:"rgba(59, 59, 59, 1)", lg:"rgba(120, 120, 120, 1)"}} maxW={"90%"} fontSize={{base:'12px',md:'15px',lg:'19px'}}>Every product is built from deep research and user feedback to solve genuine problems.</Text>
                  </Box>
              </GridItem>
              <GridItem colSpan={{base:8,lg:6}} rowSpan={4}>
                <Box bgColor="rgba(244, 244, 244, 1)" border="1px solid rgba(231, 231, 231, 1)" borderRadius={{base:'12px',lg:'24px'}}  p={4} px={6}>
                  <Box w="60px" h="60px" display={"flex"} alignItems={"center"} justifyContent={"center"} borderRadius={"60px"} bgColor="rgba(246, 251, 255, 1)">
                  <FaGraduationCap   size={26} color="rgba(74, 150, 216, 1)" />
                  </Box>
            
                  <Text color="rgba(7, 7, 7, 1)" mt={{base:'20px',lg:'34px'}} fontSize={{base:'18px',md:'23px',lg:'26px'}} fontWeight={600}>Secure & Reliable</Text>
                  
                  <Text mt={{base:'12px',lg:'22px'}} color={{base:"rgba(59, 59, 59, 1)", lg:"rgba(120, 120, 120, 1)"}} maxW="90%" 
                  fontSize={{base:'12px',md:'15px',lg:'19px'}}>We prioritize data safety, privacy, and compliance with industry standards.</Text>
                  </Box>
              </GridItem>
              <GridItem colSpan={{base:8,lg:6}} rowSpan={4}>
                <Box bgColor="rgba(244, 244, 244, 1)" border="1px solid rgba(231, 231, 231, 1)" borderRadius={{base:'12px',lg:'24px'}}  p={4} px={6}>
                  <Box w="60px" h="60px" display={"flex"} alignItems={"center"} justifyContent={"center"} borderRadius={"60px"} bgColor="rgba(246, 251, 255, 1)">
                  <PiCirclesThreeFill   size={26} color="rgba(74, 150, 216, 1)" />
                  </Box>
            
                  <Text color="rgba(7, 7, 7, 1)" mt={{base:'20px',lg:'34px'}} fontSize={{base:'18px',md:'23px',lg:'26px'}} 
                  fontWeight={600}>Scalable & Future-Ready</Text>
                  
                  <Text mt={{base:'12px',lg:'22px'}} color={{base:"rgba(59, 59, 59, 1)", lg:"rgba(120, 120, 120, 1)"}} maxW={"90%"} 
                  fontSize={{base:'12px',md:'15px',lg:'19px'}}>Our solutions adapt and grow with your needs, ensuring long-term value.</Text>
                  </Box>
              </GridItem>
              <GridItem colSpan={{base:8,lg:7}} rowSpan={4}>
                <Box bgColor="rgba(244, 244, 244, 1)" border="1px solid rgba(231, 231, 231, 1)" borderRadius={{base:'12px',lg:'24px'}} p={4} px={6}>
                  <Box w="60px" h="60px" display={"flex"} alignItems={"center"} justifyContent={"center"} borderRadius={"60px"} bgColor="rgba(246, 251, 255, 1)">
                  <RiFileUploadFill  size={26} color="rgba(74, 150, 216, 1)" />
                  </Box>
            
                  <Text color="rgba(7, 7, 7, 1)" mt={{base:'20px',lg:'34px'}} fontSize={{base:'18px',md:'23px',lg:'26px'}} 
                  fontWeight={600}>Innovation with Purpose</Text>
                  
                  <Text mt={{base:'12px',lg:'22px'}} color={{base:"rgba(59, 59, 59, 1)", lg:"rgba(120, 120, 120, 1)"}} maxW="90%" 
                  fontSize={{base:'12px',md:'15px',lg:'19px'}}>We combine cutting-edge technology with compassion to deliver impactful results.</Text>
                  </Box>
              </GridItem>
            
              
            </Grid>
            
                  
                   </Container>
                    </Box>


            {/*Footer*/}
            <Footer questions={true} />
        </Box>
    )
}

export default Products;