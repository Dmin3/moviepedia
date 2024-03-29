import { useNavigate } from "react-router-dom";
import Rating from "./Rating";
import "./ReviewList.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete }) {
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    navigate("/update", {
      state: {
        id: `${item.id}}`,
        title: `${item.title}`,
        content: `${item.content}`,
        rating: `${item.rating}`,
        createdAt: `${item.createdAt}`,
        imgFile: `${item.imgUrl}`,
      },
    });
  };

  return (
    <div className="ReviewListItem">
      <img
        className="ReviewListItem-img"
        src={item.imgUrl}
        alt={item.title}
      ></img>
      <div>
        <h1>{item.title}</h1>
        <Rating value={item.rating}></Rating>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleUpdate}>수정</button>
        <button onClick={() => onDelete(item.id)}>삭제</button>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ReviewListItem onDelete={onDelete} item={item}></ReviewListItem>
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
