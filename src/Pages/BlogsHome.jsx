import React from "react";
import { Rating } from "@mui/material";


import blogs from "../Common/BlogData";

export default function Blogs() {
  return (
    <div
      className="container-fluid "
      
    >
        
      <div className="container text-start">
        <div className="row">
          {blogs.map((value, i) => {
            const index = i;
            const key = value.key;
           
            return (
              <div className="my-5 blog-block  col-sm-12" key={i}>
                <p className="h3 mt-3 text-primary" index={index} key={key}>
                  {value.title}
                  <Rating className="ms-auto"/>
                </p>
                <p className="text-muted">{value.category}</p>
                <p className="text-muted my-2">{value.date}</p>
                <p className=" my-2">{value.context}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
