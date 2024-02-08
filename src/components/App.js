import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main";
import ReviewForm from "./ReviewForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route
          path="/review"
          element={<ReviewForm name="create">리뷰작성</ReviewForm>}
        />
        <Route
          path="/update"
          element={<ReviewForm name="update">리뷰수정</ReviewForm>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
