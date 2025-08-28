import { Box, Container, Stack, VStack, HStack,Image, Button,Text, Flex, Heading, SimpleGrid, useBreakpointValue, Grid, Divider, IconButton } from "@chakra-ui/react"
import { FaArrowLeftLong, FaArrowRightLong, FaCheck } from "react-icons/fa6"

import Header from "../header"
import LabSoftware from "../components/icons/labSoftware"

import SimplifiedImg from "../components/icons/labSoftwareImg/simplifiedImg"
import { keyframes } from "@emotion/react"
import MultiUser from "../components/icons/labSoftwareImg/multiUser"
import ManageTests from "../components/icons/labSoftwareImg/manageTests"
import SoftwareFor from "../components/icons/labSoftwareImg/whom"
import { useEffect, useRef, useState } from "react"
import Ratings from "../components/ratings"
import Logo from "../components/icons/logo"
import LabMobileImg from "../components/icons/labMobileImg"
import SoftwareForMob from "../components/icons/softwareForMob"

const scrollLeft = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-80%); }
`;




const ArogyaLabsSoftware = () => {

     const showGrid = useBreakpointValue({ base: false, md: true });
    
    


      const datas = [
    { value: "200+", label: "Labs Onboarded" },
    { value: "50K+", label: "Patients Records Processed" },
    { value: "98%", label: "User satisfaction" }
  ];

   
     
     
     
         const scrollRef = useRef<HTMLDivElement>(null);
   const [canScrollLeft, setCanScrollLeft] = useState(false);
   const [canScrollRight, setCanScrollRight] = useState(false);
 
   // Check scroll boundaries
   const checkScroll = () => {
     if (!scrollRef.current) return;
     const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
     setCanScrollLeft(scrollLeft > 0);
     setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
   };
 
   useEffect(() => {
     checkScroll();
     const ref = scrollRef.current;
     if (ref) {
       ref.addEventListener("scroll", checkScroll);
       window.addEventListener("resize", checkScroll);
     }
     return () => {
       if (ref) ref.removeEventListener("scroll", checkScroll);
       window.removeEventListener("resize", checkScroll);
     };
   }, []);
 
 

const scroll = (direction: "left" | "right") => {
  if (scrollRef.current) {
    const container = scrollRef.current;

    
    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 20  
      : 300;

  
    const isLargeScreen = window.innerWidth >= 1024; 
    const cardsPerScroll = isLargeScreen ? 3 : 1;

    container.scrollBy({
      left: direction === "left" ? -cardWidth * cardsPerScroll : cardWidth * cardsPerScroll,
      behavior: "smooth",
    });
  }
};

  const testimonials = [
    {
      title: "Used Lab Management Software",
      name: "RajShankar Nathan",
      role: "Lab Owner, Pune",
      stars:5,
      content:
        "We transitioned from manual entries to fully automated workflows in just 3 days. The difference has been incredible — our team now handles more patients each day with far less chaos, fewer errors, and improved turnaround times.",
      avatar:
        "https://sp.yimg.com/ib/th/id/OIP.eC-EGebIvU8PWNlQBuWiTAAAAA?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
    },
    {
      title: "Used Personal Health Record Application",
      name: "Priya Sinha",
      role: "App User, Bengaluru",
      stars:4,
      content:
        "We moved from paper-based operations to fully digital in 2 days. ABHA Parinam helped streamline everything — from patient registration to report sharing. Our lab is now faster, more accurate, and easier to manage.",
      avatar:
        "https://tse3.mm.bing.net/th/id/OIP.KsMSos03Ccw6lt36oe3BxQHaE7?pid=Api&P=0&h=180",
    },
    {
      title: "Used Clinical Software",
      name: "Dr. Arjun Mehta",
      role: "General Physician, Delhi",
      stars:4.5,
      content:
        "Getting patient reports directly through the platform saves me time. I no longer have to call labs or wait for printed results. Everything I need is available instantly, helping me provide better care.",
      avatar:
        "https://tse4.mm.bing.net/th/id/OIP.rqP30nn4mA4oDzm0T-wdRwHaHa?pid=Api&P=0&h=180",
    },
    {
      title: "Used Clinical Software",
      name: "Dr. Arjun Mehta",
      role: "General Physician, Delhi",
      stars:4.5,
      content:
        "Getting patient reports directly through the platform saves me time. I no longer have to call labs or wait for printed results. Everything I need is available instantly, helping me provide better care.",
      avatar:
        "https://tse4.mm.bing.net/th/id/OIP.rqP30nn4mA4oDzm0T-wdRwHaHa?pid=Api&P=0&h=180",
    },
     {
      title: "Used Lab Management Software",
      name: "RajShankar Nathan",
      role: "Lab Owner, Pune",
      stars:5,
      content:
        "We transitioned from manual entries to fully automated workflows in just 3 days. The difference has been incredible — our team now handles more patients each day with far less chaos, fewer errors, and improved turnaround times.",
      avatar:
        "https://sp.yimg.com/ib/th/id/OIP.eC-EGebIvU8PWNlQBuWiTAAAAA?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
    },
    {
      title: "Used Personal Health Record Application",
      name: "Priya Sinha",
      role: "App User, Bengaluru",
      stars:4,
      content:
        "We moved from paper-based operations to fully digital in 2 days. ABHA Parinam helped streamline everything — from patient registration to report sharing. Our lab is now faster, more accurate, and easier to manage.",
      avatar:
        "https://tse3.mm.bing.net/th/id/OIP.KsMSos03Ccw6lt36oe3BxQHaE7?pid=Api&P=0&h=180",
    }
  ];


    return (
       <Box>
         <Header />


        {/*Hero Section*/}
         <Box
                    
                      bgGradient="linear(to-b, rgba(242, 242, 242, 1), rgba(255, 255, 255, 1))"
                      py={15}
                     
                      px={0}
                    >
                      <Container maxW="8xl"  mt={{base:14,lg:24}} px={5}>
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
                              letterSpacing="-0.02em"
                              textAlign="center"
                              
                              
                            >
                          <Box display={{base:'block',md:'block',lg:'none'}}>
                              Smarter Lab Operations.
                            <br />
<Box as="span" whiteSpace={"nowrap"}>                             Faster Results. 
                           
One Platform.</Box>
                          </Box>
                          <Box display={{base:'none',md:'none',lg:'block'}}>
                              Smarter Lab Operations. Faster Results. 
                            <br />
<Box as="span" whiteSpace={"nowrap"}>                            
                           
One Platform.</Box>
                          </Box>
                            </Text>
                    
                            <Text
                              fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                              color="rgba(106, 106, 106, 1)"
                              lineHeight="1.6"
                              textAlign="center"
                            >
                            Automate everything from test bookings to report delivery with our lab management system 
                             <Box as="br" display={{ base: "none", md: "none", lg: "block" }} />
— built for speed, accuracy, and complete control.
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
                          
                                borderRadius={{base:'10px',lg:"16px"}}
                              
                                _active={{ bg: "blue.800" }}
                                
                                rightIcon={<FaArrowRightLong />}
                                fontWeight="500"
                                _hover={{
                    bg: "blue.700",
                    transform: "translateX(-2px)",
                  }}
                  transition="all 0.1s"
                              >
                                Get 90 Days Free Trial
                              </Button>
                    
                             
                            </HStack>
                          </VStack>
                    
                          
                          <Box flex="1" w="full" textAlign="center" display={{base:'none',md:'block',lg:'block'}}>
                            <LabSoftware
                              maxW="100%"
                              w="full"
                              h="auto"
                              objectFit="contain"
                            />
                          </Box>
                          <Box flex="1" w="full" textAlign="center" display={{base:'block',md:'none',lg:'none'}}>
                            <LabMobileImg
                              maxW="100%"
                              w="full"
                              h="auto"
                              objectFit="contain"
                            />
                          </Box>
                        </Stack>
                      </Container>
                    </Box>

        {/*Onboarded */}
        <Box py={{base:14,lg:20}} bg="white" >
                <Container maxW="8xl">
           
                  <Flex
                    direction={{ base: "column", lg: "row" }}
                    alignItems={'flex-start'}
                    justify="space-between"
                    gap={{base:7,lg:12}}
                  >
                     <VStack align={{base:'center',md:'center',lg:'flex-start'}} spacing={8} flex={1} maxW={{base : "full", md :"400px",lg :"600px"}}>
                     <Heading flex={1} fontSize={{base:'24px',md : "34px",lg:'44px'}}  color="#12161D" >
                      Know the Product
                      <br />
“ Arogya Labs “
                      </Heading>
                      </VStack>
                      <VStack flex={1}  maxW={{base : "full", md :"600px",lg :"700px"}}>
                      <Text fontSize={{base:'12px',md : "15px",lg:'18px'}} color="#61656E" lineHeight={{base:'22px',md:'25px',lg:'28px'}}>
                    ABHA Parinam's Lab Management Software is a powerful, AI-enabled platform designed to simplify daily operations for diagnostic labs, clinics, and scan centers. From test booking and patient registration to automated reporting and inventory tracking, everything is managed in one seamless system.
                      </Text>
        
                      {showGrid ? (
                // Show SimpleGrid on md and lg
                <Flex
                  justify={'space-between'}
                  mt={{ base: "40px", md: "60px", lg: "80px" }}
                  
                  w="full"
                >
                  {datas.map((data, i) => (
                    <VStack key={i} spacing={2} textAlign="center">
                      <Text fontSize="4xl" fontWeight="600" color="rgba(18, 22, 29, 1)">
                        {data.value}
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        {data.label}
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
                               animation={`${scrollLeft} 5s linear infinite`}
                             >
                               {[...datas, ...datas].map((data, i) => (
                                 <Box
                                   key={i}
                                   flex="0 0 auto"             
                                   px={6}                    
                                   minW="200px"                
                                   textAlign="center"
                                 >
                                   <Text fontSize="3xl" fontWeight="600" color="rgba(18, 22, 29, 1)">
                                     {data.value}
                                   </Text>
                                   <Text fontSize="sm" color="gray.600">
                                     {data.label}
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

        {/* why choose our lab software*/}
         <Box py={{base:5,lg:20}} bg="white">
        <Container maxW="8xl">
        <Flex flexDir={"column"} justify={"flex-start"} align={"flex-start"} gap={{base:'24px',md:'32px',lg:'45px'}} >
              <Text fontSize={{base:'24px',md : "34px",lg:'44px'}} fontWeight={700} color={"#12161D"} lineHeight={{base:'34px',md:'44px',lg:'52px'}}>
            Why Choose Our Lab Software?
              </Text>
             
            </Flex>

  

<Box  mt={{base:'35px',lg:"45px"}} border={{base:'1px solid rgba(240, 234, 234, 1)',lg:'none'}} boxShadow={{base:' 12px 16px 50px 0 rgba(154, 154, 154, 0.12)',lg:'none'}} px={{base:5,lg:0}} py={{base:2,lg:0}} borderRadius={{base:'12px',lg:'0'}}>
  <Flex
  
    alignItems={{base:'flex-start',lg:'center'}}
    justify="space-between"
  
    py={5}
     
   
    flexDir={{ base: "column", lg: "row" }} 
    gap={{ base: 6, lg: 20 }} 
  >

    <Box  maxW={{ base: "100%", lg: "500px" }} mx="auto" flex={1} bgColor="rgba(244, 244, 244, 1)" py={5} px={10} borderRadius={{base:'12px',lg:'24px'}}>
      <SimplifiedImg w="100%" h="auto" />
    </Box>

   
    <VStack
      flex={1}
      alignItems="flex-start"
      spacing={4}
      textAlign={ "left" }
    >
      <Text
        color="rgba(0, 0, 0, 1)"
        fontWeight="600"
        fontSize={{ base: "20px", md: "30px", lg: "38px" }}
      >
      Simplified Workflow
      </Text>

      <Text
        color={{base:'#3B3B3B',lg:'#61656E'}}
        fontWeight={400}
        fontSize={{ base: "12px", md: "15px", lg: "18px" }}
        maxW={{ base: "100%", lg: "90%" }}
      >
      From registration to report, manage everything in one seamless flow — no spreadsheets, no switching <Box as="br" display={{ base: "block", md: "none", lg: "none" }} /> tools, just one clear dashboard.
      </Text>

                  <SimpleGrid columns={{ base: 2,md:2,lg:3 }} spacing={6} mt={{base:'10px',md:'20px',lg:'30px'}}>
                    <Flex alignItems={"center"} gap={2}><FaCheck size={20} color="rgba(131, 183, 27, 1)"/> <Text fontSize={{base:'11px',md:'15px',lg:'18px'}} color={{base:'rgba(59, 59, 59, 1)',lg:'rgba(73, 73, 73, 1)'}} fontWeight={"400"}>One dashboard</Text></Flex>
                    <Flex alignItems={"center"} gap={2}><FaCheck size={20} color="rgba(131, 183, 27, 1)"/> <Text fontSize={{base:'11px',md:'15px',lg:'18px'}} color={{base:'rgba(59, 59, 59, 1)',lg:'rgba(73, 73, 73, 1)'}} fontWeight={"400"}>Zero paperwork</Text></Flex>
                    <Flex alignItems={"center"} gap={2}><FaCheck size={20} color="rgba(131, 183, 27, 1)"/> <Text fontSize={{base:'11px',md:'15px',lg:'18px'}} color={{base:'rgba(59, 59, 59, 1)',lg:'rgba(73, 73, 73, 1)'}} fontWeight={"400"}>Fully digital workflows</Text></Flex>
         
                    
                  </SimpleGrid>
    </VStack>
  </Flex>
</Box>


<Box mt="35px" border={{base:'1px solid rgba(240, 234, 234, 1)',lg:'none'}} boxShadow={{base:' 12px 16px 50px 0 rgba(154, 154, 154, 0.12)',lg:'none'}} px={{base:5,lg:0}} py={{base:2,lg:0}} borderRadius={{base:'12px',lg:'0'}}>
  <Flex
  
    alignItems={{base:'flex-start',lg:'center'}}
    justify="space-between"
  
    py={5}
     
   
    flexDir={{ base: "column", lg: "row" }} 
    gap={{ base: 6, lg: 20 }} 
  >

    <Box  maxW={{ base: "100%", lg: "500px" }} order={{ base: 0, md: 0, lg: 2 }} mx="auto" flex={1} bgColor="rgba(244, 244, 244, 1)" py={5}
     px={10} borderRadius={{base:'12px',lg:'24px'}}>
      <MultiUser w="100%" h="auto" />
    </Box>

   
    <VStack
      flex={1}
      alignItems="flex-start"
      spacing={4}
      textAlign={ "left" }
    >
      <Text
        color="rgba(0, 0, 0, 1)"
        fontWeight="600"
        fontSize={{ base: "20px", md: "30px", lg: "38px" }}
      >
     Multi-User Support Access
      </Text>

      <Text
        color={{base:'#3B3B3B',lg:'#61656E'}}
        fontWeight={400}
        fontSize={{ base: "12px", md: "15px", lg: "18px" }}
        maxW={{ base: "100%", lg: "90%" }}
      >
      From registration to report, manage everything in one seamless flow. Assign custom roles to staff for <Box as="br" display={{ base: "block", md: "none", lg: "none" }} />
       secure, organized, and streamlined lab operations — <Box as="br" display={{ base: "block", md: "none", lg: "none" }} /> everyone sees only what they need.
      </Text>

                  <SimpleGrid columns={{ base: 1,lg:2 }} spacing={6} mt={{base:'10px',md:'20px',lg:'30px'}}>
                    <Flex alignItems={"center"} gap={2}><FaCheck size={20} color="rgba(131, 183, 27, 1)"/> <Text fontSize={{base:'11px',md:'15px',lg:'18px'}} color={{base:'rgba(59, 59, 59, 1)',lg:'rgba(73, 73, 73, 1)'}} fontWeight={"400"}>Customize user roles</Text></Flex>
                    <Flex alignItems={"center"} gap={2}><FaCheck size={20} color="rgba(131, 183, 27, 1)"/> <Text fontSize={{base:'11px',md:'15px',lg:'18px'}} color={{base:'rgba(59, 59, 59, 1)',lg:'rgba(73, 73, 73, 1)'}} fontWeight={"400"}>Role-specific permissions</Text></Flex>

         
                    
                  </SimpleGrid>
    </VStack>
  </Flex>
</Box>

<Box mt="35px" border={{base:'1px solid rgba(240, 234, 234, 1)',lg:'none'}} boxShadow={{base:' 12px 16px 50px 0 rgba(154, 154, 154, 0.12)',lg:'none'}} px={{base:5,lg:0}} py={{base:2,lg:0}} borderRadius={{base:'12px',lg:'0'}}>
  <Flex
  
    alignItems={{base:'flex-start',lg:'center'}}
    justify="space-between"
  
    py={5}
     
   
    flexDir={{ base: "column", lg: "row" }} 
    gap={{ base: 6, lg: 20 }} 
  >

    <Box  maxW={{ base: "100%", lg: "500px" }} mx="auto" flex={1} bgColor="rgba(244, 244, 244, 1)" py={5} px={10} borderRadius={{base:'12px',lg:'24px'}}>
      <ManageTests w="100%" h="auto" />
    </Box>

   
    <VStack
      flex={1}
      alignItems="flex-start"
      spacing={4}
      textAlign={ "left" }
    >
      <Text
        color="rgba(0, 0, 0, 1)"
        fontWeight="600"
        fontSize={{ base: "20px", md: "30px", lg: "38px" }}
      >
     Manage and Track All Tests
      </Text>

      <Text
        color={{base:'#3B3B3B',lg:'#61656E'}}
        fontWeight={400}
        fontSize={{ base: "12px", md: "15px", lg: "18px" }}
        maxW={{ base: "100%", lg: "90%" }}
      >
     Access a ready-to-use library of tests or add your <Box as="br" display={{ base: "block", md: "none", lg: "none" }} /> own. 
     Easily manage, edit, and track every test from <Box as="br" display={{ base: "block", md: "none", lg: "none" }} /> booking to result — all from a single dashboard.
      </Text>

                <Grid
 templateColumns={{ base: "1fr 1fr", md: "1fr 1fr", lg: "1fr 1.5fr 1.5fr" }}
  gap={{base:3,lg:8}}
  mt={{ base: "10px", md: "20px", lg: "30px" }}
>
  <Flex alignItems="center" gap={2}>
    <FaCheck size={20} color="rgba(131, 183, 27, 1)" />
    <Text
      fontSize={{ base: "11px", md: "15px", lg: "18px" }}
      color={{ base: "rgba(59, 59, 59, 1)", lg: "rgba(73, 73, 73, 1)" }}
      fontWeight="400"
    >
      Built-in tests
    </Text>
  </Flex>

  <Flex alignItems="center" gap={2}>
    <FaCheck size={20} color="rgba(131, 183, 27, 1)" />
    <Text
      fontSize={{ base: "11px", md: "15px", lg: "18px" }}
      color={{ base: "rgba(59, 59, 59, 1)", lg: "rgba(73, 73, 73, 1)" }}
      fontWeight="400"
    >
      Quick search and filters
    </Text>
  </Flex>

  <Flex alignItems="center" gap={2}>
    <FaCheck size={20} color="rgba(131, 183, 27, 1)" />
    <Text
      fontSize={{ base: "11px", md: "15px", lg: "18px" }}
      color={{ base: "rgba(59, 59, 59, 1)", lg: "rgba(73, 73, 73, 1)" }}
      fontWeight="400"
    >
      One Platform
    </Text>
  </Flex>
</Grid>

    </VStack>
  </Flex>
</Box>




         
        </Container>
      </Box>


      {/*For Whom*/}
         <Box py={{base:14,lg:20}} bg="white" >
        <Container maxW="8xl">
        <Flex flexDir={"column"} justify={"flex-start"} align={"flex-start"} gap={{base:'24px',md:'32px',lg:'45px'}} >
              <Text fontSize={{base:'24px',md : "34px",lg:'44px'}} fontWeight={700} color={"#12161D"} lineHeight={{base:'34px',md:'44px',lg:'52px'}}>
           Who Is This Software For?
              </Text>
             
            </Flex>

  

<Box mt={{base:'13px',lg:"44px"}}>
  <Flex
    py={5}
    alignItems={{base:'flex-start',lg:'center'}}
    justify="space-between"
    flexDir={{ base: "column", lg: "row" }} 
    gap={{ base: 10, lg: 20 }} 
  >

    <Box  maxW={{ base: "100%", lg: "700px" }} mx="auto"   borderRadius={"24px"}
   >
      <SoftwareFor maxW="100%" h="auto" />
    </Box>
 

   
    <VStack
      flex={1}
      alignItems="flex-start"
      spacing={4}
      textAlign={ "left" }
    >
      <Flex alignItems={"flex-start"} gap={5}>
        <Box width={{base:'32px',lg:'48px'}} height={{base:'32px',lg:'48px'}} bgColor={"rgba(245, 247, 254, 1)"} display={"flex"} p={5} borderRadius={{base:'32px',lg:'48px'}} justifyContent={"center"}
        alignItems={"center"}>
              <Text color="rgba(7, 26, 52, 1)" fontWeight={"bold"}>1</Text>
        </Box>
        <Stack>
            <Text color="#12161D" fontSize={{base:'18px',md:'22px',lg:'24px'}} fontWeight={"600"}>Small Diagnostic Labs</Text>
            <Text color={{base:'#3B3B3B',lg:'#61656E'}} fontSize={{base:'12px',lg:'18px'}} letterSpacing={{base:'0.210px',lg:'none'}} lineHeight={{base:'23px',lg:'26px'}}>Digitize daily operations, manage walk-in patients, and deliver accurate reports faster — no complex setup needed.</Text>
        </Stack>
      </Flex>

      <Divider my={{base:6,lg:10}} height="1px"/>

      <Flex alignItems={"flex-start"} gap={5}>
        <Box width={{base:'32px',lg:'48px'}} height={{base:'32px',lg:'48px'}} bgColor={"rgba(245, 247, 254, 1)"} p={5} display={"flex"} borderRadius={{base:'32px',lg:'48px'}} justifyContent={"center"}
        alignItems={"center"}>
              <Text color="rgba(7, 26, 52, 1)" fontWeight={"bold"}>2</Text>
        </Box>
        <Stack>
            <Text color="#12161D" fontSize={{base:'18px',md:'22px',lg:'24px'}} fontWeight={"600"}>Independent Test & Scan Centers</Text>
            <Text color={{base:'#3B3B3B',lg:'#61656E'}} fontSize={{base:'12px',lg:'18px'}} letterSpacing={{base:'0.210px',lg:'none'}} lineHeight={{base:'23px',lg:'26px'}} >Track smaller-scale pathology or radiology services, maintain test records, and simplify report handling — all in one place.</Text>
        </Stack>
      </Flex>
    </VStack>
  </Flex>
</Box>






         
        </Container>
      </Box>
              
        
        {/*Real Stories*/}
        <Box py={{base:5,lg:20}} bg="rgba(255, 255, 255, 1)">
                <Container maxW="8xl">
              
                    <VStack spacing={4} textAlign="left" display={"flex"} flexDir={"column"} alignItems={"left"}>
                      <Text fontSize={{base:"24px",md:"34px",lg:'44px'}} fontWeight={"700"} color="#12161D">
                       Real Stories. Real Impact.
                      </Text>
                      <Text fontSize={{base :"12px",md:'15px',lg:'18px'}} color="#61656E" maxW={{base:"full",md:'full',lg:'80%'}}>
                     We build for real people solving real problems. Here’s how Arogya Parinam is making a difference in the lives of doctors, lab owners, and patients.
                      </Text>
                    </VStack>
                        <Box position="relative" maxW="8xl"  mt={{base:'24px',md:'44px',lg:'60px'}} >
             
        
              {/* Scrollable Container */}
              <HStack
                ref={scrollRef}
                w="full"
                overflowX="auto"
                spacing={5}
                
                scrollBehavior="smooth"
                css={{
                  "&::-webkit-scrollbar": { display: "none" },
                  scrollbarWidth: "none",
                }}
              >
                {testimonials.map((t, index) => (
                  <Box
                    key={index}
                          flex="0 0 auto" 
  w={{ base: "100%", md: "300px", lg: "calc((100% - 2 * 24px) / 3)" }} 
                    py={5}
                    
                    display={"flex"}
                   
                    flexDir={"column"}
                    alignItems={"center"}
                    pos={"relative"}
        >
                    
                    <Box width="70px" mt={1} height="70px" position={"absolute"} borderRadius={"50px"}  overflow="hidden"  bg="rgba(244, 244, 244, 1)" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                         <Box width="50px" height="50px"  >
                           <Image src={t.avatar} alt={t.name} width="100%" height="100%" borderRadius={"50px"}/>
                         </Box>
                        </Box>
                    <Box
                      bg="rgba(244, 244, 244, 1)"
                      color="black"
                      borderRadius="xl"
                      p={6}
                      shadow="md"
                      mt={14}
                        minW={{base:'100%',md : "300px",lg:'400px'}}
                    minH={{base:'100%',md : "300px",lg:'300px'}}
                    >
                      <VStack spacing={4} align="center" textAlign="center" >
                        
                        <VStack spacing={0}>
                          <Text fontWeight="600" fontSize={"18px"}>{t.name}</Text>
                          <Text fontSize={{base:'11px',md:'12px',lg:'14px'}} color="gray.500">{t.role}</Text>
                        </VStack>

                        <Ratings ratings={Number(t.stars)}/>
                        <Text fontSize={{base:'13px',md:'14px',lg:'15px'}} lineHeight={{base:'22px',md:'27px',lg:'32px'}} color="gray.700">
                          {t.content}
                        </Text>
                      </VStack>
                    </Box>
                  </Box>
                ))}
              </HStack>
        
           
                 
            </Box>
        
          <Flex alignItems={"center"} gap={10} justify={"center"} mt={5}>
               <IconButton
                aria-label="Scroll Left"
                icon={<FaArrowLeftLong size={24} />}
              
                top="50%"
                left="0"
                disabled={!canScrollLeft}
                transform="translateY(-50%)"
                zIndex={10}
                onClick={() => scroll("left")}
                bg="none"
               
              />
              <IconButton
                aria-label="Scroll Right"
                icon={<FaArrowRightLong size={24}  />}
                disabled={!canScrollRight}
                top="50%"
                right="0"
                transform="translateY(-50%)"
                zIndex={10}
                onClick={() => scroll("right")}
                bg="none"
               
              />
             </Flex>
        
                </Container>
              </Box>

               {/* CTA Section */}
                    <Box py={{base:10,lg:15}} pb={{base:16,lg:20}} bg="white" px={{base : "20px",md:"40px"}}>
                    <Container
                maxW="8xl"
                bgGradient="linear(to-r, rgba(50, 82, 108, 1), rgba(86, 133, 170, 1))"
                py={14}
                borderRadius="20px"
              >
                <VStack spacing={8} textAlign="center">
                  <Text
                    fontSize={{ base: '20px', md: '30px', lg: '46px' }}
                    fontWeight={600}
                    color="rgba(255, 255, 255, 1)"
                  >
                    Ready to Simplify Your <Box as="br" display={{ base: "block", md: "none", lg: "none" }} /> Lab Operations?
                  </Text>
                  <Text
                    fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                    color={{base:'rgba(218, 218, 218, 1)',lg:"#fff"}}
                    maxW={{base:'full',lg:"600px"}}
                    lineHeight={{base:'22px',lg:'26px'}}
                  >
                   Discover how our software can reduce errors, boost efficiency, and improve lab 
operations and experience — all in just one platform.
                  </Text>
                  <HStack spacing={4}>
                    <Button
                      bg="rgba(255, 255, 255, 1)"
                      fontSize={{ base: '13px', md: '15px', lg: '18px' }}
                      borderRadius={{base:'10px',lg:"16px"}}
                      px="24px"
                      py="20px"
                      height={{base:'40px',lg:"58px"}}
                      rightIcon={<FaArrowRightLong />}
                      color="rgba(57, 57, 57, 1)"
                     fontWeight="500"
                                _hover={{
                    bg: "blue.50",
                    transform: "translateX(-2px)",
                  }}
                  transition="all 0.1s"
                    >
                     Get 90 Days Free Trial
                    </Button>

                  </HStack>
                </VStack>
              </Container>
              
                    </Box>
              
                    {/* Footer */}
                    <Box py={12} bg="rgba(242, 242, 242, 1)">
                      <Container maxW="8xl">
                       <Flex  direction={{ base: "column", lg: "row" }}
                          alignItems="flex-start"
                          justify="space-between"
                          gap={12}>
                       <VStack align="start" spacing={4} >
                              <Logo />
                              <Text color="#61656E" fontSize={{base:'12px',md:'14px',lg:'17px'}}>
                              One platform for smart, secure, and connected digital healthcare solutions.
                              </Text>
                            </VStack>
                        
                         
                           <HStack spacing={{base:20,lg:12}}>
              
                           <VStack align="start" spacing={3}>
                              <Text fontWeight="500" color="#12161D" fontSize={{base:"12px",md:"14px",lg:"17px"}}>Quick Links</Text>
                              <Text color="#61656E" fontSize={{base:"12px",md:"14px",lg:"16px"}} cursor="pointer">Home</Text>
                              <Text color="#61656E" fontSize={{base:"12px",md:"14px",lg:"16px"}} cursor="pointer">About Us</Text>
                              <Text color="#61656E" fontSize={{base:"12px",md:"14px",lg:"16px"}} cursor="pointer">Our Products</Text>
                              <Text color="#61656E" fontSize={{base:"12px",md:"14px",lg:"16px"}} cursor="pointer">Contact Us</Text>
                            </VStack>
                           <VStack align="start" spacing={3}>
                              <Text fontWeight="500" color="#12161D" fontSize={{base:"12px",md:"14px",lg:"17px"}}>Company</Text>
                              <Text color="#61656E" fontSize={{base:"12px",md:"14px",lg:"16px"}} cursor="pointer">Terms of Services</Text>
                              <Text color="#61656E" fontSize={{base:"12px",md:"14px",lg:"16px"}} cursor="pointer">Privacy Policy</Text>
                              <Text color="#61656E" fontSize={{base:"12px",md:"14px",lg:"16px"}} cursor="pointer">Legal Disclaimer</Text>
                              <Text color="#61656E" fontSize={{base:"12px",md:"14px",lg:"16px"}} cursor="pointer">Cookie Policy</Text>
                            </VStack>
                         
                           
                           </HStack>
                       </Flex>
                            
                          
                        <Divider my={8} borderColor="#E5E5E6" />
                      
                          <Text color="#61656E" fontSize={{base:'10px',lg:'16px'}}>
                          © 2025 Arogya-Parinam. All rights reserved.
                          </Text>
                        
                        
                      </Container>
                    </Box>

       </Box>
    )
}

export default ArogyaLabsSoftware