import React, { useState} from 'react';
import {validEmail} from '../Regex';




function Contact() {

    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    // const [pwdError, setPwdError] = useState(false);
    const validate = () => {
       if (!validEmail.test(email)) {
          setEmailErr(true);
       }
    //    if (!validPassword.test(password)) {
    //       setPwdError(true);
    //    }
    };
    const cardStyle ={
        height: '90px',
    }
    return (
       <div className="contact-container">
           <h2>
               Contact Me 
           </h2>
           <form>
               <p>Name</p>
                <input
                    type="text"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}      
                />
            </form>
            <label>
               <p>Email</p>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
          {/* <input
             type="password"
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
          /> */}
            <label>
               <p>Message</p>
                <input
                    type="text"
                    style={cardStyle}
                />
            </label>
          <div>
             <button onClick={validate}>Send</button>
          </div>
          {emailErr && <p>Your email is invalid</p>}
          {/* {pwdError && <p>Your password is invalid</p>} */}
       </div>
    )
};

export default Contact; 
