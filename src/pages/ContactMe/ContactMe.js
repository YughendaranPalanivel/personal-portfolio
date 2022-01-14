import { useEffect } from 'react';
import SendIcon from '@material-ui/icons/Send';
import './ContactMe.css';

var formValues = {
    name: '',
    email: '',
    message: ''
}

const ContactMe = () => {

    const handleSubmit = async(event) => {
        event.preventDefault();

        // Validation
        const form = document.getElementById("contact-me-form");
        const name = formValues.name.trim();
        const email = formValues.email.trim();
        const message = formValues.message.trim();

        if(name !== "" && email !=="" && message !== "" && /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) ){
            var data = new FormData(event.target);
            await fetch('https://formspree.io/f/xzbynwld', {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
            }).then(response => {
            setStatus('Thank you!');
            localStorage.clear();
            }).catch(error => {
            setStatus('Oops! There was a problem');
            });
        }
        else{
            if(name === ""){
                setStatus('Name Should not be empty');
            }
            else if(email === ""){
                setStatus('Email Should not be empty');
            }
            else if(message === ""){
                setStatus('Message Should not be empty');
            }
            else{
                setStatus('Please enter a valid email');
            }
        }
    }

    const setStatus = (message) => {
        const status = document.getElementById("my-form-status");
        status.innerHTML = message;
    }

    const handleChange = (event) => {
        formValues = {...formValues, [event.target.name]: event.target.value};
        localStorage.setItem(event.target.name, event.target.value);
    }

    useEffect(()=>{
        ['name','email','message'].map((val)=>{
            document.getElementById(val).value = localStorage.getItem(val);
            formValues = {...formValues, [val]: localStorage.getItem(val)};
        })
    },[])

    return(
        <main className="contact-me">
            <form id="contact-me-form" onSubmit={handleSubmit} action="" method="POST">
                <p id="my-form-status"></p>
                <input onChange={handleChange} name="name" id="name" className="text-area" type="text" spellCheck="false" autoComplete="off" placeholder="Name"/>
                <input onChange={handleChange} name="email" id="email" className="text-area" type="text" spellCheck="false" autoComplete="off" placeholder="Email"/>
                <textarea onChange={handleChange} name="message" id="message" className="text-area" rows="5" spellCheck="false" placeholder="Message"></textarea>
                <button id="send"  className="submit-button" ><SendIcon/></button>
            </form>
        </main>
    )
}

export default ContactMe;