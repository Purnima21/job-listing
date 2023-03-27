import { jobDummyData } from "../assets/static-job-listings/data";

export const getJobs = (tagFilter = []) => {
  if (tagFilter.length === 0) {
    return jobDummyData;
  }
  const filteredJob = jobDummyData.filter((eachJob) =>
    eachJob.tags.some((item) =>
      tagFilter.some(
        (selectedTag) =>
          selectedTag.toLowerCase() === item.toLowerCase() ||
          (eachJob.role &&
            selectedTag.toLowerCase() === eachJob.role.toLowerCase()) ||
          (eachJob.level &&
            selectedTag.toLowerCase() === eachJob.level.toLowerCase())
      )
    )
  );
  return filteredJob;
};
