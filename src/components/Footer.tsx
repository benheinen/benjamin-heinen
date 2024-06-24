import {
  Button,
  HStack,
  Heading,
  VStack,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <VStack
      borderTop="0.5px"
      borderTopColor={"gray.400"}
      borderTopStyle={"solid"}
    >
      <VStack gap={2} marginBlock={5}>
        <Heading color={"gray.700"} size={"lg"}>
          Benjamin Heinen
        </Heading>
        <HStack gap={5}>
          <Button onClick={() => scrollToSection("greeting")} variant={"link"}>
            Home
          </Button>
          <Button onClick={() => scrollToSection("about-me")} variant={"link"}>
            About
          </Button>
          <Button onClick={() => scrollToSection("projects")} variant={"link"}>
            Projects
          </Button>
          <Button onClick={() => scrollToSection("connect")} variant={"link"}>
            Connect
          </Button>
        </HStack>
      </VStack>
      <HStack>
        <Box bg="gray.800" p={1} borderRadius={"lg"}>
          <a href="https://github.com/benheinen" target="_blank">
            <Image boxSize="20px" src="github-white.png" alt="GitHub Logo" />
          </a>
        </Box>
        <Box bg="gray.800" p={1} borderRadius={"lg"}>
          <a href="https://www.instagram.com/sduperbenn/" target="_blank">
            <Image
              boxSize="20px"
              src="instagram-white.png"
              alt="Instagram Logo"
            />
          </a>
        </Box>
        <Box bg="gray.800" p={1} borderRadius={"lg"}>
          <a href="https://www.linkedin.com/in/ben-heinen/" target="_blank">
            <Image
              boxSize="20px"
              src="linkedin-white.png"
              alt="Linkedin Logo"
            />
          </a>
        </Box>
      </HStack>
      <Text fontSize={"sm"}>Developed by Ben Heinen</Text>
    </VStack>
  );
}
