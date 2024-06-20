import {
  Flex,
  Spacer,
  HStack,
  Button,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useState } from "react";
export default function Navbar() {
  // Allows for a dynamic effect of the Navbar
  // Makes a shadow appear once moved from original Y pos
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Flex
      bgColor={navbar ? "gray.300" : "gray.300"}
      as="nav"
      p="10px"
      alignItems="center"
      gap="10px"
      boxShadow={navbar ? "md" : "none"}
      fontWeight="bold"
      width="100%"
      pos="sticky"
      top={0}
      zIndex={10}
    >
      <Grid
        templateAreas={`"header header header"
                  "proj updates contact"`}
      >
        <GridItem area={"header"} color={"gray.700"}>
          <Heading size="xl">Benjamin Heinen</Heading>
        </GridItem>
        <GridItem area={"proj"}>
          <Button
            variant="link"
            _hover={{ color: "white", textDecor: "underline" }}
          >
            Projects
          </Button>
        </GridItem>
        <GridItem area={"updates"}>
          <Button
            variant="link"
            _hover={{ color: "white", textDecor: "underline" }}
          >
            Updates
          </Button>
        </GridItem>
        <GridItem area={"contact"}>
          <Button
            variant="link"
            _hover={{ color: "white", textDecor: "underline" }}
          >
            Contact
          </Button>
        </GridItem>
      </Grid>
      <Spacer></Spacer>
      <HStack spacing="20px"></HStack>
    </Flex>
  );
}
