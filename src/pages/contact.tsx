import { Box, Container, Divider, Flex, HStack, VStack,Text, Button, FormControl, FormLabel, Input, Textarea, FormErrorMessage, useToast } from "@chakra-ui/react";
import ContactImg from "./components/icons/contactImg";
import { FaChevronLeft } from "react-icons/fa6";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as yup from "yup"
import emailjs from "emailjs-com"
import Logo from "./components/icons/logo";
import Header from "./header";

type FormItems = {
    name:string
    email:string
    message:string
}

const Contact = () => {


    const router = useRouter();

    const toast = useToast();

  
    const handleSubmit = (values: FormItems, { resetForm }: any) => {
    emailjs
      .send(
        "service_2igzr8i",  
        "template_opubbdb", 
        {
          to_email: "arogyaparinam@gmail.com",   
          name: values.name,
          email: values.email,
          message: values.message,
        },
        "vafrmBku10gKkg-8Z"  
      )
      .then(
        () => {
         
          toast({
            description:'Message sent',
            position:'top',
            status:'success',
            duration:3000,
            isClosable:false
          })
          resetForm();
        },
        () => {
           toast({
            description:'Something Went Wrong!',
            position:'top',
            status:'error',
            duration:3000,
            isClosable:false
          })
        }
      );
  };

    const validation = yup.object().shape({
        name:yup.string().required("This Field is required"),
        email:yup.string().required("This Field is required"),
        message:yup.string().required("This Field is required"),
    })


    return (
       <Container maxW="full" p={0}>

        <Header />

         <Flex  flexDir={{base:'column',md:'column',lg:'row'}} gap={5}  h={{lg:'100vh'}}>

          <Box
  w={{ base: "100%", md: "100%", lg: "660px" }}  
  display={{base:'none',md:'none',lg:'flex'}}
  h="100%"
  bgGradient="linear(to-b, rgba(163, 182, 184, 1), rgba(189, 205, 205, 1))"
  order={{ base: 0, md: 0, lg: 2 }}

  alignItems={"flex-end"}
  justifyContent={"center"}
>
  <ContactImg

    h="auto"
    maxW={{ base: "100%", md: "100%", lg: "660px" }}
  />
</Box>

            <Box flex={2} display={"flex"} flexDir={"column"} alignItems={"flex-start"} mb={10} p={5} px={{base:5,md:10,lg:28}}  >
                <Button display={{base:'none',md:'none',lg:'block'}} leftIcon={<FaChevronLeft />} p={0} onClick={()=> router.push('/')} textDecor={"underline"} bg="none" _hover={{bg:"none"}} fontSize={"18px"} fontWeight={500} color="rgba(78, 78, 78, 1)">
                    Back to Home
                </Button>

                <Text fontSize={{base:'24px',md:'34px',lg:"54px"}} fontWeight={700} color="rgba(29, 29, 31, 1)" mt={16}>Contact Us</Text>
                <Text color="#6A6A6A" fontSize={{base:'12px',md:'14px',lg:'16px'}} lineHeight={{base:'22px',md:'25px',lg:"30px"}} fontWeight={'400'} mt={{base:3,lg:2}}>Send us your query via the form below or send us an email at  <Box as="br" display={{ base: "none", md: "none", lg: "block" }} />
<Text as="span" color="#1F6BA1" fontWeight={"600"}>arogyaparinam@gmail.com</Text> {""} for any issue you’re facing!</Text>

 <Box
        w="100%"
        my={8}
        display={{ base: "flex", md: "flex", lg: "none" }}
          bgGradient="linear(to-b, rgba(163, 182, 184, 1), rgba(189, 205, 205, 1))"
        alignItems="center"
        justifyContent="center"
          borderRadius={{base:'12px',lg:0}}
      >
        <ContactImg borderRadius={{base:'12px',lg:0}}  h="auto" maxW="100%" />
      </Box>


            <Formik
            initialValues={{
                name : '',
                email : '',
                message : ''
            }}
            validationSchema={validation}
            onSubmit={handleSubmit}>
                {({handleSubmit,handleChange,values,errors,touched,isSubmitting})=>(
                    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                        <FormControl mt={8}  isInvalid={!!errors.name && !!touched.name} >
                            <FormLabel fontSize={"15px"} fontWeight={'500'} color='rgba(68, 68, 68, 1)'>Name</FormLabel>

                            <Input
                            name="name"
                            id="name"
                            bgColor={"rgba(244, 239, 239, 1)"} 
                            border="1px solid transparent"
                            height={{base:'44px',lg:'54px'}}
                            placeholder="Enter your name"
                            borderRadius={{base:'8px',lg:'12px'}}
                            value={values.name || ""}
                            fontWeight={"400"}
                            _placeholder={{color:'rgba(141, 141, 141, 1)'}}
                            onChange={handleChange}
                            focusBorderColor="rgba(31, 107, 161, 1)"
                            />

                             <FormErrorMessage>
    {errors.name as string}
  </FormErrorMessage>
                        </FormControl>
                        <FormControl mt={8}  isInvalid={!!errors.email && !!touched.email}>
                            <FormLabel fontSize={"15px"} fontWeight={'500'} color='rgba(68, 68, 68, 1)'></FormLabel>

                            <Input
                            name="email"
                            id="email"
                            bgColor={"rgba(244, 239, 239, 1)"} 
                           border="1px solid transparent"
                            placeholder="Email Address"
                            height={{base:'44px',lg:'54px'}}
                            fontWeight={"400"}
                            _placeholder={{color:'rgba(141, 141, 141, 1)'}}
                             borderRadius={{base:'8px',lg:'12px'}}
                            value={values.email || ""}
                            onChange={handleChange}
                            focusBorderColor="rgba(31, 107, 161, 1)"
                            />

                             <FormErrorMessage>
    {errors.email as string}
  </FormErrorMessage>
                        </FormControl>
                      <FormControl mt={8} isInvalid={!!errors.message && !!touched.message}>
  <Textarea
    name="message"
    id="message"
    bgColor="rgba(244, 239, 239, 1)"
    border="1px solid transparent"
    placeholder="Type your message here"
 borderRadius={{base:'8px',lg:'12px'}}
    height="160px"
    fontWeight={"400"}
    _placeholder={{color:'rgba(141, 141, 141, 1)'}}
    resize="none"
    value={values.message || ""}
    onChange={handleChange}
    focusBorderColor="rgba(31, 107, 161, 1)"
  />

  <FormErrorMessage>
    {errors.message as string}
  </FormErrorMessage>
</FormControl>


                   <Button
  type="submit"
  isLoading={isSubmitting}  
  loadingText="Sending..."
  height={{base:'40px',lg:'55px'}}
  borderRadius={{base:'10px',lg:"16px"}}
  fontSize={{base:'13px',md:'15px',lg:"18px"}}
  px={'25px'}
  py={'10px'}
  mt={10}
  bg="rgba(31, 107, 161, 1)"
  color="white"
  w={{base:'50%',lg:'250px'}}
  _active={{ bg: "rgba(31, 107, 161, 1)" }}
  fontWeight="500"
                                _hover={{
                    bg: "blue.700",
                    transform: "translateX(-2px)",
                  }}
                  transition="all 0.1s"
>
  Send Message
</Button>

                    </form>
                )}

            </Formik>
            </Box>
           

        </Flex>
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
       </Container>
    )
}

export default Contact;