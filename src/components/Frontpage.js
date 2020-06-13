import React,{useState} from 'react'
import Button from '@material-ui/core/Button'
const Frontpage=()=>{

    const [list,setList]=useState([])
    const [input,setInput]=useState('')
    const addItem=(event)=>{
        setList(list.concat(event.target.value))}
    return(
<form onSubmit={addItem}>
    <p>Add item</p>
<input type="text" />
<Button>Submit</Button>
</form>
    )
}

export default Frontpage