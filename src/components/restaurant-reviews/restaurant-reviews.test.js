import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RestaurantReviews from "../restaurant-reviews";
import { restaurants } from "../../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("Restaurant review tests", function() {
  it("should render Ant list", function() {
    const wrapper = mount(<RestaurantReviews restaurant={restaurants[0]} />);
    expect(wrapper.find("List").length).toEqual(1);
  });
});
