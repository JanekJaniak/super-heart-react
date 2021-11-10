import './styles/styles.sass'

import Header from './components/layout/header';
import ReadingsContainer from './components/readings/readingsContainer/readingsContainer';
import ReadingsList from './components/readings/readingsList/readingsList';

function App() {
  return (
    <div className="App">
      <Header />
      <ReadingsContainer>
        <ReadingsList></ReadingsList>
      </ReadingsContainer>
    </div>
  );
}

export default App;
