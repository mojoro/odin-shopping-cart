import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import Notification from "../../src/components/Notification/Notification";

describe("Notification", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows and hides notification", () => {
    const onHide = vi.fn();

    render(
      <Notification
        message="Test notification"
        isVisible={true}
        onHide={onHide}
      />
    );

    expect(screen.getByText("Test notification")).toBeInTheDocument();
    vi.advanceTimersByTime(2000);
    expect(onHide).toHaveBeenCalled();
  });
});
