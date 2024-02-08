export async function getReviews({ order = "createdAt", limit, offset = 0 }) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;

  const response = await fetch(
    `https://learn.codeit.kr/5833/film-reviews?${query}`
  );

  if (!response.ok) {
    throw new Error("리뷰를 불러오는데 실패하였습니다.");
  }

  const body = await response.json();

  return body;
}

export async function createReviews(formdata) {
  const response = await fetch("https://learn.codeit.kr/5833/film-reviews", {
    method: "POST",
    body: formdata,
  });

  if (!response.ok) {
    throw new Error("리뷰를 작성하는데 실패하였습니다.");
  }

  const body = response.json();

  return body;
}

export async function updateReview(id, formdata) {
  const response = await fetch(
    `https://learn.codeit.kr/5833/film-reviews/${id}}`,
    {
      method: "PUT",
      body: formdata,
    }
  );

  if (!response.ok) {
    throw new Error("리뷰를 작성하는데 실패하였습니다.");
  }

  const body = response.json();

  return body;
}

export async function deleteReview(id) {
  const response = await fetch(
    `https://learn.codeit.kr/5833/film-reviews/${id}}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("리뷰를 작성하는데 실패하였습니다.");
  }

  const body = response.json();

  return body;
}
