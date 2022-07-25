import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header/header';
import Nav from './Layout/Nav/nav';
import Footer from './Layout/Footer/footer';
import TaskList from './components/TaskList/taskList';



function App() {
  return (
    <div>
      <Header/>
      <div className='body'>
        <Nav/>
        <TaskList/>
        <TaskList/>
      <Footer/>
      </div>
      
    </div>
  );
}

export default App;
