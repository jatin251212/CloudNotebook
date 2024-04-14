import React,{useContext,useState} from 'react'
import noteContext from '../context/notes/noteContext'


const AddNote = (props) => {
    const context=useContext(noteContext);
    let {addNote}=context;

    const [note,setNote]=useState({title:"",description:"",tag:""})

    const onChange=(e)=>{
        setNote({...note ,[e.target.name]:e.target.value})

    }

    const handleClick = (e) => {
        e.preventDefault(); 
        addNote(note.title, note.description, note.tag);
        setNote({title:"",description:"",tag:""})
        props.showAlert("Note added successfully","success")

    }
    
  return (
    <div className="container my-3 mx-5">
        <h2>ADD YOUR NOTES HERE</h2>
        <form>
          <div className="mb-3 my-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="title"
              className="form-control"
              id="title" name="title"   
              aria-describedby="emailHelp"
              onChange={onChange}
              value={note.title}

            />
           
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              value={note.description}

            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              value={note.tag}
            />
          </div>
          {/* <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>
            Add Note
          </button>
          
        </form>
        
      </div>
  )
}

export default AddNote
