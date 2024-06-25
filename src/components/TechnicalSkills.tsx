import {
  GridItem,
  Card,
  CardHeader,
  VStack,
  Grid,
  forwardRef,
  UnorderedList,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import CategoryHeading from "./CategoryHeading";

const Skills = forwardRef((props, ref) => {
  return (
    <VStack ref={ref} {...props}>
      <Grid
        gridTemplateAreas={{
          lg: `"heading heading heading"
                "card1 card2 card3"`,
          base: `"heading"
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
          />
        </GridItem>
        <GridItem area={"card1"}>
          <Card w={300} borderRadius={"2xl"} bg={"gray.100"}>
            <CardHeader fontWeight={"bold"}>Languages</CardHeader>
            <Flex gap={10} marginInline={5} marginBottom={5}>
              <UnorderedList>
                <ListItem>C</ListItem>
                <ListItem>Java</ListItem>
                <ListItem>TypeScript</ListItem>
              </UnorderedList>
              <UnorderedList>
                <ListItem>SwiftUI</ListItem>
                <ListItem>HTML/CSS</ListItem>
                <ListItem>Python</ListItem>
              </UnorderedList>
            </Flex>
          </Card>
        </GridItem>
        <GridItem area={"card2"}>
          <Card w={300} borderRadius={"2xl"} bg={"gray.100"}>
            <CardHeader fontWeight={"bold"}>Frameworks & Libraries</CardHeader>
            <Flex gap={10} marginInline={5} marginBottom={5}>
              <UnorderedList>
                <ListItem>React</ListItem>
                <ListItem>Node.js</ListItem>
                <ListItem>ChakraUI</ListItem>
              </UnorderedList>
              <UnorderedList>
                <ListItem>NumPy</ListItem>
                <ListItem>PyGame</ListItem>
              </UnorderedList>
            </Flex>
          </Card>
        </GridItem>
        <GridItem area={"card3"}>
          <Card w={300} borderRadius={"2xl"} bg={"gray.100"}>
            <CardHeader fontWeight={"bold"}>Tools</CardHeader>
            <Flex gap={10} marginInline={5} marginBottom={5}>
              <UnorderedList>
                <ListItem>MySQL</ListItem>
                <ListItem>Git</ListItem>
                <ListItem>Docker</ListItem>
              </UnorderedList>
              <UnorderedList>
                <ListItem>Unix</ListItem>
                <ListItem>Firebase</ListItem>
              </UnorderedList>
            </Flex>
          </Card>
        </GridItem>
      </Grid>
    </VStack>
  );
});

export default Skills;
