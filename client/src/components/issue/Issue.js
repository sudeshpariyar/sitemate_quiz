import React, { useRef, useState } from "react";
import "./issue.css";
import axios from "../../helper/ApiHelper";

const Issue = ({ issueData }) => {
  const editTitle = useRef();
  const editDescription = useRef();
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(editTitle.current, editDescription.current);
    axios
      .put(`issues/id/${issueData.uuid}`, {
        title: editTitle.current,
        description: editDescription.current,
      })
      .then((res) => {
        setEdit(!edit);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = (e) => {
    axios
      .delete(`issues/id/${issueData.uuid}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="issue-wrapper">
      {edit ? (
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => (editTitle.currentValue = e.target.value)}
          />
          <label>Description:</label>
          <textarea
            type="text"
            placeholder="Description"
            onChange={(e) => (editDescription.description = e.target.value)}
          />
        </form>
      ) : (
        <div className="list-individual-issue">
          <label>Title:</label>
          <span> {issueData.title}</span>
          <br />
          <label>Description:</label>
          <span> {issueData.description}</span>
        </div>
      )}

      <div className="issue-edit">
        <div className="button-wrappers">
          <button
            className="edit-button"
            onClick={edit ? handleSubmit : handleEdit}
          >
            {edit ? "Submit" : "Edit"}
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Issue;
