import './App.css';
import TranslatorWidget from './lib';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TranslatorWidget sourceLanguageCode="en" />
      </header>
    </div>
  );
}

export default App;
