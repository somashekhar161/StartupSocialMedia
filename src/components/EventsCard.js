import {
  Card,
  Image,
  CardBody,
  Heading,
  Text,
  VStack,
  HStack,
  Stack,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClock,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";

export default function EventCards() {
  return (
    <Card overflow="hidden" bg="#26262699" color={"White"} borderRadius={"lg"}>
      <CardBody>
        <Stack direction={["column", "row"]} align={"center"}>
          <Image
            objectFit="cover"
            maxW={"15rem"}
            h={"7rem"}
            src={`https://picsum.photos/500/250?random=${Math.random()}`}
            alt="Events"
            borderRadius={"lg"}
          />
          <VStack>
            <Heading size="md">Bengaluru Bootsrabbers</Heading>

            <HStack spacing={"2rem"} px={[0, 0, "2rem"]}>
              <HStack spacing={".5rem"} px={[0, 0, "2rem"]}>
                <FontAwesomeIcon icon={faUser} />
                <Text py="2">Shivam raj</Text>
              </HStack>
              <HStack spacing={".5rem"}>
                <FontAwesomeIcon icon={faClock} />
                <Text py="2">3 pm IST</Text>
              </HStack>
              <HStack spacing={".5rem"}>
                <FontAwesomeIcon icon={faLocationPin} />
                <Text py="2">remote</Text>
              </HStack>
            </HStack>
          </VStack>
        </Stack>
      </CardBody>
    </Card>
  );
}
