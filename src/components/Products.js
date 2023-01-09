import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

import CardItems from "./CardItem";
export default function products() {
  return (
    <Box w={"full"} px={["0", "100px", "60px"]} align={"center"}>
      <VStack spacing={10} mt={"10rem"} pt={"3rem"} id="product-section">
        <Heading color={"White"}>Recent Launches</Heading>
        <SimpleGrid
          columns={12}
          columnGap={[0, 10, 10]}
          rowGap={[1, 6, 6]}
          w={"full"}
        >
          <CardItems />
          <CardItems />
          <CardItems />
          <CardItems />
        </SimpleGrid>
        <Heading color={"White"}>Popular Products</Heading>
        <SimpleGrid columns={12} columnGap={[0, 10]} rowGap={[1, 6]} w={"full"}>
          <CardItems />
          <CardItems />
          <CardItems />
          <CardItems />
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
