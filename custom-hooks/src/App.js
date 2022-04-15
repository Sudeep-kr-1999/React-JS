
import './App.css';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import UserForm from './components/UserForm';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';

function App() {
  return (
    <div className="App">
      <DocTitleOne/>
      <DocTitleTwo/>
      <Counter1/>
      <Counter2/>
      <UserForm/>
    </div>
  );
}

export default App;
