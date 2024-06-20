import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Text,
  Button,
  HStack,
  Flex,
  Image,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg="gray.300" paddingInline={200}>
      <Box paddingBlock={150}>
        <Heading size={"4xl"}>Hi, I'm Ben!</Heading>
        <Heading size={"lg"}>Aspiring Software Engineer</Heading>
        <Text marginBlock={5}>
          Currently pursuing a Computer Science degree <br />
          <Text as="em" fontWeight={"bold"}>
            @ the University of Minnesota - Twin Cities
          </Text>
        </Text>
        <HStack>
          <Button size={"lg"} colorScheme={"orange"} leftIcon={<EmailIcon />}>
            Contact
          </Button>
        </HStack>
      </Box>
      <Box>
        <Heading size={"xl"}>About Me</Heading>
        <Flex>
          <Image src="https://via.placeholder.com/300"></Image>
          <Text>
            Hello! My Name is Ben and I'm an aspiring software engineer studying
            computer science at the University of Minnesota, Twin Cities.
          </Text>
          <Text>
            I am increasingly inspired by the innovative technologies being
            developed around us at all times.
          </Text>
          <Text>
            In addition to programming, I enjoy competing in Ironman races and
            Ultramarathons. I find it important to maintain a healthy lifestyle
            so I can provide my best work.
          </Text>
          <Button>Resume</Button>
        </Flex>
      </Box>
    </Box>
  );
}
