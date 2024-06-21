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
          <Button variant={"link"}>Home</Button>
          <Button variant={"link"}>About</Button>
          <Button variant={"link"}>Projects</Button>
          <Button variant={"link"}>Updates</Button>
          <Button variant={"link"}>Contact</Button>
        </HStack>
      </VStack>
      <HStack>
        <Box bg="gray.800" p={1} borderRadius={"lg"}>
          <Image boxSize="20px" src="github-white.png" alt="GitHub Logo" />
        </Box>
        <Box bg="gray.800" p={1} borderRadius={"lg"}>
          <Image boxSize="20px" src="instagram-white.png" alt="GitHub Logo" />
        </Box>
        <Box bg="gray.800" p={1} borderRadius={"lg"}>
          <Image boxSize="20px" src="linkedin-white.png" alt="GitHub Logo" />
        </Box>
      </HStack>
      <Text fontSize={"sm"}>Developed by Ben Heinen</Text>
    </VStack>
  );
}
