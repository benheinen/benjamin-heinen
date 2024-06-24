import {
  Card,
  Heading,
  VStack,
  Image,
  Button,
  Link,
  Grid,
  GridItem,
  forwardRef,
} from "@chakra-ui/react";
import CategoryHeading from "./CategoryHeading";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface Props {
  image: string;
  title: string;
  username: string;
  link: string;
}

function ConnectCard({ title, image, username, link }: Props) {
  return (
    <Card
      borderRadius={"2xl"}
      color={"gray.800"}
      bg={"gray.100"}
      w={300}
      padding={10}
      justifyContent="center"
    >
      <VStack align={"flex-start"}>
        <Image boxSize={5} src={image}></Image>
        <Heading size={"sm"}>{title}</Heading>
        <Link href={link} isExternal>
          <Button
            color={"gray.800"}
            variant={"link"}
            rightIcon={<ChevronRightIcon />}
            fontWeight={"none"}
          >
            {username}
          </Button>
        </Link>
      </VStack>
    </Card>
  );
}

const Connect = forwardRef((props, ref) => {
  return (
    <VStack ref={ref} {...props}>
      <Grid
        gridTemplateAreas={{
          lg: `"heading heading heading"
                  "linkedin email github"`,
          sm: `"heading"
                 "linkedin"
                 "email"
                 "github"`,
        }}
        gap={5}
      >
        <GridItem area={"heading"}>
          <CategoryHeading
            title={"Connect"}
            subtitle={"Any questions? Please get in contact!"}
          />
        </GridItem>
        <GridItem area={"linkedin"}>
          <ConnectCard
            image={"/linkedin.png"}
            title={"LinkedIn"}
            username={"ben-heinen"}
            link={"https://www.linkedin.com/in/ben-heinen/"}
          />
        </GridItem>
        <GridItem area={"email"}>
          <ConnectCard
            image={"/email.png"}
            title={"Email"}
            username={"benbuis24@gmail.com"}
            link={
              "https://mail.google.com/mail/?view=cm&fs=1&to=benbuis24@gmail.com"
            }
          />
        </GridItem>
        <GridItem area={"github"}>
          <ConnectCard
            image={"/github.png"}
            title={"Github"}
            username={"benheinen"}
            link={"https://github.com/benheinen"}
          />
        </GridItem>
      </Grid>
    </VStack>
  );
});

export default Connect;
