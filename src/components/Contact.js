import React, { useState} from 'react';
import {validEmail} from '../Regex';
import emailjs from 'emailjs-com';



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

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_b91z437', 'template_pg70j9r', e.target, 'user_H0LOmS8jHwydl0Rrlrkcw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return (
       <div className="contact-container">
           <h1>
               Contact Me 
           </h1>
           {/* <form>
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
          {emailErr && <p>Your email is invalid</p>} */}
          {/* {pwdError && <p>Your password is invalid</p>} */}

            <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto form">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                    </div>
                    <br></br>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email Address" name="email"
                        />
                    </div>
                    <br></br>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                    </div>
                    <br></br>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" onClick={validate} className="btn btn-info" value="Send Message"></input>
                    </div>
                </div>
                {/* {emailErr && <p>Your email is invalid</p>} */}
            </form>

        </div>
    )
};

export default Contact; 
