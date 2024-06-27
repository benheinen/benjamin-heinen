import { Box, Button, SlideFade } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { analytics, logEvent } from "../firebase/firebase";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Shows the scroll button once Y pos is over 150
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    logEvent(analytics, "scroll_up");
  };

  return (
    <Box position="fixed" bottom={10} right={10} zIndex={10}>
      <SlideFade in={isVisible}>
        <Button colorScheme="orange" onClick={scrollUp}>
          ^
        </Button>
      </SlideFade>
    </Box>
  );
}
