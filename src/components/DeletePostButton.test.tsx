import { render, screen, fireEvent } from "@testing-library/react";
import DeletePostButton from "./DeletePostButton";

test("calls onDelete with correct post ID when clicked", () => {
  const mockDelete = vi.fn();
  const postId = 42;

  render(<DeletePostButton postId={postId} onDelete={mockDelete} />);
  
  const button = screen.getByRole("button", { name: /delete post/i });
  fireEvent.click(button);

  expect(mockDelete).toHaveBeenCalledWith(42);
});