import { render, screen, fireEvent } from '@testing-library/react';
import CollageOptions from '../components/CollageOptions';

test('renders layout selection buttons', () => {
    render(<CollageOptions onLayoutChange={() => {}} />);
    
    const gridButton = screen.getByText(/Grid/i);
    const verticalButton = screen.getByText(/Vertical/i);
    const horizontalButton = screen.getByText(/Horizontal/i);

    expect(gridButton).toBeInTheDocument();
    expect(verticalButton).toBeInTheDocument();
    expect(horizontalButton).toBeInTheDocument();
});

test('selects a layout when clicked', () => {
    const mockHandleLayout = jest.fn();
    render(<CollageOptions onSelectLayout={mockHandleLayout} />);

    const gridButton = screen.getByText(/Grid Layout/i);
    fireEvent.click(gridButton);

    expect(mockHandleLayout).toHaveBeenCalledWith('grid');
});