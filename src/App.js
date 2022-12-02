import './App.css'
import Article from './Article'

const App = () => {
    const baseText = 'Lorem Ipsum Dolor Amet Version 2'
    return (
        <div className='App'>
            <section className='App-body'>
                <section>
                    <Article content={baseText} />
                    <a
                        className='App-link'
                        href='https://github.com/nidnogg/fetchly-snapshot-testing'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Tutorial
                    </a>
                </section>
            </section>
        </div>
    )
}

export default App
