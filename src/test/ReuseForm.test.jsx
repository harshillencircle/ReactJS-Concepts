import { fireEvent, render, screen } from "@testing-library/react"
import { vi } from "vitest"
import ReuseForm from "../components/reuseform/ReuseForm"
import '@testing-library/jest-dom';

test('render label, input and button', () => {
    render(<ReuseForm label="Name" onSubmit={() => { }} />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});

test('calls onsubmit with input value and clear input', () => {
    const handleSubmit = vi.fn();
    render(<ReuseForm label="Name" onSubmit={handleSubmit} />);

    const input = screen.getByLabelText(/name/i);
    const button = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(input, { target: { value: 'John Doe' } }); 
    fireEvent.click(button);

    expect(handleSubmit).toHaveBeenCalledWith('John Doe');
    expect(input.value).toBe('');
});

test('does not call onSubmit if input is empty', () => {
    const handleSubmit = vi.fn();
    render(<ReuseForm label="Name" onSubmit={handleSubmit} />);

    const button = screen.getByRole('button', { name: /submit/i });

    fireEvent.click(button);
    expect(handleSubmit).not.toHaveBeenCalled();
});