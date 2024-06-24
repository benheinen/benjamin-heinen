import {
  Flex,
  Spacer,
  HStack,
  Button,
  Heading,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Navbar() {
  // Allows for a dynamic effect of the Navbar
  // Makes a shadow appear once moved from original Y pos
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  // Used for site navigation
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Flex
      bgColor={navbar ? "white" : "gray.200"}
      as="nav"
      paddingInline={250}
      paddingBlock={5}
      alignItems={"center"}
      boxShadow={navbar ? "lg" : "none"}
      pos={"sticky"}
      top={0}
      zIndex={10}
    >
      <Grid
        templateAreas={{
          lg: `"icon header header header header "
                  "icon home about proj contact"`,
          sm: `"header header header header"
          "home about proj contact"`,
        }}
      >
        <GridItem area="icon" mr={5}>
          <Image
            src="/benjamin-heinen-pfp.jpg"
            w={20}
            minWidth={20}
            borderRadius="full"
            objectFit="cover"
            alt="Benjamin Heinen"
            display={{ base: "none", lg: "block" }}
          ></Image>
        </GridItem>
        <GridItem area={"header"} color={"gray.700"}>
          <Heading size="xl">Benjamin Heinen</Heading>
        </GridItem>
        <GridItem area={"home"}>
          <Button
            variant="link"
            _hover={{ color: "gray.700", textDecor: "underline" }}
            onClick={() => scrollToSection("greeting")}
          >
            Home
          </Button>
        </GridItem>
        <GridItem area={"about"}>
          <Button
            variant="link"
            _hover={{ color: "gray.700", textDecor: "underline" }}
            onClick={() => scrollToSection("about-me")}
          >
            About
          </Button>
        </GridItem>
        <GridItem area={"proj"}>
          <Button
            variant="link"
            _hover={{ color: "gray.700", textDecor: "underline" }}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Button>
        </GridItem>
        <GridItem area={"contact"}>
          <Button
            variant="link"
            _hover={{ color: "gray.700", textDecor: "underline" }}
            onClick={() => scrollToSection("connect")}
          >
            Connect
          </Button>
        </GridItem>
      </Grid>
      <Spacer></Spacer>
      <HStack spacing={5} mr={5}>
        <Link
          href="https://github.com/benheinen"
          isExternal
          display={{ base: "none", lg: "block" }}
        >
          <HStack>
            <Image boxSize={4} src="/github.png" />
            <Text>/benheinen</Text>
          </HStack>
        </Link>
        <Link
          href="https://www.linkedin.com/in/ben-heinen/"
          isExternal
          display={{ base: "none", lg: "block" }}
        >
          <HStack>
            <Image boxSize={4} src="/linkedin.png" />
            <Text>/in/ben-heinen</Text>
          </HStack>
        </Link>
      </HStack>
    </Flex>
  );
}
