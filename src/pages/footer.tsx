import { Box, Container, Flex,Text,Image, Heading, VStack, SimpleGrid, Button, HStack, IconButton, Accordion, AccordionItem, AccordionButton, AccordionPanel, Divider } from "@chakra-ui/react";
import {  useEffect, useRef, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import ArogyaAppImg from "./components/icons/arogyaAppImg";
import ArogyaLabsImg from "./components/icons/arogyaLabsImg";
import DocsImg from "./components/icons/docsImg";
import { useRouter } from "next/router";
import Ratings from "./components/ratings";
import Logo from "./components/icons/logo";

type Props = {
  questions : boolean
}



const Footer = ({questions} : Props) => {

     
    
    
    
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
      ? (container.firstElementChild as HTMLElement).offsetWidth + 25 
      : 300; 

    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
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
            "With Arogya-Parinam’s software, we automated our test bookings, reports, and staff roles. It’s faster, cleaner, and our patients love getting reports digitally.",
          avatar: "https://sp.yimg.com/ib/th/id/OIP.eC-EGebIvU8PWNlQBuWiTAAAAA?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
        },
        {
          title: "Used Personal Health Record Application",
          name: "Priya Sinha",
          role: "App User, Bengaluru",
           stars:4,
          content:
            "Using the PHR app, I can access my reports anytime and share them instantly with doctors. No more digging through papers before a checkup.",
         avatar:
        "https://tse3.mm.bing.net/th/id/OIP.KsMSos03Ccw6lt36oe3BxQHaE7?pid=Api&P=0&h=180",
        },
        {
          title: "Used Clinical Software",
          name: "Dr. Arjun Mehta",
          role: "General Physician, Delhi",
           stars:4.5,
          content:
            "The clinical software feels like it was built for real doctors. Prescriptions, follow-ups, and history — everything’s just a few clicks away.",
          avatar:
        "https://tse4.mm.bing.net/th/id/OIP.rqP30nn4mA4oDzm0T-wdRwHaHa?pid=Api&P=0&h=180",
        },
        {
          title: "Used Clinical Software",
          name: "Dr. Arjun Mehta",
          role: "General Physician, Delhi",
           stars:4.5,
          content:
            "The clinical software feels like it was built for real doctors. Prescriptions, follow-ups, and history — everything’s just a few clicks away.",
          avatar:
        "https://tse4.mm.bing.net/th/id/OIP.rqP30nn4mA4oDzm0T-wdRwHaHa?pid=Api&P=0&h=180",
        },
     
      ];
    
    

    
      const faqs = [
        {
          question: "How can I get started with Arogya-Parinam?",
          answer: `Click on “Request a Demo” to schedule a walkthrough with our team. We'll help you understand the best solution for your needs and assist with setup.`
        },
        { question: "What products do you offer?", answer: "We offer a variety of products..." },
        { question: "Is the platform secure for storing medical data?", answer: "Yes, we use encryption and HIPAA compliance..." },
        { question: "Can I integrate this software with my existing systems?", answer: "Yes, integration is supported..." },
        { question: "Can I customize the software for my clinic or lab?", answer: "Absolutely, customization options are available..." }
      ];

      const router = useRouter()
    
    return (
  <Box>
     {/* What We Offer - Our Products */}
      <Box py={20} bg="white">
        <Container maxW="8xl">
        <Flex flexDir={"column"} justify={"flex-start"} align={"flex-start"} gap={{base:'24px',md:'30px',lg:'40px'}} >
              <Heading fontSize={{base:'24px',md : "34px",lg:'44px'}} color={"#12161D"} maxW="350px">
                What We Offer - <br /> Our Products
              </Heading>
              <Text  color="#61656E" fontSize={{base:'12px',md:'15px',lg:'20px'}} lineHeight={{base:'22px',md:'26px',lg:'32px'}}>
              One Platform. Three Powerful Solutions.
              <Box as="br" display={{ base: "none", md: "none", lg: "block" }} />
Discover how Arogya-Parinam simplifies health data management across the ecosystem.
              </Text>
            </Flex>
          <VStack spacing={12} align={"flex-start"}>
            
            
            <SimpleGrid columns={{ base: 1, md: 2,lg:3 }} spacing={{base:12,lg:20}} w="full" justifyItems={{base:"center",lg:'space-between'}}   mt={{base:'40px',md:'60px',lg:'80px'}}>
              {[
                {
                  title: "Arogya Labs",
                  description: "Lab Management Software",
                  path : "/products/arogyaLabs",
                  image: <ArogyaLabsImg 
                
      maxWidth="100%"/>
                },
                {
                  title: "Myarogya App",
                  description: "Personal Health Record Application",
                  path : "/products/mobileApp",
                  image: <ArogyaAppImg maxWidth={"100%"} />
                },
                {
                  title: "Arogya Docs",
                  description: "Clinical Doctor Software",
                  path : "",
                  image: <DocsImg maxW={"100%"} />
                }
              ].map((product, index) => (
                <Box
                  key={index}
                  bg="rgba(247, 243, 243, 1)"
                  border="1px solid rgba(244, 241, 241, 1)"
                  borderRadius="xl"
                  overflow="hidden"
                  shadow="sm"
                  pt={{base:6,lg:12}}
                  px={3}
                  
                  maxW="400px"
                >
                  <Box h={200}  display="flex" alignItems="center" justifyContent="center" >
                    <Text fontSize="4xl">{product.image}</Text>
                  </Box>
                  <Box p={5} mt={10}>
                    <Text fontSize={{base:'20px',md:'24px',lg:'26px'}} fontWeight={600} mb={1} color="gray.800">{product.title}</Text>
                    <Text color="rgba(75, 75, 75, 1)" fontSize={{base:'12px',md:'13px',lg:'16px'}} fontWeight={500} >{product.description}</Text>
                    <Button onClick={()=> product.path && router.push(product.path)}   _hover={
    product.title !== "Arogya Docs"
      ? {
          bg: "blue.700",
          transform: "translateY(1px)",
        }
      : {
        
      }
  }
                  transition="all 0.1s"
                  fontWeight={"500"} bgColor={product.title === "Arogya Docs" ? "rgba(115, 115, 115, 1)" : "rgba(31, 107, 161, 1)"} 
                  mt={"35px"} rightIcon={product.title !== "Arogya Docs" ? <FaArrowRightLong /> : undefined} color="rgba(255, 255, 255, 1)" 
                  borderRadius={"10px"} px={"20px"} py={"10px"} height={"40px"}>{product.title === "Arogya Docs" ? "Launching Soon..." : "View Product Info"}</Button>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Real Stories, Real Impact */}
      <Box py={20} bg="rgba(255, 255, 255, 1)">
        <Container maxW="8xl">
      
            <VStack spacing={4} textAlign="left" display={"flex"} flexDir={"column"} alignItems={"left"}>
              <Text fontSize={{base:"24px",md:"34px",lg:'44px'}} fontWeight={"700"} color="#12161D">
               Real Stories. Real Impact.
              </Text>
              <Text fontSize={{base :"12px",md:'15px',lg:'20px'}} color="#61656E" maxW={'90%'}>
               We build for real people solving real problems. Here’s how Arogya-Parinam is making a difference in the lives of doctors, lab owners, and patients.
              </Text>
            </VStack>
                <Box position="relative" maxW="8xl" mx="auto" mt={{base:'44px',md:'64px',lg:'84px'}}  py={5}>
     

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
            minH={{base:'100%',md : "300px",lg:'400px'}}
            bg="rgba(86, 133, 170, 1)"
            borderRadius="2xl"
            p={6}
            color="white"
            display={"flex"}
            // px={10}
            flexDir={"column"}
            alignItems={"center"}
            pos={"relative"}
>
            <Text fontSize={{base:'13px',md:'14px',lg:'16px'}} fontWeight="500" color="rgba(240, 240, 240, 1)" mb={4}>
              {t.title}
            </Text>
            <Box width="70px" mt={12} height="70px" position={"absolute"} borderRadius={"50px"}  overflow="hidden"  bg="white" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                 <Box width="50px" height="50px"  >
                   <Image src={t.avatar} alt={t.name} width="100%" height="100%" borderRadius={"50px"}/>
                 </Box>
                </Box>

               

            <Box
              bg="white"
              color="black"
              borderRadius="xl"
              p={6}
              shadow="md"
              mt={14}
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
        disabled={!canScrollLeft}
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

      {/* FAQ Section */}
        {questions && 
         <Box  py={15} px={5}>
        <Container maxW="8xl">
          <Flex
            direction={{ base: "column", lg: "row" }}
            alignItems="flex-start"
            justify="space-between"
            gap={12}
            py={5}
          >
            
            <VStack align={'flex-start'} spacing={{base:5,lg:8}} flex={1} maxW={{base : "full", md :"400px",lg :"500px"}}>
              <Heading
                // as="h1"
                fontSize={{ base: "24px", md: "34px", lg: "44px" }}
                fontWeight="700"
                color="gray.800"
                lineHeight="1.2"
                letterSpacing="-0.02em"
                textAlign={ "left" }
              >
                Frequently Asked
Questions
              </Heading>
              
              <Text
                 fontSize={{ base: "12px", md: "14px", lg: "16px" }} 
                color="gray.600"
                lineHeight="1.6"
                textAlign={{ base: "left", lg: "left" }}
              >
              We offer clear answers to complex questions — helping you make informed choices, streamline medical workflows, and deliver better care.
              </Text>
              
            
            </VStack>

           
            <Box flex={1}  maxW={{ base: "100%", md: "500px", lg: "650px" }}>
    
           <Accordion allowToggle>
  {faqs.map((faq, index) => (
    <AccordionItem key={index} border="1px solid rgba(229, 229, 230, 1)" borderRadius={"8px"} mb={4}>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton py={4} _expanded={{ bg: "none" }}  >
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                color="#12161D"
                fontSize={{ base: "16px", md: "18px", lg: "19px" }}
              >
                {faq.question}
              </Box>
              {isExpanded ? <FiMinus size={24} /> : <GoPlus size={24} />}
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            fontWeight={400}
            lineHeight={{ base: "22px", md: "24px", lg: "26px" }}
            mt={2}
            fontSize={{ base: "13px", md: "15px", lg: "17px" }}
          >
            {faq.answer}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  ))}
</Accordion>


          </Box>
       
          </Flex>
        </Container>
      </Box>}
     

      {/* CTA Section */}
      <Box py={20} bg="white" px={{base : "20px",md:"40px"}}>
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
      Smarter Healthcare  <Box as="br" display={{ base: "block", md: "none", lg: "none" }} /> Begins Here
    </Text>
    <Text
      fontSize={{ base: '13px', md: '14px', lg: '16px' }}
      color={{base:'rgba(218, 218, 218, 1)',lg:"#fff"}}
      maxW="600px"
      lineHeight={{base:'22px',lg:'26px'}}
    >
      Join the growing network of labs, clinics, and   individuals transforming
      healthcare  with our platform
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
        fontWeight={"500"}
      _hover={{
         
          transform: "translateX(-2px)",
        }}
        onClick={()=>router.push("/contact")}
      >
        Get Started
      </Button>
      <Button
        bgColor="rgba(255, 255, 255, 0.06)"

        height="58px"
        borderRadius="16px"
        color="rgba(247, 247, 247, 1)"
        px="24px"
        py="20px"
        display={{ base: 'none', md: 'flex' }}
        fontWeight={"500"}
      _hover={{
        bg:"rgba(255, 255, 255, 0.10)",
          transform: "translateX(-2px)",
        }}
          onClick={()=>router.push("/products")}
      >
        Explore Our Products
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
                < Logo />
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

export default Footer;




