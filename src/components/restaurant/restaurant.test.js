import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Restaurant from "./restaurant";
import RestaurantList from "../restaurant-list";
import { restaurants } from "../../fixtures";
// import {  }
Enzyme.configure({ adapter: new Adapter() });

describe("Restaurant menu tests", function() {
  it("should show and hide restaurant menu on click toggle button", function() {
    const wrapper = mount(
      <Restaurant
        restaurant={restaurants[0]}
        isMenuOpen={false}
        // toggleOpenMenu={toggleOpen}
      />
    );
    // expect(wrapper.find("List").length).toEqual(1);
    // wrapper
    //     .find(`button[data-autoid="OPEN_MENU_ITEM_${restaurants[0].id}"]`)
    //     .simulate("click");
    // expect(true).toEqual(true);
  });
});
