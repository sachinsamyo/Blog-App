import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import blogs from "../Common/BlogData";

export default function BlogsForm(props) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="row py-5">
        <div className="col-lg-12">
          <Formik
            initialValues={{
              title: "",
              context: "",
            }}
            validationSchema={yup.object().shape({
              title: yup.string().required("Please Enter "),
              context: yup.string().required("Please Enter "),
            })}
            onSubmit={(value) => {
              value = {
                title: value.title,
                context: value.context,
                key: blogs.length,
                date: Date(),
              };
              blogs.push(value);

              navigate("/");
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form className="row">
                <div className="form-group col-sm-12 my-2">
                  <label htmlFor="title">Title</label>
                  <Field
                    type="text"
                    name="title"
                    placeholder="Enter title"
                    className={`form-control col-12 p-2 ${
                      touched.title && errors.title ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="title"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group col-sm-12 my-2">
                  <label htmlFor="context">Context</label>
                  <Field
                    type="text"
                    name="context"
                    as="textarea"
                    cols="30"
                    rows="10"
                    placeholder="Enter Your context"
                    className={`form-control col-sm-12 p-2 ${
                      touched.context && errors.context ? "is-invalid" : ""
                    }`}
                  />

                  <ErrorMessage
                    component="div"
                    name="context"
                    className="invalid-feedback"
                  />
                </div>

                <div className="col-12 ">
                  <div className="col-12 py-3">
                    <button
                      type="submit"
                      className="btn btn-success btn-block "
                    >SUbmit Blog</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
