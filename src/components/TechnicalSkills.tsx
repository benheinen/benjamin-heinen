import {
  GridItem,
  Card,
  CardHeader,
  CardBody,
  VStack,
  Grid,
  forwardRef,
} from "@chakra-ui/react";
import CategoryHeading from "./CategoryHeading";
interface Props {
  title: string;
  items: string;
}

// In the future, I might decide to export this component to seperate it from this file.
function SkillCard({ title, items }: Props) {
  return (
    <Card w={300} borderRadius={"2xl"} bg={"gray.100"}>
      <CardHeader fontWeight={"bold"}>{title}</CardHeader>
      <CardBody>{items}</CardBody>
    </Card>
  );
}

const Skills = forwardRef((props, ref) => {
  return (
    <VStack ref={ref} {...props}>
      <Grid
        gridTemplateAreas={{
          lg: `"heading heading heading"
        "card1 card2 card3"`,
          sm: `"heading"
        "card1"
        "card2"
        "card3"`,
        }}
        gap={5}
      >
        <GridItem area={"heading"}>
          <CategoryHeading
            title={"Technical Skills"}
            subtitle={"The technologies behind my projects"}
          ></CategoryHeading>
        </GridItem>
        <GridItem area={"card1"}>
          <SkillCard
            title={"Languages"}
            items={"C, HTML/CSS, Java, TypeScript, Python, SwiftUI"}
          />
        </GridItem>
        <GridItem area={"card2"}>
          <SkillCard
            title={"Frameworks & Libraries"}
            items={"React, ChakraUI, Node.js, NumPy, PyGame"}
          />
        </GridItem>
        <GridItem area={"card3"}>
          <SkillCard
            title={"Tools"}
            items={"MySQL, Git, Docker, Unix, Firebase"}
          />
        </GridItem>
      </Grid>
    </VStack>
  );
});

export default Skills;
