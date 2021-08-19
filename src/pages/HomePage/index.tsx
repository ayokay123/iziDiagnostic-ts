import React, { ReactElement } from "react";
import Carousel from "../../components/Carousel";
import GettingStarting from "../../components/GettingStarting";
import Introduction from "../../components/Introduction";
import Info from "../../components/Info/index";
import StartNow from "../../components/StartNow";
import ThankYou from "../../components/ThankYou";

export default function HomePage(): ReactElement {
  return (
    <>
      <Carousel />
      <GettingStarting />
      <Introduction />
      <Info />
      <StartNow />
      <ThankYou />
    </>
  );
}
