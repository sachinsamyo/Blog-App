import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import blogs from "../Common/BlogData";

export default function UpdateBlog() {
  const [inum, setInum] = useState(-1);
  const navigate = useNavigate();
  const DeletePost = (i) => {
    setInum(i);
    console.log("deleted", inum);
    blogs.splice(i, 1);

    navigate("/update");
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <h1>Update Blog</h1>
        <div className="table-responsive">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Info</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((values, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="fw-bold text-primary">{values.title} </td>
                    <td >{values.context} </td>
                    <td className="">
                      <i
                        className="fa-solid fa-trash px-4"
                        onClick={() => {
                          DeletePost(index);
                        }}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
