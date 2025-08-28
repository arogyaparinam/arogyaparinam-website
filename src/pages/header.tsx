import {
  Box,
  Container,
  Flex,
  HStack,
  Button,
  Text,
  IconButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Logo from "./components/icons/logo";
import { CgMenu } from "react-icons/cg";
import { Link } from "@/components/Link";
import { FaAngleUp } from "react-icons/fa6";

const Header = () => {
  const router = useRouter();
  const { isOpen, onToggle, onClose } = useDisclosure();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Products", href: "/products" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <Box bg="white" shadow="sm" position="sticky" top={0} zIndex={1000} borderBottom={"1px solid rgba(232, 232, 232, 1)"}>
      <Container maxW="8xl">
        <Flex justify="space-between" align="center" py={4}>
          <Logo />

       
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {menuItems.slice(0, 3).map((item) => {
              const isActive =
    item.href === "/products"
      ? router.pathname.startsWith("/products") 
      : router.pathname === item.href;
      return (
  <Link key={item.href} href={item.href} textDecor={"none"} _hover={{textDecor:"none"}}>
                <Text
                  fontSize="16px"
                  color={isActive ? "black" : "gray.600"}
                  cursor="pointer"
                  fontWeight={
                    isActive ? "600" : "normal"
                  }
                >
                  {item.label}
                </Text>
              </Link>
      )
            
})}
          </HStack>

          <Box display={{ base: "none", md: "block" }}>
            <Link href="/contact" textDecor={"none"}>
              <Button bgColor={"rgba(31, 107, 161, 1)"} fontWeight={"normal"} fontSize={'16px'} color="rgba(255, 255, 255, 1)" py="16px" px="24px" height="44px" borderRadius={"16px"} _hover={{
                    bg: "blue.700",
                    
                  }}>
                Contact us
              </Button>
            </Link>
          </Box>

       
          <Box display={{ base: "block", md: "none" }}>
{isOpen ? 
             <IconButton
              aria-label="close menu"
              icon={<FaAngleUp  size={22} />}
              variant="ghost"
              onClick={onToggle}
            />
            :
           
            <IconButton
              aria-label="Open menu"
              icon={<CgMenu size={22} />}
              variant="ghost"
              onClick={onToggle}
            />}
          </Box>
        </Flex>
      </Container>

    
      {isOpen && (
        <Box
          position="absolute"
          top="100%" 
          left={0}
          w="100%"
          bg="white"
          shadow="md"
          zIndex={9999}
        >
          <VStack align="stretch" spacing={4} px={6} py={4}>
            {menuItems.map((item) => {
 const isActive =
    item.href === "/products"
      ? router.pathname.startsWith("/products") 
      : router.pathname === item.href;
              return (
 <Text
                key={item.href}
                fontSize="md"
                fontWeight={
                  isActive ? "600" : "normal"
                }
                color={isActive ? "blue.600" : "gray.700"}
                cursor="pointer"
                onClick={() => {
                  router.push(item.href);
                  onClose();
                }}
              >
                {item.label}
              </Text>
              )
             
})}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Header;
