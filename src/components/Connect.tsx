import { Card, Heading, VStack, Image, Button, Box } from "@chakra-ui/react";
import CategoryHeading from "./CategoryHeading";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface Props {
  image: string;
  title: string;
  username: string;
}

function ConnectCard({ title, image, username }: Props) {
  return (
    <Card
      borderRadius={"2xl"}
      shadow={"Base"}
      color={"gray.800"}
      bg={"gray.100"}
      w={300}
      h={125}
      paddingInline={10}
      justifyContent="center"
    >
      <VStack align={"flex-start"}>
        <Image boxSize={5} src={image}></Image>
        <Heading size={"sm"}>{title}</Heading>
        <Button
          color={"gray.800"}
          variant={"link"}
          rightIcon={<ChevronRightIcon />}
          fontWeight={"none"}
        >
          {username}
        </Button>
      </VStack>
    </Card>
  );
}

export default function Connect() {
  return (
    <Box alignItems={"flex-start"}>
      <CategoryHeading
        title={"Connect"}
        subtitle={"Any questions? Please get in contact!"}
      />
      <VStack>
        <ConnectCard
          image={"linkedin.png"}
          title={"LinkedIn"}
          username={"ben-heinen"}
        />
        <ConnectCard
          image={"linkedin.png"}
          title={"Email"}
          username={"benbuis24@gmail.com"}
        />
        <ConnectCard
          image={"github.png"}
          title={"Github"}
          username={"benheinen"}
        />
      </VStack>
    </Box>
  );
}
