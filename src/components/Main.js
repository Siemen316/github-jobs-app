import React, { useState } from 'react';
import useFetch from '../useFetch';
import spinner from '../assets/spinner.gif';
import JobCardList from './JobCardList';
import JobSearch from './JobSearch';

const Main = () => {
  const [params, setParms] = useState({});
  const { jobs, isLoading, error } = useFetch(params);

  const searchJobs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setParms((prevParams) => {
      return { ...prevParams, [name]: value };
    });
  };

  return (
    <div className="card">
      <JobSearch params={params} searchJobs={searchJobs} />
      {isLoading ? (
        <>
          <img src={spinner} alt="" />
        </>
      ) : (
        jobs.map((job) => <JobCardList key={job.id} job={job} />)
      )}

      {error ? <h1>ERORR!</h1> : null}
    </div>
  );
};

export default Main;
