import { EmailIcon } from "@chakra-ui/icons";
import { Box, Heading, Text, Button, HStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg="gray.300">
      <Box marginInline={200}>
        <Heading size={"4xl"}>Hi, I'm Ben!</Heading>
        <Heading size={"lg"}>Aspiring Software Engineer</Heading>
        <Text marginBlock={5}>
          Currently pursuing a Computer Science degree <br /> @ the University
          of Minnesota - Twin Cities
        </Text>
        <HStack>
          <Button colorScheme={"blue"} leftIcon={<EmailIcon />}>
            Message
          </Button>
          <Button colorScheme={"gray"}></Button>
        </HStack>
      </Box>
    </Box>
  );
}
