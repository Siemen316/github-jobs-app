import React from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const JobCardList = ({ job }) => {
  const [show, setShow] = useState(false);

  const handleBtn = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="cards">
        <div className="details">
          <h2>{job.company}</h2>
          <p>{new Date(job.created_at).toLocaleDateString()}</p>
          <div className="crumbs">
            <p>{job.location}</p>
            <p>{job.title}</p>
          </div>
          <div style={{ wordBreak: 'break-all' }}>
            <ReactMarkdown source={job.how_to_apply} />
          </div>
          <button onClick={handleBtn} className="btn">
            {show ? 'DISABLE' : 'READ MORE'}
          </button>
          <div className={show ? 'show' : 'hide'}>
            <ReactMarkdown source={job.description} />
          </div>
        </div>
        <div className="img">
          <a href={job.company_url}>
            <img src={job.company_logo} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default JobCardList;
