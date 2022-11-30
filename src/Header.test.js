import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    test('change the text to Header text changed after clicking the button', async () => {
        render(<Header />)

        // First, get elements that will be tested
        const button = screen.getByRole('button')
        const headerText = screen.getByRole('heading', ('Change the header text by clicking on the button'))

        // Checks for clickable button
        expect(button).not.toBeDisabled()

        // Checks for button text content
        expect(button).toHaveTextContent('Click me')

        fireEvent.click(button)

        // Tests for resulting change from button click
        expect(headerText).toHaveTextContent('Header text changed')
    })
})