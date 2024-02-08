import { useEffect, useRef, useState } from "react";

function FileInput({ value, onChange }) {
  const inputRef = useRef();
  const [preview, setPreview] = useState();

  const handleChange = (e) => {
    const { name } = e.target;
    const fileValue = e.target.files[0];

    onChange(name, fileValue);
  };

  const handleClearClick = (e) => {
    e.preventDefault();
    const node = inputRef.current;
    if (!node) return;

    onChange(node.name, null);
  };

  useEffect(() => {
    console.log("Mount");
    let nextPreview;

    if (value instanceof Blob || value instanceof File) {
      nextPreview = URL.createObjectURL(value);
    } else {
      nextPreview = value;
    }

    setPreview(nextPreview);

    return () => {
      console.log("unMount!!");
      setPreview();
      URL.revokeObjectURL(value);
    };
  }, [value]);

  // 비제어 컴포넌트
  return (
    <div>
      <img width={400} height={300} src={preview} alt="미리보기"></img>
      <input
        accept="image/png, image/jpeg"
        name="imgFile"
        type="file"
        onChange={handleChange}
        ref={inputRef}
      ></input>
      <button onClick={handleClearClick}>X</button>
    </div>
  );
}

export default FileInput;
