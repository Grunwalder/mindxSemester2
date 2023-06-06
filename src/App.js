
import './App.css';
import Index from './components/index'



function App() {
  const toDoItem =[ {
    todoName: "takeout",
    
    status: true,
  },
  {
    todoName: "takeout",
    
    status: false,
  },
  {
    todoName: "takeout",
    
    status: true,
  }

]

  
  return (
    <div className="App">
      
      <Index todo={toDoItem}/>

    </div>
  );
}

export default App;
