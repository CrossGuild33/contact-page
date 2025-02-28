import { useState} from 'react';
 //import CONTACT_PAGE from '../data/contact-page.json';
 import './contact.css';

const validateEmail = (email) => {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const validateName = (name) => {
    let re = /\D+/;
    return re.test(name)
}

const isValidField = (field) => {
    let fieldIsInvalid = !field;

    return !fieldIsInvalid;
}

 const Contact = ({
    data, 
    user,
    url
}) => {

 
    

  //  const [products, setProducts] = useState(null);
    const [fieldErrors, setFieldErrors] = useState();

// Form
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [text, setText] = useState("");
    const [subject, setSubject] = useState(user ? user.subject : "");
    const [error, setError] = useState(false);

 
/*useEffect(() => {
    const fetchData = async() => {
        
        const res = await fetch(url);

        const json = await res.json();

        setProducts(json);
    }
    fetchData();
}, [])*/

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, text, subject);

    
    const validEmail = validateEmail(email) && isValidField(email);
    const validName = isValidField(name) && validateName(name);
    const validText = isValidField(text);
    const validSubject = isValidField(subject);

    try{
        setFieldErrors({
            name: validName,
            email: validEmail,
            text: validText,
            subject: validSubject,
        })}
    catch(error){
        setError("Preencha os dados corretamente.")
        user("");
    }

        
   
        console.log(fieldErrors)

    const sendData = {

        name,
        email,
        text,
        subject,

        
    }
    const res = (url, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(sendData)

        
    });
  res()

        //setName("");
        //setEmail("");
        //setText("");
        //setSubject("");

   
      
    }
   
  /*  const handleReset = () => {
        
        window.location.reload();
    } 
*/
return (
<div className="contact">

<form  name="form" onSubmit={handleSubmit}>
   
<div className="input-group mb-3">
     
        <input type="text" aria-label="name" placeholder="Name" className="form-control" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
    
    {/*<span className="input-group-text"></span>*/}
    {error  && <span> Preencha corretamente</span>}
    {!error  && 
    
  
       
        <input type="e-mail" aria-label="email" placeholder="E-mail" className="form-control" name="email" accept-charset={validateEmail} required value={email} onChange={(e) => setEmail(e.target.value)} />
    
   
    
}
</div>
 
    
    {data?.type === 'contact' &&
<>
        <select name="subject" className="form-select" required value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option>---Select Subject---</option>
            {data && data?.subjects?.map((item, id) => ( 
       
       
            <option key={id}>{item}</option>
            
            ))}
        </select> 
</>
        }
    <div className="form-text">
        <label>
        <textarea className="form-control"  required value={text} onChange={(e) => setText(e.target.value)} placeholder=" Leave a comment..." cols="30" rows="5"></textarea>
        </label>
    </div>

        <input type="submit" className="btn btn-primary" value="Send" />

        
   {/*  mb3 Bootstrap */}
</form>
    
</div>
)
}

export default Contact;