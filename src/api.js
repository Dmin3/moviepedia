export async function getReviews({ order = "createdAt", limit, offset }) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;

  const response = await fetch(
    `https://learn.codeit.kr/5833/film-reviews?${query}`
  );
  const body = await response.json();

  return body;
}
