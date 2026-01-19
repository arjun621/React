import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")

  const [task, setTask] = useState([])

   const submitHandler = (e) => {

    const copyTask = [...task];

    copyTask.push({title, details})

    setTask(copyTask)

      e.preventDefault(); 

      setTitle("")
      setDetails("")
    }

    const deleteNote = (idx) => {
      const copyTask = [...task];

      copyTask.splice(idx,1);

      setTask(copyTask);
    }

  return (

    <div className="h-screen lg:flex bg-black text-white">

      {/* LEFT SIDE – FORM */}
      <form className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
        onSubmit={(e) => {
          submitHandler(e);
        }}>
        <h1 className="text-4xl mb-2 font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded bg-white text-black"
        />

        <textarea
          placeholder="Write Details here"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
          className="px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded bg-white text-black"
        />

        <button
          type="submit"
          className="bg-white active:scale-95 font-medium w-full text-black px-5 py-2 rounded"
        >
          Add Note
        </button>
      </form>

      {/* RIGHT SIDE – NOTES */}
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>

        <div className="flex flex-wrap items-start gap-5 mt-6 h-[90%] overflow-auto">

          {task.map(function (elem,idx){

          return <div key={idx} className="flex flex-col justify-between h-52 w-40 rounded-xl text-black pt-9 pb-4 px-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
            <div>
              <h3 className="text-lg font-bold leading-tight">
                {elem.title}
              </h3>
              <p className="mt-2 text-xs font-semibold text-gray-600 leading-tight">
                {elem.details}
              </p>
            </div>
          
            <button onClick={(idx) => {
              deleteNote(idx)
            }} className="w-full bg-red-500 py-1 text-xs rounded font-bold text-white active:scale-95">
              Delete
            </button>
          </div>
         })}
        </div>
      </div>

    </div>
  )
}

export default App
