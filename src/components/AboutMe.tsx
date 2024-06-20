import {
  Box,
  Button,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <Box>
      <Heading size={"xl"}>About Me</Heading>
      <SimpleGrid columns={2} paddingInline={10}>
        <GridItem>
          <Image
            borderRadius={"xl"}
            src="https://via.placeholder.com/300"
          ></Image>
        </GridItem>
        <GridItem>
          <Text>
            Hello! My Name is Ben and I'm an aspiring software engineer studying
            computer science at the University of Minnesota, Twin Cities.
          </Text>
          <Text>
            I am increasingly inspired by the innovative technologies being
            developed around us at all times. My goal is to contribute to this
            innovation with practical solutions.
          </Text>
          <Text>
            In addition to programming, I enjoy competing in Ironman races and
            Ultramarathons. I find it important to maintain a healthy lifestyle
            so I can provide my best work.
          </Text>
          <Button colorScheme={"orange"}>Resume</Button>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
