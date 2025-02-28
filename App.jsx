import {useState} from 'react'
import "./App.css";
import CONTACT_PAGE from './data/contact-page.json';
import 'bootstrap/dist/css/bootstrap.css';

// Components
import Contact from './components/contact';
import Tailormade from './components/tailormade';
import Tour from './components/tour';

//
const url = "http://localhost:3000/products"
const regContact = /(<([^>]+)>)/gi;


function App() {
    const [selectedType, setSelectedType] = useState();
    const [selectItem, setSelectItem] = useState();
   // const [expanded, setExpanded] = useState(null);
   const [activeCurrentIndex, setActiveCurrentIndex] = useState();
   
    const handleMessage = (item) => {
        setSelectItem(item);

        setSelectedType(item.type);

      //  setExpanded(expanded !== item ? item : null);

          if(activeCurrentIndex === item.type){
            setActiveCurrentIndex();
          }else {
            setActiveCurrentIndex(item.type)
          }

    }
    

  return (
    
    <div className="App"> 
        <div className="accordion">
        
        {CONTACT_PAGE && CONTACT_PAGE.map((item) => (
        <div className="accordion-item" key={item.type}>  
          <h1 className="accordion-header">
           <button className="btn collapsed" onClick={() => handleMessage(item)}>      
           
             {item.question}
            
           </button>  
          </h1>
         

         {activeCurrentIndex === item.type &&  <div className="accordion-content">  
         
       
          {selectedType === "contact" && <div>
          <Contact url={url} data={selectItem} user={{name:"Ewushka", email:"arriba@hotmail.com"}} />        
          </div>}
         
          {selectedType === "booking" && <div>
          <Contact data={selectItem} url={url} user={{name:"Ewunia", email:"skibinska@gmail.com"}}/>
          </div>}
          
    
          {selectedType === "tailormade" && <Tailormade />}
   
          {selectedType === "tour" && <div>
          <Tour data={selectItem} reg={regContact}/> 
          </div>}
  
          </div>
        } 

        </div>
))}

        </div>    
      </div>
  
  );
}

export default App;
