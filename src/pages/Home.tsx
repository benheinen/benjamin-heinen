import { ArrowDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Text,
  Button,
  HStack,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";

import TechnicalSkills from "../components/TechnicalSkills";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Connect from "../components/Connect";
import BackToTopButton from "../components/BackToTopButton";
import { useRef } from "react";

export default function Home() {
  // Used for site navigation. Scroll between components.
  const aboutMeRef = useRef<null | HTMLDivElement>(null);
  const connectRef = useRef<null | HTMLDivElement>(null);
  const technicalSkillsRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToConnect = () => {
    connectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box bg="gray.200">
      <BackToTopButton></BackToTopButton>
      <VStack gap={190} paddingBottom={125}>
        <Grid
          paddingBlock={150}
          templateAreas={{
            lg: `"greeting"`,
            sm: `"greeting"`,
            xs: `"greeting"`,
          }}
        >
          <GridItem id={"greeting"} area={"greeting"} w={"100%"}>
            <Heading size={"4xl"}>Hi, I'm Ben!</Heading>
            <Heading size={"lg"}>Aspiring Software Engineer</Heading>
            <Text marginBlock={5} fontSize={"lg"}>
              Currently pursuing a Computer Science degree <br />
              <Text as="em" fontWeight={"bold"}>
                @ the University of Minnesota - Twin Cities
              </Text>
            </Text>
            <HStack>
              <VStack>
                <Button
                  size={"lg"}
                  colorScheme={"orange"}
                  onClick={scrollToConnect}
                >
                  Connect
                </Button>
                <Button
                  rightIcon={<ArrowDownIcon />}
                  variant="link"
                  mt={20}
                  onClick={scrollToAbout}
                >
                  Scroll
                </Button>
              </VStack>
            </HStack>
          </GridItem>
        </Grid>
        <AboutMe id={"about-me"} ref={aboutMeRef} />
        <TechnicalSkills id={"skills"} ref={technicalSkillsRef} />
        <Projects id={"projects"} ref={projectsRef} />
        <Connect id={"connect"} ref={connectRef} />
      </VStack>
    </Box>
  );
}
