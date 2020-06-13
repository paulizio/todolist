import React,{useState} from 'react';
import './App.css';
import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'
import {Container} from '@material-ui/core'
const App=()=>{
  const [item,setItem]=useState('')
  const [open, setOpen] = useState(false);
  const [warning, setWarning] = useState(false);
  const [remove,setRemove]=useState(false);

  return(
    <Container>
    <div>
     <h1>To-do list:</h1>
     <ItemForm  item={item} setItem={setItem} setOpen={setOpen} open={open} warning={warning} setWarning={setWarning} />
     <ItemList  remove={remove} setRemove={setRemove}/>
    </div>
    </Container>
  )
}

export default App;
