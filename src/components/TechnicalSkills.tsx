import {
  Box,
  SimpleGrid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  List,
  ListItem,
} from "@chakra-ui/react";
import CategoryHeading from "./CategoryHeading";

type SkillCategory = {
  title: string;
  items: string[][];
};

const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      ["C", "HTML/CSS", "Java"],
      ["TypeScript", "Python", "SwiftUI"],
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      ["NumPy", "PyGame", "ChakraUI"],
      ["React", "Node.js"],
    ],
  },
  {
    title: "Tools",
    items: [
      ["Git", "Unix", "Docker"],
      ["Firebase", "MySQL"],
    ],
  },
];

interface SkillCardProps {
  title: string;
  items: string[][];
}

// In the future, I might decide to export this component to seperate it from this file.
function SkillCard({ title, items }: SkillCardProps) {
  return (
    <GridItem>
      <Card
        borderRadius={"2xl"}
        shadow={"Base"}
        color={"gray.800"}
        bg={"gray.100"}
        p={5}
      >
        <CardHeader fontSize={"xl"} fontWeight={"bold"}>
          {title}
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={2}>
            {items.map(function (list, index) {
              return (
                <GridItem key={index}>
                  <List>
                    {list.map(function (item, idx) {
                      return <ListItem key={idx}>{item}</ListItem>;
                    })}
                  </List>
                </GridItem>
              );
            })}
          </SimpleGrid>
        </CardBody>
      </Card>
    </GridItem>
  );
}

function Skills() {
  return (
    <Box marginBlock={50}>
      <CategoryHeading
        title={"Technical Skills"}
        subtitle={"The technologies behind my projects"}
      ></CategoryHeading>
      <SimpleGrid columns={3} gap={10}>
        {skillsData.map(function (skill, index) {
          return (
            <SkillCard key={index} title={skill.title} items={skill.items} />
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default Skills;
