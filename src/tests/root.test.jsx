import { render, screen } from "@testing-library/react";
import Root from "../routes/root";

test("Navbar displays text", () => {
  render(<Root />);

  const display = screen.getByText("I'm a navBar");

  expect(display.textContent).toBe("I'm a navBar");
});
