import { useState } from "react";
import "./ReviewForm.css";
import FileInput from "./FileInput";
import Rating from "./Rating";

function ReviewForm() {
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
    imgUrl: null,
  });

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

  return (
    <>
      <h2>리뷰 작성</h2>
      <form className="ReviewForm">
        <Rating value={values.rating} onHover={handleChange}></Rating>
        <FileInput value={values.imgUrl} onChange={handleChange}></FileInput>
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
      </form>
    </>
  );
}

export default ReviewForm;
