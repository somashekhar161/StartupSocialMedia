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
    <Box id="home-section" color={"White"} textAlign="center">
      <Box
        my={{ base: "0rem", md: "13rem" }}
        mt={{ base: "4rem" }}
        px={{ base: "1rem", md: "0rem", lg: "30rem" }}
        fontWeight={"semibold"}
      >
        <VStack spacing={"23px"}>
          <Heading as="h1" size="xl">
            Reprehenderit consequat consectetur
          </Heading>
          <Text fontSize="lg">
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
        <HStack spacing={"5px"} flexWrap={"wrap"} py={[8, 0]} px={[5, 0]}>
          <Image
            id="profile-1"
            alt="profile 1"
            borderRadius="full"
            boxSize={"100px"}
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
          <Image
            id="profile-2"
            alt="profile 1"
            borderRadius="full"
            boxSize={"100px"}
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
          <Image
            id="profile-3"
            alt="profile 1"
            borderRadius="full"
            boxSize={"100px"}
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
          <Image
            id="profile-4"
            alt="profile 1"
            borderRadius="full"
            boxSize={"100px"}
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
          <Image
            id="profile-5"
            alt="profile 1"
            borderRadius="full"
            boxSize={"100px"}
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
          <Image
            id="profile-6"
            alt="profile 1"
            borderRadius="full"
            boxSize={"100px"}
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
          <Image
            id="profile-7"
            alt="profile 1"
            borderRadius="full"
            boxSize={"100px"}
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
          <Image
            id="profile-8"
            alt="profile 1"
            borderRadius="full"
            boxSize={"100px"}
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
        </HStack>
      </Box>
    </Box>
  );
}
