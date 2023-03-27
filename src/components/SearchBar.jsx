import React, { useCallback } from "react";
import { HStack, VStack, Box, Button } from "@chakra-ui/react";
import { SearchTag } from "./common/SearchTag";
import { SearchBox } from "./common/SearchBox";

export const SearchBar = (props) => {
  const { tags, onTagChange } = props;

  const addSearchTag = useCallback(
    (tag) => {
      onTagChange([...tags, tag]);
    },
    [onTagChange, tags]
  );

  const onRemoveTag = useCallback(
    (tag) => {
      onTagChange(tags.filter((eachTag) => eachTag !== tag));
    },
    [onTagChange, tags]
  );

  return (
    <HStack {...SearchContainerStyle}>
      <VStack width="full" alignItems="flex-start">
        <Box marginBottom="15px">
          <SearchBox onSearch={addSearchTag} />
        </Box>
        {tags.length > 0 && (
          <HStack justify="space-between" width="full">
            <HStack flexWrap="wrap">
              {tags.map((tag) => (
                <SearchTag key={tag} onRemoveTag={() => onRemoveTag(tag)}>
                  {tag}
                </SearchTag>
              ))}
            </HStack>
            <Button
              variant="ghost"
              onClick={() => onTagChange([])}
              fontSize="13px"
              color="primary.100"
              textDecorationLine="underline"
            >
              Clear
            </Button>
          </HStack>
        )}
      </VStack>
    </HStack>
  );
};

const SearchContainerStyle = {
  justify: "space-between",
  mh: "140px",
  borderRadius: "5px",
  boxShadow: "0px 15px 20px -5px rgba(13, 113, 130, 0.15)",
  p: "32px",
  bgColor: "#FFFFFF",
  mb: "40px",
  marginTop: "-70px",
};
