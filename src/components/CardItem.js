import {
  Card,
  CardBody,
  Box,
  Text,
  Image,
  Heading,
  VStack,
  GridItem,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartBorder } from "@fortawesome/free-regular-svg-icons";

import { useState } from "react";
export default function CardItems() {
  const [isClicked, setClicked] = useState(false);

  const colSpan = useBreakpointValue({ base: 12, md: 6, lg: 4, xl: 3 });
  return (
    <GridItem colSpan={colSpan}>
      <Card
        color={"White"}
        borderRadius="3xl"
        bg={"#262626"}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        _hover={{ transform: "translate(0px, -18px)" }}
        w={"20.5rem"}
      >
        <CardBody padding={7}>
          <VStack spacing={"-10px"}>
            <Image
              alt="products"
              src={`https://picsum.photos/400/800?random=${Math.random()}`}
              borderRadius="3xl"
              w={"18rem"}
              h={"17.188rem"}
              opacity="0.9"
            />
            <Box className="likeIcon">
              <Box opacity={"0.8"}>
                <FontAwesomeIcon
                  icon={isClicked ? faHeart : heartBorder}
                  onClick={() => {
                    setClicked((click) => !click);
                  }}
                />
              </Box>
            </Box>

            <VStack alignItems={"flex-start"} p={"0px"} m={0} mt={"-10px"}>
              <HStack justifyContent="space-between" alignItems="center">
                <Heading size={"md"}>Start up Name Quis eiusmod.</Heading>
                <Box
                  borderRadius={"2xl"}
                  borderWidth={".2rem"}
                  borderColor={"gray"}
                  px={"1rem"}
                >
                  <Text>category</Text>
                </Box>
              </HStack>
              <Text
                whiteSpace="nowrap"
                maxW={"18rem"}
                overflow={"hidden"}
                textOverflow="ellipsis"
              >
                Description in 1 line Minim consectetu mollit voluptate eiusmod.
                Nostrud officia aliquip ullamco laboris.
              </Text>
              <HStack>
                <Text fontWeight="bold">LOGO</Text>

                <Text size={"lg"}>Builder Mantosh</Text>
              </HStack>
            </VStack>
          </VStack>
        </CardBody>
      </Card>
    </GridItem>
  );
}
