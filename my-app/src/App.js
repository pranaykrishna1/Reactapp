import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
  <>
  <Navbar title="SukhiBhava" aboutText="Vadamma"/>
  <div className="container">
  <TextForm heading="Enter something"></TextForm>
  </div>
  </>
  );
}

export default App;
