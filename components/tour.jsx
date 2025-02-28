import 'bootstrap/dist/css/bootstrap.css';


const Tour = ({
   data,
   reg}) => {

return(
<div className="tour">


    {data?.type === 'tour'  &&

    <>
    <div dangerouslySetInnerHTML={{__html: data.message}}>
     </div>   
    {/*  <ul className="list-group">
    {[data.message].map((item, id) => (
   
        <li key={id} className="list-group-item">
            {item && item.replace(reg,  " ")}
        </li>
        
         
    ))}
    </ul> */}
    
  
    </>
}

  
</div>
)

}

export default Tour;