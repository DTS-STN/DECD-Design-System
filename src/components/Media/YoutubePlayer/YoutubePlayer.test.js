/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { axe, toHaveNoViolations } from "jest-axe";
import { Youtube } from "./YoutubePlayer.stories.js";

expect.extend(toHaveNoViolations);

describe("Audio Player", () => {
  it("has no a11y violations", async () => {
    const { container } = render(<Youtube {...Youtube.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
