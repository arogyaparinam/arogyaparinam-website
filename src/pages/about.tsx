import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  Button,
  Stack,
  Icon,
  Divider,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import Header from "./header"
import Footer from "./footer"
import { FaArrowRightLong, FaGraduationCap } from "react-icons/fa6"
import DoctorsImg from "./components/icons/doctorsImg"
import MissionImg from "./components/icons/missionImg"
import { PiCirclesThreeFill, PiGraduationCapLight } from "react-icons/pi"
import { IoSettingsOutline } from "react-icons/io5"
import { TiArrowSync } from "react-icons/ti"
import { RiFileUploadFill } from "react-icons/ri"
import ABDMIntegrationImg from "./components/icons/integrationImg"
import EcoSystemImg from "./components/icons/ecoSystemImg"
import PrivacyImg from "./components/icons/privacy"
import DesignerImg from "./components/icons/designerImg"
import DeveloperImg from "./components/icons/developerImg"
import { keyframes } from "@emotion/react"
import { useRouter } from "next/router"
import DoctorsMobile from "./components/icons/doctorMobile"

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

type Benefit = {
  label: string;
  icon: string; 
};

const About = () => {

    const banners = [
    {  label: "Lab Management System" },
    { label: "Electronic Health Records" },
    {  label: "Health Information Exchange" },
    {  label: "Clinical Software" }
  ];

   const benefits: Benefit[] = [
  { label: "100% Confidential", icon: "💰" },
  { label: "Multilingual Support", icon: "💬" },
  { label: "Real-Time Case Updates", icon: "📱" },
  { label: "Expert Legal Team", icon: "🔒" },
  { label: "24/7 Case Access", icon: "🚗" },
];

const router = useRouter();


  return (
    <Box>

      <Header />

       <Box
  bgGradient="linear(to-b, rgba(246, 251, 255, 1), rgba(255, 255, 255, 1))"
  py={15}
  pt={20}
  px={3}
>
  <Container maxW="8xl" mt={10}>
    <Stack
      direction={"column"}
      align="center"
      spacing={{ base: 10, md: 20, lg: 32 }}
    >
      {/* Left Content */}
      <VStack
        spacing={8}
        maxW={{ base: "full", md: "500px", lg: "700px" }}
        flex="1"
        align="center"
      >
        <Heading
          fontSize={{ base: "24px", md: "40px", lg: "54px" }}
          fontWeight="700"
          color="rgba(29, 29, 31, 1)"
          lineHeight={{base:'34px',md:'44px',lg:'60px'}}
          letterSpacing="-0.02em"
          textAlign="center"
          
        >
          Wellness With Purpose, <br />
          Driven by Results
        </Heading>

        <Text
          fontSize={{ base: "12px", md: "14px", lg: "16px" }}
          color="rgba(106, 106, 106, 1)"
          lineHeight="1.6"
          textAlign="center"
        >
          Arogya-Parinam empowers labs, clinics, and individuals with secure,
          government-aligned digital tools. From diagnostics to health records,
          manage everything in one place - built for India’s digital health
          future.
        </Text>

        <HStack spacing={{base:'14px',lg:4}} pt={4}  justify="center">
          <Button
            bg="rgba(31, 107, 161, 1)"
            color="white"
            size="lg"
             px={{base:'20px',lg:"22px"}}
            
            minW={{ base: "120px", md: "150px", lg: "200px" }}
            fontSize={{ base: "sm", lg: "md" }}
            height={{base:'40px',lg:"58px"}}
            borderRadius={{base:'10px',lg:"16px"}}
           
            _active={{ bg: "blue.800" }}
            fontWeight="500"
            _hover={{
                    bg: "blue.700",
                    transform: "translateX(-2px)",
                  }}
                  transition="all 0.1s"
            rightIcon={<FaArrowRightLong />}
            onClick={()=>router.push("/contact")}

          >
            Get Started
          </Button>

          <Button
            variant="ghost"
            size="lg"
            px={{base:'20px',lg:"22px"}}
            minW={{ base: "120px", md: "150px", lg: "200px" }}
             height={{base:'40px',lg:"58px"}}
            borderRadius={{base:'10px',lg:"16px"}}
            bg="white"
            border="1px solid rgba(195, 195, 195, 0.33)"
            fontSize={{ base: "sm", lg: "md" }}
            fontWeight="500"
            color="gray.700"
           onClick={()=>router.push("/products")}
            _hover={{
                    bg: "gray.100",
                    transform: "translateX(-2px)",
                  }}
                  transition="all 0.1s"
          >
            Explore Our Products
          </Button>
        </HStack>
      </VStack>

      
      <Box flex="1" w="full" textAlign="center" display={{base:'none',md:'block',lg:'block'}}>
     <DoctorsImg
          maxW="100%" 
          w="full"
          h="auto"
          objectFit="contain"
        />
       
      </Box>
      <Box flex="1" w="full" textAlign="center" display={{base:'block',md:'none',lg:'none'}}>
     
        <DoctorsMobile   maxW="100%" 
          w="full"
          h="auto"
          objectFit="contain"/>
      </Box>
    </Stack>
  </Container>
</Box>


      {/*Health Revolution*/}
       <Box py={20} bg="white" mt={{base:1,lg:10}}>
        <Container maxW="8xl">
        <Flex flexDir={"column"} justify={"flex-start"} align={"flex-start"} gap={{base:'20px',md:'32px',lg:'45px'}} >
              <Heading fontSize={{base:'24px',md : "34px",lg:'44px'}} color={"#12161D"} >
               Built for India’s Digital <br /> Health Revolution
              </Heading>
              <Text  color="#61656E" fontSize={{base:'12px',md:'15px',lg:'20px'}} lineHeight={{base:'22px',md:'26px',lg:'32px'}}>
              ArogyaParinam is digitalizing India’s healthcare ecosystem with secure, government-aligned software that connects labs, clinics, and individuals. Our platform unifies diagnostics, clinical care, and personal health records—seamlessly integrated with the ABHA system for trusted, consent-based data sharing.
              </Text>
            </Flex>
           <Flex
            direction={{ base: "column", lg: "row" }}
            alignItems="center"
          
            gap={20}
            py={{base:10,lg:20}}
          >
        
    
             <MissionImg
         w={{base : "100%", md :"auto",lg :"600px"}}
         maxW="100%"
         h="auto"
        
        />
     
            <VStack align={'flex-start'} spacing={8} flex={1}>
              <Text color="rgba(18, 26, 32, 1)" fontSize={{base:'20px',md:'24px',lg:'28px'}} fontWeight={600}>We’re on a mission to</Text>
              <Flex align={"center"} gap={5}>
                <Icon boxSize={{base:7,lg:10}}>
                  <PiGraduationCapLight   size={24} color="rgba(62, 130, 190, 1)"/>
                </Icon>

                <Text color="rgba(106, 106, 106, 1)" fontWeight={500} fontSize={{base:'12px',md:'16px',lg:'20px'}}>Digitalize workflows for seamless health data flow </Text>
              </Flex>

             <Divider
        py={2}
        height="1px"
        color="rgba(229, 229, 229, 1)"
        display={{ base: "none", md: "block" }} 
      />
              <Flex align={"center"} gap={5}>
               <Icon boxSize={{base:7,lg:10}}>
                  <IoSettingsOutline    size={24} color="rgba(62, 130, 190, 1)"/>
                </Icon>

                <Text color="rgba(106, 106, 106, 1)" fontWeight={500} fontSize={{base:'12px',md:'16px',lg:'20px'}}>Empower users with ABHA-linked health records </Text>
              </Flex>

               <Divider
        py={2}
        height="1px"
        color="rgba(229, 229, 229, 1)"
        display={{ base: "none", md: "block" }} 
      />
              <Flex align={"center"} gap={5}>
               <Icon boxSize={{base:7,lg:10}}>
                  <TiArrowSync    size={24} color="rgba(62, 130, 190, 1)"/>
                </Icon>

                <Text color="rgba(106, 106, 106, 1)" fontWeight={500} fontSize={{base:'12px',md:'16px',lg:'20px'}}>Bridge healthcare silos with interoperable software</Text>
              </Flex>

            <Divider
        py={2}
        height="1px"
        color="rgba(229, 229, 229, 1)"
        display={{ base: "none", md: "block" }} 
      />

              <Button
            bg="rgba(31, 107, 161, 1)"
            color="white"
            size="lg"
            px="22px"
            height={{base:'40px',lg:"58px"}}
            minW={{ base: "120px", md: "150px", lg: "200px" }}
            fontSize={{ base: "sm", lg: "md" }}

            borderRadius={{base:'10px',lg:"16px"}}
           
            _active={{ bg: "blue.800" }}
           
            rightIcon={<FaArrowRightLong />}
             fontWeight="500"
            _hover={{
                    bg: "blue.700",
                    transform: "translateX(-2px)",
                  }}
                  transition="all 0.1s"

            onClick={()=>router.push("/contact")}
          >
            Get Started
          </Button>
           
            </VStack>

            
            
       
          </Flex>
        </Container>
      </Box>


    {/*Animated*/}
<Box  bg="white" width="100%" pb={10} display={{base:'none',md:'none',lg:'block'}}>
  <Box overflow="hidden" width="100%" bg="white" py={4}>
    <HStack
      as="div"
      animation={`${scrollLeft} 20s linear infinite`}
      spacing={10}
      width="max-content"
    >
      {[...banners, ...banners].map((banner, i) => (
        <Flex
          key={i}
          gap={5}
          bgColor={"rgba(246, 251, 255, 1)"}
          border="1px solid rgba(229, 229, 229, 1)"
            boxShadow={"2px 2px 16px 1px rgba(208, 215, 255, 0.30)"}
          py={'12px'}
          px={'24px'}
          borderRadius={"16px"}
          justify={"center"}
          alignItems={"center"}
        
          minW="350px"
          flexShrink={0}
        >
         <Text fontSize={"21px"} color="rgba(0, 0, 0, 1)">⚖️</Text>
          <Text fontSize="18px" color="rgba(41, 41, 41, 1)" fontWeight={"500"}>
            {banner.label}
          </Text>
        </Flex>
      ))}
    </HStack>
  </Box>
 
  <Box overflow="hidden" width="100%" bg="white" py={5} >
    <HStack
      as="div"
      animation={`${scrollRight} 20s linear infinite`}
      spacing={10}
      width="max-content"
    >
      {[...benefits, ...benefits].map((benefit, i) => (
        <Flex
          key={i}
          gap={5}
          bgColor={"rgba(246, 251, 255, 1)"}
          border="1px solid rgba(229, 229, 229, 1)"
          py={'12px'}
          px={'24px'}
          borderRadius={"16px"}
          justify={"center"}
          alignItems={"center"}
         boxShadow={"2px 2px 16px 1px rgba(208, 215, 255, 0.30)"}
          minW="350px"
          flexShrink={0}
        >
          <Text fontSize={"21px"}>{benefit.icon}</Text>
         
          <Text fontSize="18px" color="rgba(41, 41, 41, 1)" fontWeight={"500"}>
            {benefit.label}
          </Text>
        </Flex>
      ))}
    </HStack>
  </Box>
  </Box>


    {/*Future of Health Care*/}
       <Box py={10} pt={{base:1,lg:10}} >
        <Container maxW="8xl" bgColor={"rgba(244, 244, 244, 1)"} borderRadius={{base:'12px',lg:'40px'}} py={20} px={8} >
          <Stack display={"flex"} flexDir={"column"} alignItems={"center"}>

            <Text fontSize={{base:'24px',md:'34px',lg:'44px'}} lineHeight={{base:'34px',md:'44px',lg:'52px'}} fontWeight={"700"} color={"rgba(29, 29, 31, 1)"} >The Future of Healthcare <br /> - Here’s Why We Lead</Text>
          </Stack>
           <Grid
   templateColumns={{ base: "1fr", lg: "repeat(13, 1fr)" }} 
  templateRows="repeat(4, 1fr)"
  gap={8} 

  mt={14}
>
  <GridItem colSpan={{base:8,lg:7}} rowSpan={4}>
    <Box bgColor="rgba(255, 255, 255, 1)" border="1px solid rgba(242, 242, 242, 1)" borderRadius={"24px"} p={4} px={6}>
      <Box w="60px" h="60px" display={"flex"} alignItems={"center"} justifyContent={"center"} borderRadius={"60px"} bgColor="rgba(246, 251, 255, 1)">
      <RiFileUploadFill  size={26} color="rgba(74, 150, 216, 1)" />
      </Box>

      <Text color="rgba(7, 7, 7, 1)" mt={{base:'20px',lg:'34px'}} fontSize={{base:'18px',md:'23px',lg:'26px'}} fontWeight={600}>All-in-One Platform</Text>
      
      <Text mt={{base:'12px',lg:'22px'}} color={{base:"rgba(59, 59, 59, 1)", lg:"rgba(120, 120, 120, 1)"}} maxW={"90%"} fontSize={{base:'12px',md:'15px',lg:'19px'}}>Manage labs, clinics, and personal health records from a single, integrated system.</Text>
      </Box>
  </GridItem>
  <GridItem colSpan={{base:8,lg:6}} rowSpan={4}>
    <Box bgColor="rgba(255, 255, 255, 1)" border="1px solid rgba(242, 242, 242, 1)" borderRadius={"24px"} p={4} px={6}>
      <Box w="60px" h="60px" display={"flex"} alignItems={"center"} justifyContent={"center"} borderRadius={"60px"} bgColor="rgba(246, 251, 255, 1)">
      <FaGraduationCap   size={26} color="rgba(74, 150, 216, 1)" />
      </Box>

      <Text color="rgba(7, 7, 7, 1)" mt={{base:'20px',lg:'34px'}} fontSize={{base:'18px',md:'23px',lg:'26px'}} fontWeight={600}>Secure & Trusted</Text>
      
      <Text mt={{base:'12px',lg:'22px'}} color={{base:"rgba(59, 59, 59, 1)", lg:"rgba(120, 120, 120, 1)"}} maxW="90%" fontSize={{base:'12px',md:'15px',lg:'19px'}}>End-to-end encryption and user-controlled access ensure complete data privacy.</Text>
      </Box>
  </GridItem>
  <GridItem colSpan={{base:8,lg:6}} rowSpan={4}>
    <Box bgColor="rgba(255, 255, 255, 1)" border="1px solid rgba(242, 242, 242, 1)" borderRadius={"24px"} p={4} px={6}>
      <Box w="60px" h="60px" display={"flex"} alignItems={"center"} justifyContent={"center"} borderRadius={"60px"} bgColor="rgba(246, 251, 255, 1)">
      <PiCirclesThreeFill   size={26} color="rgba(74, 150, 216, 1)" />
      </Box>

      <Text color="rgba(7, 7, 7, 1)" mt={{base:'20px',lg:'34px'}} fontSize={{base:'18px',md:'23px',lg:'26px'}} fontWeight={600}>Easy to Use</Text>
      
      <Text mt={{base:'12px',lg:'22px'}} color={{base:"rgba(59, 59, 59, 1)", lg:"rgba(120, 120, 120, 1)"}} maxW={"90%"} fontSize={{base:'12px',md:'15px',lg:'19px'}}>Designed with simplicity in mind—for healthcare professionals and patients alike.</Text>
      </Box>
  </GridItem>
  <GridItem colSpan={{base:8,lg:7}} rowSpan={4}>
    <Box bgColor="rgba(255, 255, 255, 1)" border="1px solid rgba(242, 242, 242, 1)" borderRadius={"24px"} p={4} px={6}>
      <Box w="60px" h="60px" display={"flex"} alignItems={"center"} justifyContent={"center"} borderRadius={"60px"} bgColor="rgba(246, 251, 255, 1)">
      <RiFileUploadFill  size={26} color="rgba(74, 150, 216, 1)" />
      </Box>

      <Text color="rgba(7, 7, 7, 1)" mt={{base:'20px',lg:'34px'}} fontSize={{base:'18px',md:'23px',lg:'26px'}} fontWeight={600}>ABHA & ABDM Aligned</Text>
      
      <Text mt={{base:'12px',lg:'22px'}} color={{base:"rgba(59, 59, 59, 1)", lg:"rgba(120, 120, 120, 1)"}} maxW="90%" fontSize={{base:'12px',md:'15px',lg:'19px'}}>Fully compliant with India’s digital health mission, enabling secure and consent-based data sharing.</Text>
      </Box>
  </GridItem>

  
</Grid>

      
       </Container>
        </Box>

    {/*Three Products*/}
    <Box py={10} bg="white" px={{base : "20px",md:"40px"}}>
      <Container
      px={{base : "20px",md:"50px"}}
  maxW="8xl"
  bgGradient="linear(to-r,rgba(86, 133, 170, 1), rgba(50, 82, 108, 1))"
  py={5}
  borderRadius={{base:'12px',lg:'28px'}}
>
  <Text color={{base:'rgba(218, 218, 218, 1)',lg:'rgba(255, 255, 255, 1)'}}   textAlign={{base:'center',md:'center',lg:'left'}}  
  fontSize={{base:'12px',md:'15px',lg:'20px'}}>Three Products. One Goal - Better Healthcare.</Text>

    <Flex flexDir={{base:'column',md:'column',lg:'row'}} mt={{base:'25px',lg:'22px'}} gap={5} alignItems={"center"} justify={"space-between"}>
  <Text color={'rgba(255, 255, 255, 1)'} textAlign={"center"} fontWeight={'600'} 
  fontSize={{base:'20px',md:'24px',lg:'26px'}}>Simplify diagnostics, clinic    <Box as="br" display={{ base: "block", md: "none", lg: "none" }} /> workflows, and health    <Box as="br" display={{ base: "block", md: "none", lg: "none" }} /> record access</Text>
  <Button
        bgColor="rgba(255, 255, 255, 1)"
        fontWeight={500}
        height={{base:'40px',lg:"58px"}}
        borderRadius={{base:'10px',lg:"16px"}}
        border="1px solid #878787"
        color="rgba(40, 38, 38, 1)"
        fontSize={{base:'13px',lg:'18px'}}
        px="24px"
        py="20px"
        rightIcon={<FaArrowRightLong />}
        _hover={{
          transform:"translateX(-2px)"
        }}
        transition="all 0.1s"
        onClick={()=>router.push("/products")}
      >
        Explore Our Products
      </Button>
    </Flex>
</Container>

      </Box>

    {/*Features*/}
 <Box py={20} bg="white" mt={{base:1,lg:10}}>
        <Container maxW="8xl">
        <Flex flexDir={"column"} justify={"flex-start"} align={"flex-start"} gap={{base:'20px',md:'32px',lg:'45px'}} >
              <Text fontSize={{base:'24px',md : "34px",lg:'44px'}} fontWeight={700} color={"#12161D"} lineHeight={{base:'34px',md:'44px',lg:'52px'}}>
             Key Features That <br /> Set Us Apart
              </Text>
              <Text  color="#61656E" fontSize={{base:'12px',md:'15px',lg:'20px'}} lineHeight={{base:'22px',md:'26px',lg:'32px'}}>
              To be India’s leading trusted platform for unified digital health—where every stakeholder (from diagnostic labs to patients) can securely access, share, and act on health information, enabling better outcomes and smarter care across the country.
              </Text>
            </Flex>

       <Box mt={{ base: "50px", md: "45px", lg: "50px" }}>
  <Flex
    flex={2}
    alignItems={"center"}
    bgColor="rgba(246, 251, 255, 1)"
    p={5}
    borderRadius={{base:'12px',lg:'40px'}}
    border="1px solid #E8E8E8"
    flexDir={{ base: "column", md: "column", lg: "row" }}
  >
   <Box
    flex={1}
    order={{ base: 0, md: 0, lg: 2 }}
    maxW="100%"
    mx="auto"   
    mb={{ base: 4, lg: 0 }}  
  >
    <ABDMIntegrationImg   maxW={{base : "100%", md :"auto",lg :"400px"}}
      
         h="auto" />
  </Box>


  
    <VStack
      align={"flex-start"}
      spacing={4}
      order={{ base: 1, md: 1, lg: 1 }}
    >
      <Text
        color="rgba(7, 7, 7, 1)"
        fontWeight={"600"}
        fontSize={{ base: "18px", md: "22px", lg: "26px" }}
      >
        ABHA & ABDM Integration
      </Text>

      <Text
        color="rgba(120, 120, 120, 1)"
        fontWeight={400}
        fontSize={{ base: "12px", md: "15px", lg: "19px" }}
        maxW={{base:'100%',lg:'80%'}}
      >
        Fully aligned with the Ayushman Bharat Digital Mission, our platform
        supports ABHA - ensuring secure, consent-based data exchange backed by
        government infrastructure.
      </Text>
    </VStack>
  </Flex>
</Box>

<Box mt="48px">
  <Flex
    flex={1}
    alignItems="center"
    justify="space-between"
    bgColor="rgba(246, 251, 255, 1)"
    p={5}
      borderRadius={{base:'12px',lg:'40px'}}
    border="1px solid #E8E8E8"
    flexDir={{ base: "column", lg: "row" }} 
    gap={{ base: 6, lg: 20 }} 
  >

    <Box flex={1} maxW={{ base: "100%", lg: "400px" }} mx="auto">
      <EcoSystemImg w="100%" h="auto" />
    </Box>

   
    <VStack
      flex={2}
      align="flex-start"
      spacing={4}
      textAlign={{ base: "center", lg: "left" }} 
    >
      <Text
        color="rgba(7, 7, 7, 1)"
        fontWeight="600"
        fontSize={{ base: "18px", md: "22px", lg: "26px" }}
      >
       Unified Healthcare Ecosystem
      </Text>

      <Text
        color="rgba(120, 120, 120, 1)"
        fontWeight={400}
        fontSize={{ base: "12px", md: "15px", lg: "19px" }}
        maxW={{ base: "100%", lg: "90%" }}
      >
       From diagnostics to clinical care to personal health records, manage everything in one place—connecting labs, clinics, and patients seamlessly through a single digital platform.
      </Text>
    </VStack>
  </Flex>
</Box>

<Box mt={{ base: "50px", md: "45px", lg: "50px" }}>
  <Flex
    flex={2}
    alignItems={"center"}
    bgColor="rgba(246, 251, 255, 1)"
    p={5}
     borderRadius={{base:'12px',lg:'40px'}}
    border="1px solid #E8E8E8"
    flexDir={{ base: "column", md: "column", lg: "row" }}
  >
   <Box
    flex={1}
    order={{ base: 0, md: 0, lg: 2 }}
    maxW="100%"
    mx="auto"   
    mb={{ base: 4, lg: 0 }}  
  >
    <PrivacyImg   maxW={{base : "100%", md :"auto",lg :"400px"}}
      
         h="auto" />
  </Box>


  
    <VStack
      align={"flex-start"}
      spacing={4}
      order={{ base: 1, md: 1, lg: 1 }}
    >
      <Text
        color="rgba(7, 7, 7, 1)"
        fontWeight={"600"}
        fontSize={{ base: "18px", md: "22px", lg: "26px" }}
      >
        Privacy-First, Patient-Centric Design
      </Text>

      <Text
        color="rgba(120, 120, 120, 1)"
        fontWeight={400}
        fontSize={{ base: "12px", md: "15px", lg: "19px" }}
        maxW={{base:'100%',lg:'80%'}}
      >
        Data is encrypted, access is permission-based, and users stay in control. Our tools are designed with both security and simplicity at their core—for professionals and individuals alike.
      </Text>
    </VStack>
  </Flex>
</Box>


         
        </Container>
      </Box>

    {/*Our Team*/}
     <Box py={10} bg="white" mt={{base:1,lg:5}}>
        <Container maxW="8xl">
        <Flex flexDir={"column"} justify={"flex-start"} align={"flex-start"} gap={{base:'20px',md:'35px',lg:'38px'}} >
              <Text fontSize={{base:'24px',md : "34px",lg:'44px'}} fontWeight={700} color={"#12161D"} lineHeight={{base:'34px',md:'44px',lg:'52px'}}>
            Our Team
              </Text>
              <Text  color="#61656E" fontSize={{base:'12px',md:'15px',lg:'20px'}} lineHeight={{base:'22px',md:'26px',lg:'32px'}}>
             At Arogya Parinam, our foundation is built on strong collaboration between design and technology.
              <br />
              We're growing! More team members will be added soon as we expand our impact.
              </Text>
            </Flex>

            <Flex flexDir={{base:'column',md:'row',lg:'row'}} alignItems={"center"} justify={"center"} mt={{base:'32px',md:'50px',lg:'70px'}} gap={10}>
              <Box bgColor={"rgba(255, 255, 255, 1)"} border="1px solid rgba(233, 233, 233, 1)" p={5} borderRadius={"20px"} maxW="400px">
                  <DesignerImg maxW={"100%"} h="auto" />

                  <Text fontSize={{base:'20px',md:'23px',lg:'24px'}} mt={3} fontWeight={500} color="rgba(18, 22, 29, 1)">Anushree</Text>
                  <Text fontSize={{base:'15px',md:'18px',lg:'20px'}} fontWeight={400} color="rgba(124, 124, 124, 1)">Product Designer</Text>
              </Box>
              <Box bgColor={"rgba(255, 255, 255, 1)"} border="1px solid rgba(233, 233, 233, 1)" p={5} borderRadius={"20px"} maxW="400px">
                <Box borderRadius={"16px"}>

                  <DeveloperImg
                   maxW={"100%"} 
                   h="auto" />
                </Box>

                  <Text fontSize={{base:'20px',md:'23px',lg:'24px'}} mt={3} fontWeight={500} color="rgba(18, 22, 29, 1)">Saravana Kumar</Text>
                  <Text fontSize={{base:'15px',md:'18px',lg:'20px'}} fontWeight={400} color="rgba(124, 124, 124, 1)">Full Stack Developer</Text>
              </Box>

            </Flex>
        </Container>
        </Box>




      <Footer questions={false} />
    </Box>
  )
}

export default About
