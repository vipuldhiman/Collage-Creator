import { render, screen } from '@testing-library/react';
import Collage from '../components/Collage';

test('renders images in collage', () => {
    const images = [
        { src: 'image1.jpg', id: 1 },
        { src: 'image2.jpg', id: 2 }
    ];
    
    render(<Collage images={images} layout="grid" />);
    
    const imageElements = screen.getAllByRole('img');
    expect(imageElements.length).toBe(2);
});