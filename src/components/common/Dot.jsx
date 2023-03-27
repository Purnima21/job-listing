import React from "react";
import { Box } from "@chakra-ui/react";

export const Dot = () => {
  return <Box {...dotStyle} />;
};

const dotStyle = {
  borderRadius: "50%",
  backgroundColor: "brand.300",
  h: "4px",
  w: "4px",
};
