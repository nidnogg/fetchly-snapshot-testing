import './App.css';
import Header from './Header'

const App = () => {
  return (
    <div className="App">
      <section className="App-body">
        <Header />
        <section>
          <p>
            This small app tests the header changes that happen whenever the user clicks the button.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tutorial
          </a>
        </section>
      </section>
    </div>
  );
}

export default App;
