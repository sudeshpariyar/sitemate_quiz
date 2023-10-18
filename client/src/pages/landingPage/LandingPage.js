import React, { useEffect, useRef, useState } from "react";
import axios from "../../helper/ApiHelper";
import Issue from "../../components/issue/Issue";
import "./landingPage.css";

const LandingPage = () => {
  const [issue, setIssue] = useState([]);
  const [newIssue, setNewIssue] = useState(false);

  const issueTitle = useRef();
  const description = useRef();
  const addIssue = () => {
    setNewIssue(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("issues", {
        title: issueTitle.current,
        description: description.current,
      })
      .then((res) => {
        console.log(res);
        getAllIssue();
        issueTitle.current = "";
        description.current = "";
        setNewIssue(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    getAllIssue();
  }, []);
  const getAllIssue = () => {
    axios
      .get("issues/all")
      .then((res) => {
        console.log(res);
        setIssue(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div>
      <button onClick={addIssue}>Add Issue</button>
      {newIssue && (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Title"
            onChange={(e) => (issueTitle.current = e.target.value)}
          />
          <textarea
            placeholder="Description"
            onChange={(e) => (description.current = e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
      {issue ? (
        issue.map((eachIssue) => (
          <div className="all-issue-wrapper">
            <Issue issueData={eachIssue} />
          </div>
        ))
      ) : (
        <div>No Issue</div>
      )}
    </div>
  );
};

export default LandingPage;
