import "./Rating.css";

const RATING = [1, 2, 3, 4, 5];

function Star({ selected, onHover, rating }) {
  const className = `Rating-star ${selected ? "selected" : undefined}`;

  return (
    <span
      onMouseOver={onHover && onHover("rating", rating)}
      className={className}
    >
      ★
    </span>
  );
}

function Rating({ value = 0, onHover }) {
  return (
    <div>
      {RATING.map((rating) => {
        return (
          <Star
            key={rating}
            rating={rating}
            selected={value >= rating}
            onHover={onHover}
          ></Star>
        );
      })}
    </div>
  );
}

export default Rating;
