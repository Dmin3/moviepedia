import { useEffect, useState } from "react";
import { getReviews } from "../api.js";
import ReviewList from "./ReviewList.js";

const LIMIT = 5;

function App() {
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

  useEffect(() => {
    loadReviews({ order, offset, limit: LIMIT });
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestRating}>베스트순</button>
      </div>
      <ReviewList items={sortedItems}></ReviewList>
      {hasNext && <button onClick={loadMoreReviews}>더 보기</button>}
    </div>
  );
}

export default App;
