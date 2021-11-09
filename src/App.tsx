import './styles/styles.sass'

import Header from './components/layout/header';
import ReadingsContainer from './components/readings/readingsContainer/readingsContainer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ReadingsContainer></ReadingsContainer>
    </div>
  );
}

export default App;
