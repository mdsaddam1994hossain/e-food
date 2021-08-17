import React, { useState } from 'react';

const Test = (props) => {

  const [user, setUser] = useState([{name:"",email:""}])

  const handaleSubmit = (e) => {
    if (user.name == ' ' || user.email == ' ') {
      alert('input filed empty')
      return;
    } else
e.preventDefault();
    setUser([...user],{name:user.name,email:user.email})
      console.log(user)
  }



  return (
    <div style={{ margin: "30px" }}>
      <form onSubmit={handaleSubmit} >
        <h4>Name: </h4>
        <input type="text" placeholder="enter Name" name='name' onChange={(e) => setUser({ name: e.target.value, email: user.email })} />
        <h4 style={{ marginTop: "10px" }}>Email:</h4>
        <input type="text" placeholder="enter Email" name="email" onChange={(e) => setUser({ name: user.name, email: e.target.value })} /><br />
        <button type="submit"> submit</button>

      </form>



    </div>
  );
};

export default Test;