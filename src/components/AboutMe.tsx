import {
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
import { StarIcon } from "@chakra-ui/icons";

export default function AboutMe() {
  return (
    <VStack>
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
            boxSize={300}
            boxShadow={"xs"}
            src="/UCARD_PHOTO.jpeg"
          ></Image>
        </GridItem>
        <GridItem area={"text"} paddingInline={10}>
          <VStack spacing={5} mb={5} color={"gray.600"}>
            <Text>
              Hello! My name is Ben and I'm an aspiring software engineer
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
            <Spacer />
            <a href="/resume.pdf" target={"_blank"}>
              <Button
                leftIcon={<StarIcon />}
                size={"md"}
                colorScheme={"orange"}
              >
                Resume
              </Button>
            </a>
          </HStack>
        </GridItem>
      </Grid>
    </VStack>
  );
}
