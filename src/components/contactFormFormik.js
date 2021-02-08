import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CustomSelect from "./CustomSelect";

const ContactFormFormik = ({ data }) => {
  const [count, setCount] = useState(100);
  const categoriesName = data.map((c) => ({
    id: c.categoryId,
    value: c.name,
    label: c.name,
  }));

  const [subcategories, setSubCategories] = useState();

  const validate = (values) => {
    const errors = {};
    var letters = /^[A-Za-z]+$/;
    var phone = /^\d{10}$/;
    var email = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(spitogatos|spitogatos)\.gr$/g;

    if (!values.fullName) {
      errors.fullName = "Required";
    } else if (!values.fullName.match(letters)) {
      errors.fullName = "Must be letters";
    }

    if (!values.message) {
      errors.message = "Required";
    } else if (values.message.length >= 100) {
      errors.message = "Must be 100 characters or less";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (!values.phone.match(phone)) {
      errors.phone = "invalid phone";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!values.email.match(email)) {
      errors.email = "Invalid email address";
    }

    if (!values.option1) {
      errors.option1 = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      fullName: " ",
      email: "",
      phone: " ",
      message: " ",
      option1: false,
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
    onChange: (values) => {
      console.log("this run");
      console.log(values);
    },
  });

  useEffect(() => {
    const sub = data.filter(
      (c) => c.name === formik.values.category && c.subCategories
    );
    if (sub.length) {
      const SubCategories = sub[0].subCategories.map((c) => ({
        id: c.subCategoryId,
        value: c.name,
        label: c.name,
      }));
      setSubCategories(SubCategories);
    } else {
      setSubCategories([]);
    }
  }, [formik.values.category]);

  const handleOnchange = (e) => {
    if (e.target.name === "message") {
      const charCount = e.target.value.length;
      const charLeft = 100 - charCount;
      setCount(charLeft);
    }
  };

  return (
    <>
      <form
        onChange={(e) => handleOnchange(e)}
        className="row px-5"
        onSubmit={formik.handleSubmit}
      >
        <div className="col-12">
          <div className="label">
            <label htmlFor="fullName">Full name</label>
          </div>
          <input
            id="fullName"
            name="fullName"
            type="fullName"
            className="form-control rounded-xl py-5"
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
          {formik.errors.email ? (
            <div className="text-right mr-6 small font-weight-light">
              {formik.errors.fullName}
            </div>
          ) : (
            <div className="text-right mr-6 small font-weight-light">
              Help text
            </div>
          )}
        </div>
        <div className="col-12">
          <div className="label">
            <label htmlFor="message">message</label>
          </div>
          <textarea
            id="message"
            name="message"
            className="form-control rounded-xl py-5"
            onChange={formik.handleChange}
            value={formik.values.message}
          />

          {formik.errors.message ? (
            <div className="text-right mr-6 small font-weight-light">
              {formik.errors.message}
            </div>
          ) : (
            <div className="text-right mr-6 small font-weight-light">
              {count}
            </div>
          )}
        </div>

        <div className="col-12">
          <div className="label">
            <label htmlFor="phone">Phone</label>
          </div>
          <input
            id="phone"
            name="phone"
            type="phone"
            className="form-control rounded-xl py-5"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.phone ? (
            <div className="text-right mr-6 small font-weight-light">
              {formik.errors.phone}
            </div>
          ) : (
            <div className="text-right mr-6 small font-weight-light">
              Help text
            </div>
          )}
        </div>

        <div className="col-12">
          <div className="label">
            <label htmlFor="email">Email Address</label>
          </div>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control rounded-xl py-5"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="text-right mr-6 small font-weight-light">
              {formik.errors.email}
            </div>
          ) : (
            <div className="text-right mr-6 small font-weight-light"></div>
          )}
        </div>

        <div className="col-12 col-md-6">
          <div className="label">
            <label htmlFor="category">category</label>
          </div>
          <CustomSelect
            className="input"
            onChange={(value) => formik.setFieldValue("category", value.value)}
            value={formik.values.category}
            options={categoriesName}
          />
          {formik.errors.category ? (
            <div className="text-right mr-6 small font-weight-light">
              {formik.errors.category}
            </div>
          ) : (
            <div className="text-right mr-6 small font-weight-light">
              Help text
            </div>
          )}
        </div>

        <div className="col-12 col-md-6">
          <div className="label">
            <label htmlFor="category">sub category</label>
          </div>
          <CustomSelect
            className="input"
            onChange={(value) =>
              formik.setFieldValue("subcategory", value.value)
            }
            value={formik.values.subcategory}
            options={subcategories}
          />
          {formik.errors.subcategory ? (
            <div className="text-right mr-6 small font-weight-light">
              {formik.errors.subcategory}
            </div>
          ) : (
            <div className="text-right mr-6 small font-weight-light">
              Help text
            </div>
          )}
        </div>

        <div className="col-12 font-weight-light">
          Please select at least one of the following:
        </div>

        <div className="col-12 col-md-6 col-lg-6  d-flex justify-content-between pl-6 py-6">
          <div>
            <div className="d-flex">
              <label className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="custom-control-input"
                  name="option1"
                  onChange={formik.handleChange}
                  value={formik.values.option1}
                />
                <span className="custom-control-indicator"></span>
                <span className="custom-control-label">option 1</span>
              </label>
            </div>
            {formik.errors.option1 ? (
              <div className="text-right mr-6 small font-weight-light">
                {formik.errors.option1}
              </div>
            ) : (
              <div className="text-right mr-6 small font-weight-light">
                Help text
              </div>
            )}
          </div>
          <div className="d-flex">
            <label className="custom-control custom-checkbox">
              <input
                type="checkbox"
                id="checkbox"
                className="custom-control-input"
              />
              <span className="custom-control-indicator"></span>
              <span className="custom-control-label">option 2</span>
            </label>
          </div>
        </div>

        <div className="col-12">
          <button className="btn-spitogatos btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactFormFormik;
