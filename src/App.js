import React,{useState} from 'react';
import './App.css';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

const App=()=>{
	const [open, setOpen] = useState(false);

 
	return(
		<div  className="App">	
			<div >
				<ItemForm setOpen={setOpen} open={open} />
				<ItemList/>
			</div>
		</div>

	);
};

export default App;
