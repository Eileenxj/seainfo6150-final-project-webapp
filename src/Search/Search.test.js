import React from "react";
import { render } from "@testing-library/react";
import Search from "./Search.jsx";

it("renders the Search component correctly", () => {
    const { container } = render(<Search/>);
    expect(container).toMatchSnapshot();
  });