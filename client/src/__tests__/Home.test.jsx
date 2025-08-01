import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home.jsx";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("Home Page", () => {
  it("renders welcome text", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});
