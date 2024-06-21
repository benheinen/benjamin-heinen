import { ArrowDownIcon, EmailIcon } from "@chakra-ui/icons";
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
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Box bg="gray.300" paddingInline={250}>
      <Grid
        paddingTop={200}
        paddingBottom={125}
        templateAreas={`"greeting image"`}
      >
        <GridItem area={"greeting"}>
          <Heading size={"4xl"}>Hi, I'm Ben!</Heading>
          <Heading size={"lg"}>Aspiring Software Engineer</Heading>
          <Text marginBlock={5}>
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
                leftIcon={<EmailIcon />}
              >
                Contact
              </Button>
              <Button rightIcon={<ArrowDownIcon />} variant="link" mt={20}>
                Scroll
              </Button>
            </VStack>
          </HStack>
        </GridItem>
        <GridItem area="image"></GridItem>
      </Grid>
      <AboutMe />
      <TechnicalSkills />
      <Projects />
      <Contact />
    </Box>
  );
}
