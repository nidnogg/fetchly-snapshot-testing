import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    test('change the text to Header text changed after clicking the button', async () => {
        render(<Header />)

        const button = screen.getByRole('button')
        const headerText = screen.getByRole('heading', ('Change the header text by clicking on the button'))

        expect(button).not.toBeDisabled()
        expect(button).toHaveTextContent('Click me')

        fireEvent.click(button)

        expect(headerText).toHaveTextContent('Header text changed')
    })
})