import { render } from "@testing-library/react";
import Button from "./Button";

describe("This is a basic Test", () => {
  it("should render", () => {
    const component = render(<Button />);
    expect(component).toBeTruthy();
  });
});
