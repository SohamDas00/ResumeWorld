import React, { useState } from 'react'

const Test = () => {
    const [input,setInput]=useState('');

    const submitForm=(e)=>{
        e.preventDefault()
        console.log("Form Submitted value: ");
        console.log(input);
    }
    const formChange=(e)=>{
        setInput(e.target.value)
    }

  return (
    <div>
        <form onSubmit={submitForm}>
            <label>Enter:-</label>
            <input type="text" placeholder='enter..' value={input} onChange={formChange}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Test