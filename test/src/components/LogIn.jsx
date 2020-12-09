import React,{useState} from 'react'

function LogIn () {
    const [formDetails, setFormDetails] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormDetails({
            ...formDetails, [name]: value
        })
    }
    const submit = (e) => {
        e.preventDefault()
        console.log('formDetails', formDetails)
    } 
    return (
        <div>
            <h1>LogIn</h1>
            <form onSubmit={(e)=> submit(e)}>
                <input type="email" onChange={handleChange} name='email' value={formDetails.email} placeholder="email"/><br/>
                <input type="password" onChange={handleChange} name='password' value={formDetails.password} placeholder="password" /><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default LogIn
