import React from "react";
import { Box, Tag, Flex } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export const SearchTag = (props) => {
  const { children, onRemoveTag } = props;
  return (
    <Flex m="5px">
      <Tag size="lg" {...tagStyle}>
        {children}
      </Tag>
      <Box as="span" {...closeStyle} onClick={onRemoveTag}>
        <CloseIcon color="white.100" fontSize="14px" />
      </Box>
    </Flex>
  );
};

const tagStyle = {
  backgroundColor: "brand.200",
  color: "primary.100",
  fontSize: "13px",
  borderRightRadius: 0,
  h: "32px",
};

const closeStyle = {
  justify: "center",
  alignItems: "center",
  backgroundColor: "primary.100",
  cursor: "pointer",
  w: "32px",
  marginInlineStart: 0,
  h: "32px",
  _hover: {
    backgroundColor: "dark.500",
  },
  borderRightRadius: "4px",
};
