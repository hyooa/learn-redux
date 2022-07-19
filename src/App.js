import './App.css';
import CounterContainer from './components/CounterContainer';
import TodosContainer from './components/TodosContainer';

function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <p>ㅡㅡㅡㅡCounterContainerㅡㅡㅡㅡ</p>
      <CounterContainer></CounterContainer>
      <p>ㅡㅡㅡㅡTodosContainerㅡㅡㅡㅡ</p>
      <TodosContainer></TodosContainer>
    </div>
  );
}

export default App;
