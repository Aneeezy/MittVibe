import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AddPostButton from "./AddPostButton";
import { Router } from "wouter";

describe("AddPostButton", () => {
  it("renders a + button", () => {
    render(
      <Router>
        <AddPostButton />
      </Router>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("+");
  });
});