import './App.css';
import components from './lib/components';
const {TranslatorWidget} = components;

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
