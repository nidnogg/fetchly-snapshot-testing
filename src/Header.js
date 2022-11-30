import { useState } from 'react'

const Header = () => {
    const [headerText, setHeaderText] = useState('Change the header text by clicking on the button')
    const toggleHeaderText = () => {
        setHeaderText('Header text changed')
    }
    return (
        <header>
            <h2>{headerText}</h2>
            <button className='App-button' onClick={toggleHeaderText}>Click me</button>
        </header>
    )
}

export default Header