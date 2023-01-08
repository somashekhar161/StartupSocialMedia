import {
  Box,
  Button,
  Text,
  Container,
  Heading,
  VStack,
  HStack,
} from "@chakra-ui/react";
import EventCards from "./EventsCard";

export default function Community() {
  return (
    <Container maxW={"container.xl"} mt={"15rem"} color={"White"}>
      {" "}
      <Box id="community-section" w="full" pt={"5rem"} textAlign={"center"}>
        <VStack spacing={"2rem"}>
          <Heading size={"2xl"}>Upcoming Events</Heading>
          <Heading size={"lg"}>
            Find other builders in your area so you can learn,share,and work
            together
          </Heading>
          <Button bg="#262626" color={"White"} _hover={{ bg: "#0e0e0e" }}>
            Host and Event
          </Button>
          <HStack>
            <Text>Click here for </Text>
            <a as="u" href="#Code_of_Conduct">
              Code of Conduct
            </a>

            <Text>events</Text>
          </HStack>
          <EventCards />
          <EventCards />
          <EventCards />
          <EventCards />
          <EventCards />
          <EventCards />
        </VStack>
      </Box>
    </Container>
  );
}
