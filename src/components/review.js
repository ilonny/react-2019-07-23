import React, { PureComponent } from "react";
import { Rate } from "antd";
class RestaurantReview extends PureComponent {
  render() {
    const { review } = this.props;
    return (
      <div style={{ maxWidth: "500px" }}>
        <Rate
          count={5}
          defaultValue={review.rating}
          disabled
          style={{ float: "left" }}
        />
        <h4
          style={{
            float: "right",
            margin: 0,
            lineHeight: "30px",
            fontStyle: "italic"
          }}
        >
          {review.user}
        </h4>
        <div style={{ clear: "both" }}></div>
        <p>{review.text}</p>
        <hr />
      </div>
    );
  }
}

export default RestaurantReview;
