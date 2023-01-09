import { HStack, Stack, Box, Button, Heading } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import "../App.css";

export default function Header() {
  const boxScroll = useRef();

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    let scrollPosition = 0;
    function handleScroll(e) {
      if (scrollPosition < window.scrollY) {
        scrollPosition = window.scrollY;
        boxScroll.current.style.transform = "translateY(-220px)";
      } else {
        scrollPosition = window.scrollY;
        boxScroll.current.style.transform = "translateY(0px)";
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      className="headerBlur"
      ref={boxScroll}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      overflow={"hidden"}
    >
      <Box py={2} px={10} margin="0 auto">
        <HStack
          justifyContent="space-between"
          alignItems="center"
          flexWrap={"wrap"}
        >
          <nav>
            {" "}
            <HStack>
              <Box py={0} my={0} px={4} border="1px" borderColor="gray.200">
                <Heading color="White" size={"lg"}>
                  LOGO
                </Heading>
              </Box>
              <Stack
                direction={{ base: "column", md: "row" }}
                px={[0, 0, 20]}
                pl={[20, 0, 20]}
                fontSize={"lg"}
                spacing={[1, 7, 7]}
                fontWeight="semibold"
                flexWrap={"wrap"}
              >
                <Box _hover={{ color: "White" }} color="Grey">
                  <a href="/#Home" key={"Home"} onClick={handleClick("home")}>
                    Home
                  </a>
                </Box>
                <Box _hover={{ color: "White" }} color="Grey">
                  <a
                    href="/#Community"
                    key={"About"}
                    onClick={handleClick("community")}
                  >
                    Community
                  </a>
                </Box>
                <Box _hover={{ color: "White" }} color="Grey">
                  <a
                    href="/#Product"
                    key={"product"}
                    onClick={handleClick("product")}
                  >
                    Product
                  </a>
                </Box>
                <Box _hover={{ color: "White" }} color="Grey">
                  <a
                    href="/#About"
                    key={"About"}
                    onClick={handleClick("about")}
                  >
                    About
                  </a>
                </Box>
              </Stack>
            </HStack>
          </nav>
          <Stack
            px={[0, 0, 20]}
            spacing={[1, 0, "5rem"]}
            direction={{ base: "column", md: "row" }}
          >
            <Button
              size={"md"}
              bg="#262626"
              color={"White"}
              _hover={{ bg: "White", color: "Black" }}
            >
              Sign Up
            </Button>
            <Button
              size={"md"}
              bg="#262626"
              color={"White"}
              _hover={{ bg: "#0e0e0e" }}
            >
              Launch
            </Button>
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
}
