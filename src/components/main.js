import { useEffect, useState } from "react";
import { getReviews, deleteReview } from "../api.js";
import ReviewList from "./ReviewList.js";
import { Link } from "react-router-dom";

const LIMIT = 5;

function Main() {
  const [order, setOrder] = useState("createdAt");
  const [items, setItem] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(true);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestRating = () => setOrder("rating");

  // 페이징 처리
  const loadReviews = async (option) => {
    const { reviews, paging } = await getReviews(option);
    option.offset === 0
      ? setItem(reviews)
      : setItem((prevItems) => [...prevItems, ...reviews]);

    setOffset(option.offset + option.limit);
    setHasNext(paging.hasNext);
  };

  // 더 불러오기
  const loadMoreReviews = async () => {
    await loadReviews({ order, offset, limit: LIMIT });
  };

  // 삭제
  const handleDelete = async (id) => {
    const isConfirm = window.confirm("정말 삭제하시겠습니까?");

    if (isConfirm === true) {
      const result = await deleteReview(id);
      if (!result) return;
      setItem((prevItems) => prevItems.filter((items) => items.id !== id));
    } else {
      return;
    }
  };

  useEffect(() => {
    loadReviews({ order, offset: 0, limit: LIMIT });
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestRating}>베스트순</button>
        <Link to="/review">리뷰 작성하기</Link>
      </div>
      <ReviewList onDelete={handleDelete} items={sortedItems}></ReviewList>
      {hasNext && <button onClick={loadMoreReviews}>더 보기</button>}
    </div>
  );
}

export default Main;
