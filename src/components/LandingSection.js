import {
  Box,
  Text,
  Button,
  VStack,
  Heading,
  Image,
  HStack,
} from "@chakra-ui/react";

export default function LandingSection() {
  return (
    <Box id="home-section" h="4xl" color={"White"} textAlign="center">
      <Box
        mt={"18rem"}
        px={{ sm: "0rem", md: "35rem" }}
        fontWeight={"semibold"}
      >
        <VStack spacing={"23px"}>
          <Heading as="h1" size="2xl">
            Reprehenderit consequat consectetur
          </Heading>
          <Text fontSize="xl">
            Culpa officia sunt sunt sint ut Lorem dolor. Id cupidatat nulla ad
            velit. Sit aliqua cupidatat proident adipisicing Culpa officia sunt
            sunt sint ut Lorem dolor. Id cupidatat nulla ad velit. Sit aliqua
            cupidatat proident adipisicing.
          </Text>
          <Button
            bg="#262626"
            color={"White"}
            _hover={{ bg: "#0e0e0e" }}
            size="lg"
            w={"15rem"}
          >
            Launch
          </Button>
        </VStack>
        <HStack spacing={"5px"}>
          <Image
            id="profile-1"
            alt="profile 1"
            borderRadius="full"
            boxSize={"110px"}
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
          <Image
            id="profile-2"
            alt="profile 1"
            borderRadius="full"
            boxSize={"110px"}
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
          <Image
            id="profile-3"
            alt="profile 1"
            borderRadius="full"
            boxSize={"110px"}
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
          <Image
            id="profile-4"
            alt="profile 1"
            borderRadius="full"
            boxSize={"110px"}
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
          <Image
            id="profile-5"
            alt="profile 1"
            borderRadius="full"
            boxSize={"110px"}
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
          <Image
            id="profile-6"
            alt="profile 1"
            borderRadius="full"
            boxSize={"110px"}
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
          <Image
            id="profile-7"
            alt="profile 1"
            borderRadius="full"
            boxSize={"110px"}
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
          <Image
            id="profile-8"
            alt="profile 1"
            borderRadius="full"
            boxSize={"110px"}
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
        </HStack>
      </Box>
    </Box>
  );
}
