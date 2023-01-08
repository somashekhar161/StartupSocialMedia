import { HStack, Box, Button, Heading } from "@chakra-ui/react";
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
        boxScroll.current.style.transform = "translateY(-200px)";
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
    >
      <Box py={4} px={20} margin="0 auto" opacity={"0.8"}>
        <HStack justifyContent="space-between" alignItems="center">
          <nav>
            {" "}
            <HStack>
              <Box py={0} my={0} px={4} border="1px" borderColor="gray.200">
                <Heading color="White">LOGO</Heading>
              </Box>
              <HStack px={20} fontSize={"xl"} spacing={7} fontWeight="semibold">
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
              </HStack>
            </HStack>
          </nav>
          <HStack px={20} spacing={"5rem"}>
            <Button
              bg="#262626"
              color={"White"}
              _hover={{ bg: "White", color: "Black" }}
            >
              Sign Up
            </Button>
            <Button bg="#262626" color={"White"} _hover={{ bg: "#0e0e0e" }}>
              Launch
            </Button>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
}
