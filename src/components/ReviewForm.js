import { useState } from "react";
import "./ReviewForm.css";
import FileInput from "./FileInput";
import Rating from "./Rating";
import { createReviews } from "../api";
import { useLocation, useNavigate } from "react-router-dom";

const INITLAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null,
};

function ReviewForm({ children }) {
  const location = useLocation();
  const [values, setValues] = useState(
    location.state === null ? INITLAL_VALUES : { ...location.state }
  );
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isError, setIsError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", values.title);
    formdata.append("rating", values.rating);
    formdata.append("content", values.content);
    formdata.append("imgFile", values.imgFile);

    try {
      setIsSubmiting(true);
      await createReviews(formdata);
    } catch (err) {
      setIsError(err);
      return;
    } finally {
      setIsSubmiting(false);
    }

    setValues(INITLAL_VALUES);
    navigate("/");
  };

  return (
    <>
      <h2>{children}</h2>
      <form onSubmit={handleSubmit} className="ReviewForm">
        <Rating value={values.rating} onHover={handleChange}></Rating>
        <FileInput value={values.imgFile} onChange={handleChange}></FileInput>
        <input
          name="title"
          value={values.title}
          onChange={handleInputChange}
        ></input>
        <input
          name="rating"
          value={values.rating}
          onChange={handleInputChange}
        ></input>
        <textarea
          name="content"
          value={values.content}
          onChange={handleInputChange}
        ></textarea>
        <button disabled={isSubmiting} type="submit">
          리뷰 작성 완료
        </button>
      </form>
      {isError && <div>{isError.message}</div>}
    </>
  );
}

export default ReviewForm;
