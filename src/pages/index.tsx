import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Flex,
  SimpleGrid,
  useBreakpointValue,

} from "@chakra-ui/react"
import { keyframes } from "@emotion/react";
import {  FaArrowRightLong } from "react-icons/fa6"
import MobileImg from "./components/icons/mobileImg"
import LapImg from "./components/icons/lapImg"
import { useEffect, useState } from "react"
import MobileImgTwo from "./components/icons/mobileImgTwo"
import { GiSuitcase } from "react-icons/gi";
import { BsLaptopFill } from "react-icons/bs";
import { GrSettingsOption } from "react-icons/gr";

import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";


const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-80%); } 
`;



const Home = () => {

  const stats = [
    { value: "200+", label: "Labs Onboarded" },
    { value: "10K", label: "Patients Records Processed" },
    { value: "4.8", label: "Rated by our users" }
  ];

  const showGrid = useBreakpointValue({ base: false, md: true });


  const images = [
    <MobileImg
      width={{ base: "280px", md: "350px", lg: "450px", xl: "550px" }}
      height={{ base: "350px", md: "440px", lg: "560px", xl: "680px" }}
      maxWidth="100%"
    />,
    <LapImg 
    width={{ base: "280px", md: "350px", lg: "450px", xl: "550px" }}
    height={{ base: "350px", md: "440px", lg: "560px", xl: "680px" }}
    maxWidth="100%"
    />,
    <MobileImgTwo 
    width={{ base: "280px", md: "350px", lg: "450px", xl: "550px" }}
    height={{ base: "350px", md: "440px", lg: "560px", xl: "680px" }}
    maxWidth="100%"
    />
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  
  
    
    
      useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex(prev => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
      }, []);

      const router = useRouter();


  return (
    <Box>

      <Header />

      {/*Hero Section*/}
      <Box bg="gray.50" py={15}   px={5}>
        <Container maxW="8xl"  mt={{base:20,lg:0}}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            alignItems="center"
            justify="space-between"
            gap={12}
           
          >
            
            <VStack align={{base:'center',md:'center',lg:'flex-start'}} spacing={{base:5,lg:8}} flex={1} maxW={{base : "full", md :"400px",lg :"700px"}}>
              <Text
                // as="h1"
                fontSize={{ base: "24px", md: "40px", lg: "54px" }}
                fontWeight="700"
                color="gray.800"
                lineHeight={{base:'34px',md:'44px',lg:'60px'}}
                letterSpacing="-0.02em"
                textAlign={{ base: "center",md:'center', lg: "left" }}
              >
                Digital Healthcare.
                <br />
                Seamlessly Connected.
              </Text>
              
              <Text
                 fontSize={{ base: "12px", md: "14px", lg: "16px" }} 
                color="gray.600"
                lineHeight="1.6"
                textAlign={{ base: "center", lg: "left" }}
              >
              Transform the way labs operate, clinics treat, and patients manage health — with one powerful platform designed for speed, precision, and intelligent automation.
              </Text>
              
              <HStack spacing={4} pt={4}>
                <Button
                  bg="rgba(31, 107, 161, 1)"
                  color="white"
                  size="lg"
                  px="22px"
                  height={{base:"40px",lg:"58px"}}
                  
                  minW={{base : "80px", md :"150px",lg : "200px"}}
                  py="18px"
                  fontSize={{base:"sm",lg:"md"}}
                  fontWeight="500"
                  borderRadius={{base:'10px',lg:"16px"}}
                  
                  _active={{
                    bg: "blue.800",
                  }}
                  _hover={{
                    bg: "blue.700",
                    transform: "translateX(-2px)",
                  }}
                  transition="all 0.1s"
                  rightIcon={
                    <FaArrowRightLong />
                  }
                  onClick={()=>router.push('/contact')}
                >
                  Get Started
                </Button>
                
                <Button
                  variant="ghost"
                  size="lg"
                  px="22px"
                 height={{base:"40px",lg:"58px"}}
                   py="18px"
                     fontWeight="500"
                 borderRadius={{base:'10px',lg:"16px"}}
                  minW={{base : "80px", md :"150px",lg : "200px"}}
                  bgColor={"rgba(255, 255, 255, 1)"}
                  border=" 1px solid rgba(195, 195, 195, 0.33)"
                  fontSize={{base:"sm",lg:"md"}}
                  
                  color="gray.700"
                  _hover={{
                    bg: "gray.100",
                  }}
                   onClick={()=>router.push('/products')}
                >
                  Explore Our Products
                </Button>
              </HStack>
            </VStack>

            {/* Right Content - Phone Mockup */}
            <Box flex={1} position="relative" maxW={{ base: "320px", md: "400px", lg: "450px", xl: "550px" }}>
    
            {images[activeIndex]}

            {/* Pagination Dots */}
            <HStack justify="center" mt={-2} spacing={2}>
              {images.map((_, i) => (
                <Box
                  key={i}
                  height="6px"
                  w={activeIndex === i ?  "36px" : "18px"}
                  borderRadius={"20px"}
                  bg={activeIndex === i ? "rgba(123, 122, 122, 1)" : "gray.300"}
                />
              ))}
            </HStack>
          </Box>
       
          </Flex>
        </Container>
      </Box>

      {/* Built for India's Digital Health Revolution */}
      <Box py={20} bg="white">
        <Container maxW="8xl">
   
          <Flex
            direction={{ base: "column", lg: "row" }}
            alignItems={{base:'center',md:'center',lg:'flex-start'}}
            justify="space-between"
            gap={{base:8,lg:12}}
          >
             <VStack align={{base:'center',md:'center',lg:'flex-start'}} spacing={8} flex={1} maxW={{base : "full", md :"400px",lg :"600px"}}>
             <Heading flex={1} fontSize={{base:'24px',md : "34px",lg:'44px'}}  color="#12161D" >
                Built for India's Digital Health Revolution
              </Heading>
              </VStack>
              <VStack flex={1}  maxW={{ base: "full", md: "400px", lg: "700px" }}>
              <Text fontSize={{base:'12px',md : "15px",lg:'18px'}}  color="#61656E" lineHeight={{base:'22px',md:'25px',lg:'28px'}} px={{base:1}} >
              At Arogya-Parinam, we’re committed to transforming healthcare delivery in India. 
              We build simple, intuitive, and compliant software products that help labs, clinics, and patients stay connected. 
              Whether you're managing diagnostics, running a clinic, or tracking personal health records — our tools are built to serve you.
              </Text>

              {showGrid ? (
      
        <Flex
         justify={'space-between'}
          mt={{ base: "40px", md: "60px", lg: "80px" }}
          // spacing={15}
        
          w="100%"
         
        >
          {stats.map((stat, i) => (
            <VStack key={i} spacing={2} textAlign="center">
              <Text fontSize="4xl" fontWeight="600" color="rgba(18, 22, 29, 1)">
                {stat.value}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {stat.label}
              </Text>
            </VStack>
          ))}
        </Flex>
      ) : (
      
 <Box overflow="hidden" bg="white" pt={6} mt="40px">
  <Box
    as="div"
    display="inline-flex"           
    whiteSpace="nowrap"              
    maxW="90vw"                     
    animation={`${scroll} 5s linear infinite`}
  >
    {[...stats, ...stats].map((stat, i) => (
      <Box
        key={i}
        flex="0 0 auto"             
        px={6}                    
        minW="200px"                
        textAlign="center"
      >
        <Text fontSize="3xl" fontWeight="600" color="rgba(18, 22, 29, 1)">
          {stat.value}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {stat.label}
        </Text>
      </Box>
    ))}
  </Box>
</Box>




      )}
             </VStack>
           
            
            
            </Flex>
 
        </Container>
      </Box>

      {/* Why Choose Arogya Partner */}
      <Box py={20} >
        <Container maxW="8xl">
          <VStack spacing={{base:6,lg:12}}  >
            <Heading fontSize={{base:'24px',md : "34px",lg:'44px'}} display={"flex"} alignSelf={"flex-start"} color="#12161D">
              Why Choose Arogya-Parinam?
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 3 }}   spacing={8} mt={{base:'42px',md:'60px',lg:'80px'}}>
              {[
                {
                  icon: <GiSuitcase size={"30px"} color="rgba(255, 255, 255, 1)"/>,
                  title: "Intelligent workflows",
                  description: "From auto-reporting in labs to clinical insights, our platform helps you work faster and more accurately."
                },
                {
                  icon: <BsLaptopFill size={"30px"} color="rgba(255, 255, 255, 1)"/>,
                  title: "All-in-One Platform",
                  description: "Manage diagnostics, patient records, and clinic operations under one unified, intuitive dashboard."
                },
                {
                  icon: <GrSettingsOption size={"30px"} color="rgba(255, 255, 255, 1)"/>,
                  title: "Built for Trust",
                  description: "Your data stays protected with enterprise-grade security and future-ready infrastructure."
                }
              ].map((feature, index) => (
                <VStack
                  key={index}
                  bg="rgba(255, 255, 255, 1)"
                  p={8}
                  
                  border={"1px solid rgba(240, 234, 234, 1)"}
                  borderRadius={"12px"}
                  boxShadow={"12px 16px 50px 0 rgba(154, 154, 154, 0.12)"}
                  spacing={10}
                  textAlign="center"
                >
                  <Box width={{base:'58px',md:'70px',lg:'80px'}} display="flex" alignItems="center" justifyContent="center" borderRadius={"100%"}    height={{base:'58px',md:'70px',lg:'80px'}} bg="rgba(84, 131, 169, 1)">
                    <Text fontSize="2xl">{feature.icon}</Text>
                  </Box>
                  <Text fontSize={{base:'20px',md : "22px",lg:'24px'}} fontWeight={600} color="rgba(18, 22, 29, 1)">{feature.title}</Text>
                  <Text color="rgba(57, 48, 42, 1)" lineHeight={{base:'22px',md:'26px',lg:'32px'}} fontSize={{base:'12px',md : "15px",lg:'19px'}} maxW={"75%"}>{feature.description}</Text>
                </VStack>
              ))}
            </SimpleGrid>
            
            <Button bgColor={"rgba(31, 107, 161, 1)"} borderRadius={{base:'10px',lg:"16px"}} height={{base:'40px',lg:"58px"}}
             color="rgba(255, 255, 255, 1)" px={"24px"} py={'20px'} fontSize={{base:"13px",lg:"18px"}}
            rightIcon={<FaArrowRightLong />}
            fontWeight={"500"}
            _hover={{
                    bg: "blue.700",
                    transform: "translateX(-2px)",
                  }}
                  transition="all 0.1s"
                  onClick={()=>router.push("/products")}
            >
              Explore Our Products
            </Button>
          </VStack>
        </Container>
      </Box>

     <Footer questions={true} />
    </Box>
  )
}

export default Home;

