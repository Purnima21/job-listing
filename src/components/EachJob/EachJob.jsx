import React from "react";
import { HStack, VStack, Box, Image, Tag } from "@chakra-ui/react";
import { containerStyle, JobFeatureTagStyle, JobFilterTagStyle } from "./style";
import { Dot } from "../common/Dot";

export const EachJob = (props) => {
  const { jobData, onTagAdd } = props;
  const logo = require(`../../assets/static-job-listings/${jobData.logo}`);
  return (
    <HStack {...containerStyle} flexWrap="wrap">
      <HStack>
        <Box mr="10px">
          <Image
            src={logo.default}
            alt="logo"
            w={{ base: "88px", sm: "60px" }}
            h={{ base: "88px", sm: "60px" }}
          />
        </Box>
        <Box>
          <VStack alignItems="flex-start">
            <HStack>
              <Box fontWeight="bold" color="primary.100" fontSize="14px">
                {jobData.company}
              </Box>
              <Box>
                {jobData.new && (
                  <Tag variant="solid" {...JobFeatureTagStyle}>
                    NEW
                  </Tag>
                )}
              </Box>
              <Box>
                {jobData.featured && (
                  <Tag
                    variant="solid"
                    {...JobFeatureTagStyle}
                    backgroundColor="brand.500"
                  >
                    FEATURED
                  </Tag>
                )}
              </Box>
            </HStack>
            <HStack>
              <Box fontSize="18px" color="primary.100" fontWeight="bold">
                {jobData.position}
              </Box>
            </HStack>
            <HStack fontSize="15px">
              <Box color="brand.300">{jobData.postedAt}</Box>
              <Dot />
              <Box color="brand.300">{jobData.type}</Box>
              <Dot />
              <Box color="brand.300">{jobData.location}</Box>
            </HStack>
          </VStack>
        </Box>
      </HStack>
      <HStack flexWrap="wrap">
        <Tag {...JobFilterTagStyle} onClick={() => onTagAdd(jobData.role)}>
          {jobData.role}
        </Tag>
        <Tag {...JobFilterTagStyle} onClick={() => onTagAdd(jobData.level)}>
          {jobData.level}
        </Tag>
        {jobData.tags.map((tag, i) => (
          <Tag
            {...JobFilterTagStyle}
            onClick={() => onTagAdd(tag)}
            key={`${tag}-${i}`}
          >
            {tag}
          </Tag>
        ))}
      </HStack>
    </HStack>
  );
};
