import { render, screen, fireEvent } from "@testing-library/react";
import UpdatePostButton from "./UpdatePostButton";
import { vi } from "vitest";

test("shows modal when update button is clicked", () => {
  const mockUpdate = vi.fn();
  const mockPost = {
    id: 1,
    title: "Old Title",
    content: "Old Content",
    location: "Old Location",
  };

  render(<UpdatePostButton post={mockPost} onUpdate={mockUpdate} />);

  const updateButton = screen.getByRole("button", { name: /update/i });
  fireEvent.click(updateButton);

  expect(screen.getByText(/update post/i)).toBeInTheDocument();
});