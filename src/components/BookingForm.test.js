import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm Component", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();
  const mockSubmit = jest.fn();

  test("renders 'Book Your Table' heading", () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const heading = screen.getByText("Book Your Table");
    expect(heading).toBeInTheDocument();
  });

  // Step 1: HTML5 validation attribute tests

  test("First Name input has correct attributes", () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const input = screen.getByLabelText(/first name/i);
    expect(input).toHaveAttribute("type", "text");
    expect(input).toBeRequired();
  });

  test("Last Name input has correct attributes", () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const input = screen.getByLabelText(/last name/i);
    expect(input).toHaveAttribute("type", "text");
    expect(input).toBeRequired();
  });

  test("Date input has correct attributes", () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const input = screen.getByLabelText(/choose date/i);
    expect(input).toHaveAttribute("type", "date");
    expect(input).toBeRequired();
  });

  test("Time select has correct attributes", () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const select = screen.getByLabelText(/choose time/i);
    expect(select).toBeRequired();
  });

  test("Guests input has correct attributes", () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const input = screen.getByLabelText(/number of guests/i);
    expect(input).toHaveAttribute("type", "number");
    expect(input).toHaveAttribute("min", "1");
    expect(input).toHaveAttribute("max", "10");
    expect(input).toBeRequired();
  });

  // Step 2: JavaScript validation behavior tests

  test("Submit button is disabled when form is invalid", () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const button = screen.getByRole("button", { name: /book now/i });
    expect(button).toBeDisabled();
  });

  test("Submit button is enabled when all fields are valid", async () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmit} />);

  // Fill valid values

    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: "Jane" } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: "Smith" } });
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2025-11-15" } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "19:00" } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "2" } });

    const button = screen.getByRole("button", { name: /book now/i });

    await waitFor(() => expect(button).not.toBeDisabled());
  });

  test("Form does not submit when invalid", () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmit} />);
    const button = screen.getByRole("button", { name: /book now/i });
    fireEvent.click(button);
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  test("Form submits correctly when valid", () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} submitForm={mockSubmit} />);

    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: "Jane" } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: "Smith" } });
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2025-11-15" } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "19:00" } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: 2 } });

    const button = screen.getByRole("button", { name: /book now/i });
    fireEvent.click(button);

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      firstName: "Jane",
      lastName: "Smith",
      date: "2025-11-15",
      time: "19:00",
      guest: "2",
      occasion: "None",
    });
  });
});
