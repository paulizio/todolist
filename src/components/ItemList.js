import React from 'react';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert, AlertTitle } from '@material-ui/lab';
import {useDispatch,useSelector} from 'react-redux'
import { toggleClicked,removeItem } from '../reducers/itemReducer';
const ItemList=({remove,setRemove,clicked,setClicked})=>{
const[done,setDone]=React.useState(false);
const items = useSelector(state => state)
console.log('items:',items)
const dispatch = useDispatch() 
 

const handleClick = id=> (
  dispatch(toggleClicked(id))

)
    
      const handleDelete = id => {
        dispatch(removeItem(id))
        setRemove(true)
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setRemove(false)
    setDone(false);
  }

    return(
<div>
    {items.map(item=><ul key={item.id}><Chip variant='outlined'  style={item.clicked?{borderColor:'green'}:null}   key={item.id} label={item.content} icon={item.clicked?<DoneIcon/>:null} onClick={()=>handleClick(item.id)} onDelete={()=>handleDelete(item.id)}/></ul>)}
<Snackbar open={done} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={clicked?"info":"warning"}>
         Item has been marked done
        </Alert>
      </Snackbar>
      <Snackbar open={remove} autoHideDuration={3000} onClose={handleClose}>
      <Alert severity="error" >
  <AlertTitle>Warning</AlertTitle>
  This is an info alert — <strong>check it out!</strong>
</Alert>
</Snackbar>
</div>
    )
}

export default ItemList