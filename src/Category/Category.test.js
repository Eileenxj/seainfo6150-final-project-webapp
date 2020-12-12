import React from "react";
import { render } from "@testing-library/react";
import Category from "./Category.jsx";

const categoryId = "brunch"
it("renders the Category component correctly", () => {
    const { container } = render(<Category categoryId={categoryId}/>);
    expect(container).toMatchSnapshot();
  });