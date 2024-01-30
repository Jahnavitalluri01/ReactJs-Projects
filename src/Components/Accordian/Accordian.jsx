import React, { useState } from "react";
import './Accordian.css'

function Accordian(){
    const data=[{id:'1',question:'First Question',answer:'First Answer'},
    {id:'2',question:'Second Question',answer:'Second Answer'},{id:'3',question:'Third Question',answer:'Third Answer'},
    {id:'4',question:'Fourth Question',answer:'Fourth Answer'}];
 
    const [selected,setselected]=useState(null)
    const [selectedid,setid]=useState(0)
    const [symboll,setsymbol]=useState('+')
    const [multi,enablemulti]=useState(false)
    const [multipleitems,setmultiitems]=useState([])
    function selectedsingleitem(idd){
      setid(idd===selectedid?null:idd)
      console.log(idd)
    }
    function selectedmultiitems(idd){
          let multiple=[...multipleitems]
          const getcurrentidindex=multiple.indexOf(idd)
          console.log(getcurrentidindex)
          if(getcurrentidindex===-1){
            multiple.push(idd)
          }
          else{
            multiple.splice(getcurrentidindex,1)
          }
          setmultiitems(multiple)
          
    }
    console.log(multipleitems)
    // console.log(multi)
    return(
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
            <h1>Accordion</h1>
            
             { data && data.length > 0 ?
                    data.map((dataitem)=>(
                        <div className="text-white my-3 bg-success w-50 py-4 rounded">
                      <div >
                              <h5>{dataitem.question} <span className="ps-3 plus" onClick={multi?()=>selectedmultiitems(dataitem.id):()=>selectedsingleitem(dataitem.id)}>{symboll}</span></h5>
                      </div>
                     {/* {selectedid===dataitem.id?
                    (<div className="text-dark fw-bold">{dataitem.answer}</div>):null} 
                   */}
                   {multi?multipleitems.indexOf(dataitem.id)!==-1 && (
                    <div className="text-dark fw-bold">{dataitem.answer}</div>
                   ):selectedid===dataitem.id?
                   (<div className="text-dark fw-bold">{dataitem.answer}</div>):null

                }
                 
                    
                        </div>
                

                      
                    )):<div>Not found</div>
                }
                  <div className="container w-50">
                <button className="btn btn-danger my-3 mx-lg-3 mx-0 " onClick={()=>enablemulti(true)}>Enable Multi Selection</button>
                <button className="btn btn-danger my-3" onClick={()=>enablemulti(false)}>Disable Multi Selection</button>
                {
                    multi?
                    (<h5 className="text-primary">Multi Selection Enabled</h5>):
                    (<h5 className="text-primary">Multi Selection Disabled</h5>)
                }
                </div>
        </div>
    )
}
export default Accordian