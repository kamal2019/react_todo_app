import React,{useState} from 'react'

function TodoForm() {
    const [input, setInput] = useState('');

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault();
        setInput('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='todo-form'>
                <input type='text' placeholder='Add a todo' value={input} name='text' onChange={handleChange}/>
                <button className='todo-button'>Add todo</button>
            </form>
        </div>
    )
}

export default TodoForm
