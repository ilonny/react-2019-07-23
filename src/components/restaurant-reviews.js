import React /*useState*/ from "react";
import { useToggle } from "../custom-hooks/use-toggle";
import RestaurantReview from "./review";
function RestaurantReviews(props) {
  const [isOpen, toggleOpen] = useToggle();
  const { restaurant } = props;
  const { reviews } = restaurant;
  const averageRating = (
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  ).toFixed(2);
  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? "Hide reviews" : "Show reviews"}
      </button>
      {isOpen && (
        <div>
          <h4>Reviews: {restaurant.reviews.length}</h4>
          {restaurant.reviews.map(review => (
            <RestaurantReview key={review.id} review={review} />
          ))}
          <h3>Average rating: {averageRating}</h3>
        </div>
      )}
    </div>
  );
}

export default RestaurantReviews;
