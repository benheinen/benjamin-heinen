import {
  Card,
  VStack,
  Image,
  Button,
  HStack,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import CategoryHeading from "./CategoryHeading";

interface Props {
  title: string;
  image: string;
  link: string;
}

function ProjectsCard({ title, image, link }: Props) {
  return (
    <Card bg={"gray.100"} borderRadius={"2xl"} p={5} w={400}>
      <VStack>
        <Image
          borderRadius={"2xl"}
          outline={"1px solid"}
          outlineColor={"gray.200"}
          objectFit={"cover"}
          src={image}
        ></Image>
        <Heading fontSize={"xl"} fontWeight={"bold"}>
          {title}
        </Heading>
        <HStack>
          <a href={link} target={"_blank"}>
            <Button
              color={"gray.600"}
              fontWeight={"none"}
              variant={"link"}
              gap={2}
            >
              <Image boxSize="15px" src="github.png" alt="GitHub Logo" />
              Github
            </Button>
          </a>
        </HStack>
      </VStack>
    </Card>
  );
}

export default function Projects() {
  return (
    <VStack>
      <Grid
        templateAreas={{
          sm: `"heading"
        "card1"
        "card2"`,
          lg: `"heading heading"
        "card1 card2"`,
        }}
        gap={5}
      >
        <GridItem area={"heading"}>
          <CategoryHeading
            title={"Projects"}
            subtitle={"My recent ideas come to life!"}
          />
        </GridItem>
        <GridItem area={"card1"}>
          <ProjectsCard
            title={"Data Structures Repo"}
            image={"data-structures.png"}
            link={"https://github.com/benheinen/data-structures"}
          />
        </GridItem>
        <GridItem area={"card2"}>
          <ProjectsCard
            title={"Raycasting Engine"}
            image={"raycasting-engine.png"}
            link={"https://github.com/benheinen/python-raycasting-engine"}
          />
        </GridItem>
      </Grid>
    </VStack>
  );
}
