import {
  Box,
  Heading,
  SimpleGrid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  List,
  ListItem,
  VStack,
} from "@chakra-ui/react";

type SkillItem = string;
type SkillCategory = {
  title: string;
  items: SkillItem[][];
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
    title: "Frameworks/Libraries",
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
  items: SkillItem[][];
}

function SkillCard(props: SkillCardProps) {
  const { title, items } = props;
  return (
    <GridItem>
      <Card borderRadius={"2xl"} shadow={"base"} color={"gray.800"} p={5}>
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
      <VStack>
        <Heading size={"xl"}>Technical Skills</Heading>
        <Heading size={"sm"} color={"gray.500"} mb={5}>
          The technologies behind my projects
        </Heading>
      </VStack>
      <SimpleGrid columns={3} paddingInline={10} gap={10}>
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
