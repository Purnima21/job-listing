import React from "react";
import { Flex } from "@chakra-ui/react";

import HeadImg from "../../assets/static-job-listings/images/bg-header-desktop.svg";

const headerStyle = {
  w: "full",
  backgroundColor: "primary.100",
};

export const Header = () => {
  return (
    <Flex {...headerStyle}>
      <img src={HeadImg} alt="header" style={{ minHeight: "100px" }} />
    </Flex>
  );
};
