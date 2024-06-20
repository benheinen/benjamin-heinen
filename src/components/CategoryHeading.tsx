import { Heading, VStack } from "@chakra-ui/react";

interface Props {
  title: string;
  subtitle: string;
}

export default function CategoryHeading({ title, subtitle }: Props) {
  return (
    <VStack>
      <Heading size={"xl"}>{title}</Heading>
      <Heading size={"sm"} color={"gray.500"} mb={5}>
        {subtitle}
      </Heading>
    </VStack>
  );
}
