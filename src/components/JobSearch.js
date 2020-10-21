import React from 'react';

const JobSearch = ({ params, searchJobs }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search jobs"
        name="description"
        value={params.description}
        onChange={searchJobs}
      />
      <input
        type="text"
        placeholder="Search by location"
        name="location"
        value={params.location}
        onChange={searchJobs}
      />
      <div className="check">
        <label htmlFor="full_time">Only Full time</label>
        <input
          type="checkbox"
          name="full_time"
          value={params.full_time}
          id="full_time"
          onChange={searchJobs}
        />
      </div>
    </form>
  );
};

export default JobSearch;
