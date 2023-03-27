import React, { useState } from "react";
import { Input, HStack, Button } from "@chakra-ui/react";

export const SearchBox = (props) => {
  const { onSearch } = props;
  const [searchValue, setSearchValue] = useState("");

  const onClickSearch = () => {
    onSearch(searchValue);
    setSearchValue("");
  };

  return (
    <>
      <HStack spacing={3}>
        <Input
          placeholder="search...."
          size="md"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button colorScheme="teal" size="md" onClick={onClickSearch}>
          Search
        </Button>
      </HStack>
    </>
  );
};
