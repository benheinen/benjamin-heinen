import { Button, Slide } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  // Shows the scroll button once Y pos is over 100
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 150) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <Slide direction="bottom">
          <Button
            pos={"fixed"}
            bottom={50}
            right={50}
            colorScheme={"orange"}
            onClick={scrollUp}
          >
            ^
          </Button>
        </Slide>
      )}
    </div>
  );
}
