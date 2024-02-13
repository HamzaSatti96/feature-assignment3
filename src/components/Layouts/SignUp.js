import React, { useState } from 'react';
import { database } from '../FirebaseConfig';
import 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
export default function SignUp(props) {
// const [myStyle,SetmyStyle] = useState({

//     width: '50%',
//     margin: 'auto',
//     padding: '20px',
//     border: '2px solid black',
//     borderRadius: '10px',
//     backgroundColor: 'lightgrey',
//   });
  // const [text,setText] = useState("Enable Dark Mode");
  const [Email, setEmail] = useState('Enter Email');
  const [Password, setPassword] = useState('Enter Password');
  const [error, setError] = useState(null);

let myStyle={
  color:props.mode==='dark'?'white':'black',
  backgroundColor:props.mode==='dark'?'black':'lightgrey',
       width: '50%',
        margin: 'auto',
        padding: '20px',
        border: '2px solid black',
        borderRadius: '10px',
}
  // const toogleStyle =()=>{
  //   if(myStyle.backgroundColor === 'lightgrey'){
  //     SetmyStyle({
  //       width: '50%',
  //       margin: 'auto',
  //       padding: '20px',
  //       border: '2px solid black',
  //       borderRadius: '10px',
  //       backgroundColor: 'black',
  //       color: 'white',
  //     });
  //     setText("Enable Light Mode");
  //   }
  //   else{
  //     SetmyStyle({
  //       width: '50%',
  //       margin: 'auto',
  //       padding: '20px',
  //       border: '2px solid black',
  //       borderRadius: '10px',
  //       backgroundColor: 'lightgrey',
  //     });
  //     setText("Enable Dark Mode");
  //   }
  // }

  const handlesubmit = (e) => {
    console.log(Email);
    console.log(Password);

    // createUserWithEmailAndPassword(database, Email, Password).then(
    //   (userCredential) => {
    //     // Signed in
    //     // const user = userCredential.user;
    //     console.log(userCredential, 'user created');
    //     // ...
    //   }
    // );
    e.preventDefault();
    createUserWithEmailAndPassword(database, Email, Password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log('User signed up:', user);
    })
    .catch((error) => {
      // Handle errors here
      setError(error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Sign up error:', errorCode, errorMessage);
      // Update state or show error message to the user
    });
  };
  const onClick = () => {
    setEmail('');
  };
  const handleEmailChange = (e) => {
    var val1 = setEmail(e.target.value);
    console.log(val1);
  };
  const handlePasswordChange = (e) => {
    let val = setPassword(e.target.value);
    console.log(val);
  };
  const PasswordOnClick = () => {
    setPassword('');
  };
  return (
    <>
    <form onSubmit={handlesubmit}  style={myStyle}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder={Email}
          onChange={handleEmailChange}
          onClick={onClick}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder={Password}
          onChange={handlePasswordChange}
          onClick={PasswordOnClick}
        />
      </div>
      <br></br>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
       {error && <p>{error}</p>}
    </form>
    <div className="container my-2">
    {/* <button type="submit" className="btn btn-primary"  onClick={toogleStyle}> {text}</button> */}
  </div>
  </>
  );
}
