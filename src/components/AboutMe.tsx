import {
  Box,
  Button,
  GridItem,
  Text,
  Image,
  Grid,
  VStack,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import CategoryHeading from "./CategoryHeading";

export default function AboutMe() {
  return (
    <Box>
      <Grid
        templateAreas={`"heading heading"
            "image text"`}
      >
        <GridItem area={"heading"}>
          <CategoryHeading
            title={"About Me"}
            subtitle={"I like to make things"}
          ></CategoryHeading>
        </GridItem>
        <GridItem area={"image"}>
          <Image
            borderRadius={"xl"}
            src="https://via.placeholder.com/300"
          ></Image>
        </GridItem>
        <GridItem area={"text"} paddingInline={10}>
          <VStack spacing={5} mb={5}>
            <Text>
              Hello! My Name is Ben and I'm an aspiring software engineer
              studying computer science at the University of Minnesota, Twin
              Cities.
            </Text>
            <Text>
              I am increasingly inspired by the innovative technologies being
              developed around us at all times. My goal is to contribute to this
              innovation with practical solutions.
            </Text>
            <Text>
              In addition to programming, I enjoy competing in Ironman races and
              Ultramarathons. I find it important to maintain a healthy
              lifestyle so I can provide my best work.
            </Text>
          </VStack>
          <HStack>
            <Spacer></Spacer>
            <Button size={"md"} colorScheme={"orange"}>
              Resume
            </Button>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
}
