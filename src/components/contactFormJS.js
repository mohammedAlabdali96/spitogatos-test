import React, { useState } from "react";
import CustomSelect from "./CustomSelect";

const ContactFormJS = ({ data }) => {
  const [count, setCount] = useState(100);
  const categoriesName = data.map((c) => ({
    id: c.categoryId,
    value: c.name,
    label: c.name,
  }));

  const [subcategories, setSubCategories] = useState();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
    categories: [],
    subcategory: [],
    option1: false,
  });

  const [formDataErr, setFormDataErr] = useState({
    fullNameErr: "required",
    phone: "required",
    email: "required",
    message: "",
    categories: "",
    subcategory: "",
    option1: "required",
  });

  var letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
  var phone = /^\d{10}$/;
  var email = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(spitogatos|spitogatos)\.gr$/g;



  const handleChangeField = (e, name) => {
    if (name === "fullName") {
      if (!e.target.value) {
        setFormDataErr({ ...formDataErr, fullNameErr: "Required" });
      } else if (!e.target.value.match(letters)) {
        setFormDataErr({ ...formDataErr, fullNameErr: "Must be letters" });
      } else {
        setFormData({ fullName: e.target.value });
        setFormDataErr({ ...formDataErr, fullNameErr: "Help text" });
      }
    }

    if (name === "phone") {
      if (!e.target.value) {
        setFormDataErr({ ...formDataErr, phone: "Required" });
      } else if (!e.target.value.match(phone)) {
        setFormDataErr({ ...formDataErr, phone: "invalid phone" });
      } else {
        setFormData({ phone: e.target.value });
        setFormDataErr({ ...formDataErr, phone: "Help text" });
      }
    }

    if (name === "email") {
      if (!e.target.value) {
        setFormDataErr({ ...formDataErr, email: "Required" });
      } else if (!e.target.value.match(email)) {
        setFormDataErr({ ...formDataErr, email: "invalid email" });
      } else {
        setFormData({ email: e.target.value });
        setFormDataErr({ ...formDataErr, email: "Help text" });
      }
    }

    if (name === "message") {
      const charCount = e.target.value.length;
      const charLeft = 100 - charCount;
      setCount(charLeft);
      if(charLeft === 0) {
        setFormDataErr({...formDataErr, message: "Must be less than 100 letter"})
      }else if(charLeft >0) {
        setFormDataErr({...formDataErr, message: ""})
      }
    }
  };


  const handleOnClickCheckbox = (e) => {
    setFormData({ option1: !formData.option1 });
    if (!formData.option1) {
      setFormDataErr({ ...formDataErr, option1: "Help text" });
    } else setFormDataErr({ ...formDataErr, option1: "required" });
  };


  const handleSelectChange = (value, name) => {
    if (name === "categories") {
      setFormData({ categories: value });
      const sub = data.filter((c) => c.name === value.value && c.subCategories);
      if (sub.length) {
        const SubCategories = sub[0].subCategories.map((c) => ({
          id: c.subCategoryId,
          value: c.name,
          label: c.name,
        }));
        setSubCategories(SubCategories);

        setFormDataErr({ ...formDataErr, subcategory: "" });


      } else {
        setSubCategories([]);
        setFormDataErr({ ...formDataErr, subcategory: "no subcategories for this category" });

      }
    }

    if (name === "subcategories") {
      setFormData({ subcategory: value });
      setFormDataErr({ ...formDataErr, subcategory: "" });
    }
  }



  return (
    <>
      <form
        className="row px-5"
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
            onChange={(event) => handleChangeField(event, "fullName")}
          />

          {formDataErr.fullNameErr ? (
            <div className="text-right mr-6 small font-weight-light">
              {formDataErr.fullNameErr}
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
                onChange={(event) => handleChangeField(event, "message")}
            />

            {formDataErr.message ? (
                <div className="text-right mr-6 small font-weight-light">
                    {formDataErr.message}
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
            onChange={(event) => handleChangeField(event, "phone")}
          />
          {formDataErr.phone ? (
            <div className="text-right mr-6 small font-weight-light">
              {formDataErr.phone}
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
            onChange={(event) => handleChangeField(event, "email")}
          />
          {formDataErr.email ? (
            <div className="text-right mr-6 small font-weight-light">
              {formDataErr.email}
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
            onChange={(value) => handleSelectChange(value, "categories")}
            value={formData.category}
            options={categoriesName}
          />
          {formDataErr.categories ? (
            <div className="text-right mr-6 small font-weight-light">
              {formDataErr.categories}
            </div>
          ) : (
            <div className="text-right mr-6 small font-weight-light">
              Help text
            </div>
          )}
        </div>

        <div className="col-12 col-md-6">
          <div className="label">
            <label htmlFor="subcategory">sub category</label>
          </div>
          <CustomSelect
            className="input"
            onChange={(value) => handleSelectChange(value, "subcategory")}
            value={formData.subcategory}
            options={subcategories? subcategories: [{id:1, value: "select", label: "select"}]}
          />
          {formDataErr.subcategory ? (
            <div className="text-right mr-6 small font-weight-light">
              {formDataErr.subcategory}
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
                  // onChange={(event) => handleChangeField(event, "option1")}
                  onClick={(e) => handleOnClickCheckbox(e)}
                  value={formData.option1}
                />
                <span className="custom-control-indicator"></span>
                <span className="custom-control-label">option 1</span>
              </label>
            </div>
            {formDataErr.option1 ? (
              <div className="text-right mr-6 small font-weight-light">
                {formDataErr.option1}
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

        <div className="col-12 text-center">
          <button className="btn-spitogatos btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactFormJS;
