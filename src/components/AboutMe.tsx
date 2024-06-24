import {
  Button,
  GridItem,
  Text,
  Image,
  Grid,
  VStack,
  forwardRef,
} from "@chakra-ui/react";
import CategoryHeading from "./CategoryHeading";
import { StarIcon } from "@chakra-ui/icons";

const AboutMe = forwardRef((props, ref) => {
  return (
    <VStack ref={ref} {...props}>
      <Grid
        templateAreas={{
          lg: `"heading heading"
                "image text1"
                "image text2"
                "image text3"
                "resume text3"`,
          base: `"heading"
          "image"
          "text1"
          "text2"
          "text3"
          "resume"`,
        }}
        gap={5}
      >
        <GridItem area={"heading"}>
          <CategoryHeading
            title={"About Me"}
            subtitle={"I like to make things"}
          />
        </GridItem>
        <GridItem area={"image"}>
          <Image
            borderRadius={"xl"}
            boxShadow={"xs"}
            w={300}
            src="/UCARD_PHOTO.jpeg"
          />
        </GridItem>
        <GridItem area={"text1"}>
          <Text w={300}>
            Hello! My name is Ben and I'm an aspiring software engineer studying
            computer science at the
            <strong> University of Minnesota, Twin Cities</strong>
          </Text>
        </GridItem>
        <GridItem area={"text2"}>
          <Text w={300}>
            I am increasingly inspired by the innovative technologies being
            developed around us at all times. My goal is to contribute to this
            innovation with using my projects and future career.
          </Text>
        </GridItem>
        <GridItem area={"text3"}>
          <Text w={300}>
            In addition to programming, I enjoy competing in
            <strong> Ironman races</strong> and <strong>Ultramarathons</strong>.
            I find it important to maintain a healthy lifestyle so I can provide
            my best work.
          </Text>
        </GridItem>
        <GridItem area={"resume"}>
          <a href="/resume.pdf" target={"_blank"}>
            <Button leftIcon={<StarIcon />} w={300} colorScheme={"orange"}>
              Resume
            </Button>
          </a>
        </GridItem>
      </Grid>
    </VStack>
  );
});

export default AboutMe;
