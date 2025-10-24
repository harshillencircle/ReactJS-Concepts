import { fireEvent, screen, render } from "@testing-library/react"
import ToDoTask from "../components/todo/ToDoTask"

test('render input and button', () => {
    render(<ToDoTask />);
    expect(screen.getByPlaceholderText(/add task/i)).toBeInTheDocument();
    expect(screen.getByText(/add/i)).toBeInTheDocument();
});

test('add the task clicking Add', () => {
    render(<ToDoTask />);

    const input = screen.getByPlaceholderText(/add task/i);
    const addButton = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: 'Test Task' } });
    fireEvent.click(addButton);

    const task = screen.getByText('Test Task');
    expect(task).toBeInTheDocument();
});

test('toggle task completion on click', () => {
    render(<ToDoTask />);

    const input = screen.getByPlaceholderText(/add task/i);
    const addButton = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: 'Complete Me' }});
    fireEvent.click(addButton);

    const task = screen.getByText('Complete Me');
    expect(task).toHaveStyle('text-decoration: none');

    fireEvent.click(task);
    expect(task).toHaveStyle('text-decoration: line-through');

    fireEvent.click(task);
    expect(task).toHaveStyle('text-decoration: none');
})