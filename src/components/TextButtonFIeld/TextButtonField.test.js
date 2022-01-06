/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  Primary,
  Secondary,
  Disabled,
  Custom,
} from "./TextButtonField.stories";

expect.extend(toHaveNoViolations);

describe("TextButtonField", () => {
  it("renders the Text field with a button", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(
      Primary.args.buttonText
    );
    expect(screen.getByRole("button")).toHaveClass(
      "py-2 px-4 bg-multi-blue-blue60g text-white border border-multi-blue-blue60g active:bg-multi-blue-blue60c hover:bg-multi-blue-blue60f"
    );
  });

  it("renders the Text field with some text", async () => {
    render(<Primary {...Primary.args} />);
    const text = await screen.findByText("Text");
    expect(text).toBeTruthy();
  });

  it("renders secondary button", () => {
    render(<Secondary {...Secondary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(
      Secondary.args.buttonText
    );
    expect(screen.getByRole("button")).toHaveClass(
      "py-2 px-4 bg-white text-multi-blue-blue60g border border-multi-blue-blue60g active:bg-multi-neutrals-grey85a hover:bg-multi-neutrals-grey40 "
    );
  });

  it("renders disabled button", () => {
    render(<Disabled {...Disabled.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(
      Disabled.args.buttonText
    );
    expect(screen.getByRole("button")).toHaveAttribute("disabled");
  });

  it("renders custom button", () => {
    render(<Custom {...Custom.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(
      Custom.args.buttonText
    );
  });

  it("has no a11y violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
