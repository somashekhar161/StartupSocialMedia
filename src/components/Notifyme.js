import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
  Box,
} from "@chakra-ui/react";

export default function Notifyme() {
  return (
    <Container maxW={"container.xl"} mt={"15rem"} color={"White"}>
      <Box
        bg="#26262650"
        borderRadius={"lg"}
        p={"30px"}
        marginTop={"5rem"}
        marginBottom={"5rem"}
      >
        <Flex direction={{ base: "column", md: "row" }}>
          <Heading noOfLines={2} w={"30rem"} size={"lg"}>
            Stay ahead of the Curve get startup resources to your inbox{" "}
          </Heading>
          <Flex direction={"column"} paddingRight={"20px"}>
            <Input w={"20rem"} placeholder="email" />
            <Text padding={"10px"}>we don't spam</Text>
          </Flex>{" "}
          <Button
            marginleft={"2px"}
            bg="#262626"
            color={"White"}
            _hover={{ bg: "White", color: "Black" }}
          >
            I'M in!
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}
