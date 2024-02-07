import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main";
import ReviewForm from "./ReviewForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/review" element={<ReviewForm></ReviewForm>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
