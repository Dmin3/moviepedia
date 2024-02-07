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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <h2>리뷰 작성</h2>
      <form onSubmit={handleSubmit} className="ReviewForm">
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
        <button type="submit">리뷰 작성 완료</button>
      </form>
    </>
  );
}

export default ReviewForm;
