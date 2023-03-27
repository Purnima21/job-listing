import React, { useState, useEffect, useCallback } from "react";
import { EachJob } from "./EachJob/EachJob";
import { SearchBar } from "./SearchBar";
import { getJobs } from "../service/jobService";

export const Dashboard = () => {
  const [jobDatas, setJobDatas] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const jobs = getJobs();
    setJobDatas(jobs);
  }, []);

  const onTagChange = useCallback((tags) => {
    setSelectedTags(tags);
  }, []);

  const onTagAdd = useCallback(
    (tag) => {
      setSelectedTags([...selectedTags, tag]);
    },
    [selectedTags]
  );

  useEffect(() => {
    const filteredJob = getJobs(selectedTags);
    setJobDatas(filteredJob);
  }, [selectedTags]);

  return (
    <div>
      <SearchBar onTagChange={onTagChange} tags={selectedTags} />
      {jobDatas.map((jobData) => (
        <EachJob jobData={jobData} onTagAdd={onTagAdd} key={jobData.id} />
      ))}
    </div>
  );
};
