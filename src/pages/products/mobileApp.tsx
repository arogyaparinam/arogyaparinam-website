import { Box, Container, Stack, VStack, HStack,Image, Button,Text, Flex, Heading, SimpleGrid, useBreakpointValue, Grid, Divider, IconButton } from "@chakra-ui/react"
import { FaArrowLeftLong, FaArrowRightLong, FaCheck } from "react-icons/fa6"
import Header from "../header"

import { keyframes } from "@emotion/react"
import { useRef } from "react"
import DownloadImg from "../components/icons/mobile/download"
import ReportsImg from "../components/icons/mobile/reports"
import BookScans from "../components/icons/mobile/bookScans"
import AnyTime from "../components/icons/mobile/anytime"
import Health from "../components/icons/mobile/health"
import PointsIcon from "../components/icons/mobile/points"
import { Link } from "@/components/Link";
import Ratings from "../components/ratings"

const scrollLeft = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

const MobileApp = () => {

     const showGrid = useBreakpointValue({ base: false, md: true });
    
    


      const datas = [
    { value: "20k+", label: "Registered Users" },
    { value: "150K+", label: "Health Records Managed" },
    { value: "98%", label: "User satisfaction" }
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
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
    }
  ];


    return (
       <Box px={0} mx={0}>


         <Header />


        {/*Hero Section*/}
         <Box
                    
                      bgGradient="linear(to-b, rgba(242, 242, 242, 1), rgba(255, 255, 255, 1))"
                     
                      px={5}
                  
                      py={15}
                    
                    >
                      <Container maxW="8xl" mt={10} px={0}>
                        <Stack
                          direction={"column"}
                          align="center"
                          spacing={{ base: 10, md: 20, lg: 32 }}
                        >
                          {/* Left Content */}
                          <VStack
                            spacing={8}
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
                           Your Healthcare, Simplified. 
                           <br />
One App for Everything.
                            </Text>
                    
                            <Text
                              fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                              color="rgba(106, 106, 106, 1)"
                              lineHeight="1.6"
                              textAlign="center"
                            >
                           MyArogya helps you store medical records, book scans and lab tests, and receive results instantly. No paperwork. 
  <Box as="br" display={{ base: "none", md: "none", lg: "block" }} />
  Just organized, accessible healthcare for you and your family.
                            </Text>
                    
                            <HStack spacing={4} pt={4}  justify="center">
                              <Button
                                bg="rgba(31, 107, 161, 1)"
                                color="white"
                                size="lg"
                                px="22px"
                                height="58px"
                                minW={{ base: "120px", md: "150px", lg: "200px" }}
                                fontSize={{ base: "sm", lg: "md" }}
                              
                                borderRadius="16px"
                               
                                _active={{ bg: "blue.800" }}
                              
                                rightIcon={<FaArrowRightLong />}
                                 fontWeight="500"
                                _hover={{
                    bg: "blue.700",
                    transform: "translateX(-2px)",
                  }}
                  transition="all 0.1s"
                              >
                               Download App Now
                              </Button>
                    
                             
                            </HStack>
                          </VStack>
                    
                          
                          <Box flex="1" w="full" textAlign="center">
                            <DownloadImg
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
        <Box py={20} bg="white" mt={{base:2,md:5,lg:10}}>
                <Container maxW="8xl">
           
                  <Flex
                    direction={{ base: "column", lg: "row" }}
                    alignItems={'flex-start'}
                    justify="space-between"
                    gap={12}
                  >
                     <VStack align={{base:'center',md:'center',lg:'flex-start'}} spacing={8} flex={1} maxW={{base : "full", md :"400px",lg :"600px"}}>
                     <Heading flex={1} fontSize={{base:'24px',md : "34px",lg:'44px'}}  color="#12161D" >
                      Know the Product
                      <br />
“MyArogya App“
                      </Heading>
                      </VStack>
                      <VStack flex={1}>
                      <Text fontSize={{base:'12px',md : "15px",lg:'18px'}} color="#61656E" lineHeight={{base:'22px',md:'25px',lg:'28px'}}
                      maxW={{base : "100%", md :"600px",lg :"700px"}}>
                   MyArogya App is a Personal Health Record storing platform and Diagnostic Booking platform built to give individuals and families full control over their healthcare. Book scans and lab tests directly from the app and receive results in real time—no paperwork, no delays.
                   </Text>
                      {showGrid ? (
                // Show SimpleGrid on md and lg
                <SimpleGrid
                  columns={{ base: 1, md: 3 }}
                  mt={{ base: "40px", md: "60px", lg: "80px" }}
                  spacing={12}
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
                </SimpleGrid>
              ) : (
              
              <Box overflow="hidden" bg="white" pt={6} mt="40px">
               <Box
                 as="div"
                 display="inline-flex"           
                 whiteSpace="nowrap"              
                 maxW="90vw"                     
                 animation={`${scrollLeft} 10s linear infinite`}
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
         <Box py={{base:10,lg:20}} bg="white" mt={{base:1,lg:5}}>
        <Container maxW="8xl">
        <Flex flexDir={"column"} justify={"flex-start"} align={"flex-start"} gap={{base:'24px',md:'32px',lg:'45px'}} >
              <Text fontSize={{base:'24px',md : "34px",lg:'44px'}} fontWeight={700} color={"#12161D"} lineHeight={{base:'34px',md:'44px',lg:'52px'}}>
           Why Choose Our PHR App?
              </Text>
             
            </Flex>

  

<Box mt="48px">
  <Flex
  
    alignItems={{base:'flex-start',lg:'center'}}
    justify="space-between"
  
    py={5}
     
 
    flexDir={{ base: "column", lg: "row" }} 
    gap={{ base: 6, lg: 20 }} 
  >

    <Box  maxW={{ base: "100%", lg: "500px" }} mx="auto" flex={1} bgColor="rgba(244, 244, 244, 1)" p={'70px'}  borderRadius={{base:'12px',lg:'24px'}}>
      <ReportsImg w="100%" h="auto" />
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
      Store All Your Medical Records
      </Text>

      <Text
        color={{base:'#3B3B3B',lg:'#61656E'}}
        fontWeight={400}
        fontSize={{ base: "12px", md: "15px", lg: "18px" }}
        maxW={{ base: "100%", lg: "90%" }}
      >
      A single, secure platform to manage everything from diagnostic reports and scan results to vitals and much more —anytime you need them.
      </Text>

                  <SimpleGrid columns={{ base: 1,lg:2 }} spacing={6} mt={{base:'10px',md:'20px',lg:'30px'}}>
                    <Flex alignItems={"center"} gap={2}><FaCheck size={20} color="rgba(131, 183, 27, 1)"/> <Text fontSize={{base:'11px',md:'15px',lg:'18px'}} color={{base:'rgba(59, 59, 59, 1)',lg:'rgba(73, 73, 73, 1)'}} fontWeight={"400"}>Auto-organized Records</Text></Flex>
                    <Flex alignItems={"center"} gap={2}><FaCheck size={20} color="rgba(131, 183, 27, 1)"/> <Text fontSize={{base:'11px',md:'15px',lg:'18px'}} color={{base:'rgba(59, 59, 59, 1)',lg:'rgba(73, 73, 73, 1)'}} fontWeight={"400"}>Timeline View of Health Journey</Text></Flex>

         
                    
                  </SimpleGrid>
    </VStack>
  </Flex>
</Box>


<Box mt="48px">
  <Flex
  
    alignItems={{base:'flex-start',lg:'center'}}
    justify="space-between"
  
    py={5}
     
   
    flexDir={{ base: "column", lg: "row" }} 
    gap={{ base: 6, lg: 20 }} 
  >

    <Box  maxW={{ base: "100%", lg: "500px" }} order={{ base: 0, md: 0, lg: 2 }} mx="auto" flex={1} bgColor="rgba(244, 244, 244, 1)" p={"70px"} borderRadius={{base:'12px',lg:'24px'}}>
      <BookScans w="100%" h="auto" />
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
    Book Scans & Tests in Seconds
      </Text>

      <Text
        color={{base:'#3B3B3B',lg:'#61656E'}}
        fontWeight={400}
        fontSize={{ base: "12px", md: "15px", lg: "18px" }}
        maxW={{ base: "100%", lg: "90%" }}
      >
    Easily find trusted diagnostic centers near you, book lab tests or scans within seconds, and avoid long queues with instant digital confirmations.
      </Text>

                  <SimpleGrid columns={{ base: 1,md:2,lg:3 }} spacing={6} mt={{base:'10px',md:'20px',lg:'30px'}}>
                    <Flex alignItems={"center"} gap={2}><FaCheck size={20} color="rgba(131, 183, 27, 1)"/>
                     <Text fontSize={{base:'11px',md:'15px',lg:'18px'}} color={{base:'rgba(59, 59, 59, 1)',lg:'rgba(73, 73, 73, 1)'}} fontWeight={"400"}>Test & Scan Search</Text></Flex>
                    <Flex alignItems={"center"} gap={2}><FaCheck size={20} color="rgba(131, 183, 27, 1)"/> 
                    <Text fontSize={{base:'11px',md:'15px',lg:'18px'}} color={{base:'rgba(59, 59, 59, 1)',lg:'rgba(73, 73, 73, 1)'}} fontWeight={"400"}>Instant Booking</Text></Flex>
                    <Flex alignItems={"center"} gap={2}><FaCheck size={20} color="rgba(131, 183, 27, 1)"/> 
                    <Text fontSize={{base:'11px',md:'15px',lg:'18px'}} color={{base:'rgba(59, 59, 59, 1)',lg:'rgba(73, 73, 73, 1)'}} fontWeight={"400"}>Digital Reports</Text></Flex>

         
                    
                  </SimpleGrid>
    </VStack>
  </Flex>
</Box>

<Box mt="48px">
  <Flex
  
    alignItems={{base:'flex-start',lg:'center'}}
    justify="space-between"
  
    py={5}
     
   
    flexDir={{ base: "column", lg: "row" }} 
    gap={{ base: 6, lg: 20 }} 
  >

    <Box  maxW={{ base: "100%", lg: "500px" }} mx="auto" flex={1} bgColor="rgba(244, 244, 244, 1)" py={'30px'} px={"70px"} borderRadius={{base:'12px',lg:'24px'}}>
      <AnyTime w="100%" h="auto" />
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
    Access Anytime, Anywhere
      </Text>

      <Text
        color={{base:'#3B3B3B',lg:'#61656E'}}
        fontWeight={400}
        fontSize={{ base: "12px", md: "15px", lg: "18px" }}
        maxW={{ base: "100%", lg: "90%" }}
      >
   Easily find trusted diagnostic centers near you, book lab tests or scans within seconds, and avoid long queues with instant digital confirmations.
      </Text>

                <Grid
 templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }}
  gap={8}
  mt={{ base: "10px", md: "20px", lg: "30px" }}
>
  <Flex alignItems="center" gap={2}>
    <FaCheck size={20} color="rgba(131, 183, 27, 1)" />
    <Text
      fontSize={{ base: "11px", md: "15px", lg: "18px" }}
      color={{ base: "rgba(59, 59, 59, 1)", lg: "rgba(73, 73, 73, 1)" }}
      fontWeight="400"
    >
      Offline viewing for emergency
    </Text>
  </Flex>

  <Flex alignItems="center" gap={2}>
    <FaCheck size={20} color="rgba(131, 183, 27, 1)" />
    <Text
      fontSize={{ base: "11px", md: "15px", lg: "18px" }}
      color={{ base: "rgba(59, 59, 59, 1)", lg: "rgba(73, 73, 73, 1)" }}
      fontWeight="400"
    >
     Works across devices
    </Text>
  </Flex>

 
</Grid>

    </VStack>
  </Flex>
</Box>




         
        </Container>
      </Box>


      {/*For Whom*/}
         <Box py={10} bg="white" mt={{base:1,lg:5}}>
        <Container maxW="8xl">
        <Flex flexDir={"column"} justify={"flex-start"} align={"flex-start"} gap={{base:'24px',md:'32px',lg:'45px'}} >
              <Text fontSize={{base:'24px',md : "34px",lg:'44px'}} fontWeight={700} color={"#12161D"} lineHeight={{base:'34px',md:'44px',lg:'52px'}}>
         MyArogya Makes Healthcare Easier
              </Text>
             
            </Flex>

  

<Box mt="48px">
  <Flex
    py={5}
    alignItems={{base:'flex-start',lg:'center'}}
    justify="space-between"
    flexDir={{ base: "column", lg: "row" }} 
    gap={{ base: 10, lg: 20 }} 
  >

    <Box  maxW={{ base: "100%", lg: "700px" }} mx="auto" flex={1} bgColor="rgba(244, 244, 244, 1)"  borderRadius={"24px"}>
      <Health w="100%" h="auto" />
    </Box>


    <VStack
      flex={1}
      alignItems="flex-start"
      spacing={4}
      textAlign={ "left" }
    >
      <Flex alignItems={"flex-start"} gap={5}>
        <Box width={{base:'35px',lg:'48px'}}  height={{base:'35px',lg:'48px'}} bgColor={"rgba(245, 247, 254, 1)"} p={{base:2,md:2,lg:3}} display={"flex"}  borderRadius={{base:'32px',lg:'48px'}} justifyContent={"center"}
        alignItems={"center"}>
              <PointsIcon width={{base:'20px',lg:'24px'}} height={{base:'20px',lg:'24px'}}/>
        </Box>
        <Stack>
            <Text color="#12161D" fontSize={{base:'18px',md:'22px',lg:'24px'}} fontWeight={"600"}>100% Private & Secure</Text>
            <Text color={{base:'#3B3B3B',lg:'#61656E'}} lineHeight={{base:'22px',lg:'26px'}}>All your health data is encrypted, stored securely, and accessible only to you or those you approve.</Text>
        </Stack>
      </Flex>

      <Divider my={5} height="1px"/>

      <Flex alignItems={"flex-start"} gap={5}>
        <Box width={{base:'35px',lg:'48px'}} height={{base:'35px',lg:'48px'}} p={{base:2,md:2,lg:3}} bgColor={"rgba(245, 247, 254, 1)"} display={"flex"} borderRadius={{base:'32px',lg:'48px'}} justifyContent={"center"}
        alignItems={"center"}>
              <PointsIcon width={{base:'20px',lg:'24px'}} height={{base:'20px',lg:'24px'}}/>
        </Box>
        <Stack>
            <Text color="#12161D" fontSize={{base:'18px',md:'22px',lg:'24px'}} fontWeight={"600"}>Smart Reminders & Health Logs</Text>
            <Text color={{base:'#3B3B3B',lg:'#61656E'}} lineHeight={{base:'22px',lg:'26px'}} >Stay on top of doctor visits, test schedules, and medication routines with personalized alerts.</Text>
        </Stack>
      </Flex>
      <Divider my={5} height="1px"/>

      <Flex alignItems={"flex-start"} gap={5}>
        <Box width={{base:'35px',lg:'48px'}} height={{base:'35px',lg:'48px'}} p={{base:2,md:2,lg:3}} bgColor={"rgba(245, 247, 254, 1)"} display={"flex"} borderRadius={{base:'32px',lg:'48px'}} justifyContent={"center"}
        alignItems={"center"}>
              <PointsIcon width={{base:'20px',lg:'24px'}} height={{base:'20px',lg:'24px'}}/>
        </Box>
        <Stack>
            <Text color="#12161D" fontSize={{base:'18px',md:'22px',lg:'24px'}} fontWeight={"600"}>Share Instantly with QR </Text>
            <Text color={{base:'#3B3B3B',lg:'#61656E'}} lineHeight={{base:'22px',lg:'26px'}} >Need to share your health profile at the front desk? Just scan your QR—no printouts, no hassle.</Text>
        </Stack>
      </Flex>
    </VStack>
  </Flex>
</Box>






         
        </Container>
      </Box>
              
        
        {/*Real Stories*/}
        <Box py={20} bg="rgba(255, 255, 255, 1)">
                <Container maxW="8xl">
              
                    <VStack spacing={4} textAlign="left" display={"flex"} flexDir={"column"} alignItems={"left"}>
                      <Text fontSize={{base:"24px",md:"34px",lg:'44px'}} fontWeight={"700"} color="#12161D">
                       Real Stories. Real Impact.
                      </Text>
                      <Text fontSize={{base :"12px",md:'15px',lg:'18px'}} color="#61656E" maxW={{base:"full",md:'full',lg:'80%'}}>
                    We designed MyArogya for real people facing real healthcare challenges. Here’s how it’s transforming everyday experiences for patients, families, and doctors across the country.
                      </Text>
                    </VStack>
                        <Box position="relative" maxW="8xl" mx="auto" mt={{base:'44px',md:'54px',lg:'74px'}} >
             
        
              {/* Scrollable Container */}
              <HStack
                ref={scrollRef}
                
                overflowX="auto"
                spacing={6}
                scrollBehavior="smooth"
                css={{
                  "&::-webkit-scrollbar": { display: "none" },
                  scrollbarWidth: "none",
                }}
              >
                {testimonials.map((t, index) => (
                  <Box
                    key={index}
                   minW={{base:'100%',md : "300px",lg:'400px'}}
                    p={5}
                  
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
                        <Ratings ratings={Number(t.stars)} />
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
                transform="translateY(-50%)"
                zIndex={10}
                onClick={() => scroll("left")}
                bg="none"
               
              />
              <IconButton
                aria-label="Scroll Right"
                icon={<FaArrowRightLong size={24}  />}
                
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
                    <Box py={20} pt={10} bg="white" px={{base : "20px",md:"40px"}}>
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
                   Take Control of Your Health Today
                  </Text>
                  <Text
                    fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                    color="#fff"
                    maxW="600px"
                  >
                  From booking tests to storing medical records and sharing health information securely, —designed to keep you and your family in control of care, anytime, anywhere.
                  </Text>
                  <HStack spacing={4}>
                    <Button
                      bg="rgba(255, 255, 255, 1)"
                      fontSize={{ base: '13px', md: '15px', lg: '18px' }}
                      borderRadius="16px"
                      px="24px"
                      py="20px"
                      height="58px"
                      rightIcon={<FaArrowRightLong />}
                      color="rgba(57, 57, 57, 1)"
                     fontWeight="500"
                                _hover={{
                    bg: "blue.50",
                    transform: "translateX(-2px)",
                  }}
                  transition="all 0.1s"
                    >
                    Download App Now
                    </Button>

                  </HStack>
                </VStack>
              </Container>
              
                    </Box>

                   <Box py={5} px={{ base: "20px", md: "40px" }} display={{base:'none',md:'none',lg:'block'}}>
  <Container
    maxW="8xl" 
    py={14}
    borderRadius="20px"
    textAlign="left" 
    mx="auto" 
  >
    <VStack spacing={6} align={"flex-start"}>
      <Text color="#61656E" fontSize="18px">
        “MyArogya supports integration with the ABHA (Ayushman Bharat Health
        Account) platform under the government-supported Ayushman Bharat Digital
        Mission (ABDM), enabling secure, consent-based sharing of health
        records. All data is encrypted, stored at source, and accessed only with
        user permission—ensuring privacy and control within the ABDM ecosystem.”
      </Text>

      <Flex alignItems={'center'} gap={2}>
        <Link
        href="https://abdm.gov.in/"
        fontSize="18px"
        fontWeight={500}
        color="rgba(50, 82, 108, 1)"
        textDecor={"underline"}
        isExternal
      >
        Learn more about ABDM
      </Link>
      <FaArrowRightLong  color="rgba(50, 82, 108, 1)"/>
      </Flex>
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
                              <Text fontSize={{base:'18px',md:'22px',lg:'24px'}} fontWeight="600" color="rgba(29, 29, 31, 1)">
                                Arogya-Parinam                
                                </Text>
                              <Text color="#61656E" fontSize={{base:'12px',md:'14px',lg:'17px'}}>
                              One platform for smart, secure, and connected digital healthcare solutions.
                              </Text>
                            </VStack>
                        
                         
                           <HStack spacing={12}>
              
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

export default MobileApp