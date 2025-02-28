import 'bootstrap/dist/css/bootstrap.css'

const Tailormade = () => {

    let url =  "https://www.exploriada.com/my-exploriada/request-tailor-made-travel-experience/";

return(
    <>
      <button type="button" className="btn btn-primary btn-sm" onClick={() => {window.location.href = url; }}> O </button>
    </>
)
} 

export default Tailormade;