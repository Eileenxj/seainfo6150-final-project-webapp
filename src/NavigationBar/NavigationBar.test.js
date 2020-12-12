import React from "react";
import { render } from "@testing-library/react";
import NavigationBar from "./NavigationBar.jsx";

it("renders the navigationBar component correctly", () => {
    const { container } = render(<NavigationBar/>);
    expect(container).toMatchSnapshot();
  });