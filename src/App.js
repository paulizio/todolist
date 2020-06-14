import React,{useState} from 'react';
import './App.css';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import {Container} from '@material-ui/core';
const App=()=>{
	const [open, setOpen] = useState(false);

 
	return(
		<div className="App">	
			<div >
    		<Container >
					{/* <h1 className="h1">To-do list</h1>  */}
					<ItemForm setOpen={setOpen} open={open} />
					<div>
						<ItemList/>
					</div>
				</Container>
			</div>
		</div>

	);
};

export default App;
