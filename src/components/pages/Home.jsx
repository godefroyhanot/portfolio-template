import React from "react";
import { Heading, Paragraph, Hyperlien } from "../atoms/Typo";
import { BgColor } from "../atoms/Containers";
import { Carousel } from "../molecules/Widgets";

const Home = () => {
  return (
    <BgColor>
      <Heading>Mon Portfolio</Heading>
      <Carousel
        handleLeftCarouselElt={(<>[Precedent]</>)}
        handleRightCarouselElt={(<>[Suivant]</>)}
        handleCarouselElt={<>[.]</>}
        content={[
          (<div>Hello</div>),
          (<div>yo</div>),
          (<div>Salut</div>)
        ]}
      />
    </BgColor >
  );
};

export default Home;
