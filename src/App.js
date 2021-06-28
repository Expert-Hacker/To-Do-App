import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import logo1 from './images/logo1.png'

function App() {
  // state for input field
const[initval,setinpVal] = useState('')

// state for storing values on array
const[set,setval]= useState([])

// crreating state for error
const [initError, setError]=useState(false)

function changeval(e)
{
  setinpVal(e.target.value)
}

// adding items
function addItem()
{
  // if input value is empty
  if(!initval)
  {
      // do nothing
      setError(true)
  }
  else
  {
    setval([...set,initval])
    setinpVal("")
  }   
}

// delete items
function deleteItem(index)
{
  const deletedItems =set.filter((ele,indx)=>{
      return(indx!=index)        
  })
  setval(deletedItems)
  console.log("deleted" + index)
}

// Remove all Items
function removeAllItems()
{
  setval([])
}
// error message

// setting flag value for close msg
function setErrorVal()
{
  setError(false)
}

  return (
          <div className="outerdiv">
            
            <div className=" container">
              <div className="controls">

                <div className="logo">
                    <img src={logo1} alt="" height="100px" />
                </div>

                <div className="todotitle">
                    <h3 className="text-light text-center title ">To-Do app</h3>
                </div>
                <div className="inputs">
                  <input type="text" tabIndex="1" onChange={changeval} value={initval} className="form-control w-50"  id="exampleInputEmail1"  placeholder=" ✍️ Add Items.."/>
                  <i className="fas text-success fa-2x fa-plus" onClick={addItem} title="Add"></i>
                </div>

                {/* //added items */}
               
                  {
                    set.map((ele,indx)=>{
                      return(
                        <div className="itemscont container mb-2" key={indx}>
                        <button class="btn btn-primary w-50" type="submit">{ele}</button>
                        <i className="fas fa-trash-alt" title="Delete" onClick={()=>deleteItem(indx)}></i>
                        </div>
                    
                      )
                    })
                  }
                    <div className="removeall">
                            <button class="btn btn-primary w-25" title="Remove all" onClick={removeAllItems} type="submit">REMOVE ALL</button>
                        </div>
                  
              
            </div>
            {initError ? <div className="errDiv">
              <div className="alert w-50  alert-warning alert-dismissible fade show" role="alert">
  <strong>Input Can't be Empty!</strong>
  <button type="button" class="close" onClick={setErrorVal} data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div></div> : ""}
          
          </div>
          </div>
  );
}

export default App;
