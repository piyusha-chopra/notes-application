import {useState} from 'react'
import { NotebookPen } from 'lucide-react';

function App(){

  const [heading,setHeading]=useState("")
  const [info,setInfo]=useState("")
  const [tasks,setTasks]=useState([])

  const handleSubmit=(e)=>{
    e.preventDefault()
    let copyTask=[...tasks];
    copyTask.push({heading,info})
    setTasks(copyTask)
    setHeading("")
    setInfo("")
  }

 const deleteNote=(id)=>{
  let deleteTask=[...tasks]
  deleteTask.splice(id,1)
  setTasks(deleteTask)
 }

  return(
    <>
    <div className="bg-[rgb(201, 201, 248)] m-5">
      <div className="bg-white h-full rounded-xl p-8 ">
        <h1 className="flex justify-between items-center text-xl font-medium">Add Notes<NotebookPen /></h1>
        <form onSubmit={handleSubmit} className="flex items-center flex-col justify-between">
          <input onChange={(e)=>{
            setHeading(e.target.value)
            }} 
            value={heading} 
            type="text" 
            placeholder="Enter Notes Title" 
            className="border py-2 px-5 m-8 w-full rounded-xl"/>
          <textarea 
            onChange={(e)=>{
              setInfo(e.target.value)
            }}
            value={info}
            placeholder="Enter Notes Detail" 
            className="border py-2 px-5 h-30 rounded-xl mb-8 w-full">   
          </textarea>
          <button disabled={heading.trim()==="" && info.trim()===""} className=" bg-purple-700 active:bg-purple-600 text-white py-3 px-5 rounded-full w-full cursor-pointer font-medium">Add Notes</button>
        </form>
      </div>
      <div className="p-6 bg-white mt-6 rounded-xl ">
        <h1 className="text-xl font-medium  rounded-xl py-2 px-5 w-40">Your Notes</h1>
        <div className="flex flex-wrap gap-10 pt-4">
           {tasks.map((task,id)=>{
            return(
              <div key={id} className=" flex justify-between flex-col h-52 w-40 rounded-2xl py-2 px-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                <div>
                <h3 className=" leading-tight text-xl mb-2 mt-4 font-medium">{task.heading}</h3>
                <p className="leading-tight text-gray-600 font">{task.info}</p>
                </div>
      
                  <button onClick={()=>{
                    deleteNote(id)

                  }} className="bg-purple-700 aactive:bg-purple-600 rounded-2xl py-1 text-white font-medium cursor-pointer">Delete</button>
                
              </div>
            )
           
          })} 
          
        </div>
      </div>
    </div>
    </>
  )

}

export default App
