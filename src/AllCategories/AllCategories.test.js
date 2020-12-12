import React from "react";
import { render } from "@testing-library/react";
import AllCategories from "./AllCategories.jsx";
const categories = [
    "breakfast",
    "brunch",
    "lunch",
    "main-course",
    "side-dish",
    "dinner"
    ];
it("renders the AllCategories component correctly", () => {
    const { container } = render(<AllCategories categories={categories}/>);
    expect(container).toMatchSnapshot();
  });