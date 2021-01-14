import React,{useState} from 'react'

function ControlledInputs () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email)
        
    }
    return (
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="name"
              value={name}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              value={email}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default ControlledInputs 
