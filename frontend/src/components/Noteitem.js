import React,{useContext} from "react";
import noteContext from '../context/notes/noteContext'


const Noteitem = (props) => {
  const context=useContext(noteContext);
    // let {notes,setNotes}=context;
  let {deleteNote}=context;
  const { notes,updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{notes.title}</h5>
          <p className="card-text">{notes.description} </p>
          <p className="card-text"><strong>{notes.tag}</strong> </p>
          <i className="fa-solid fa-trash" onClick={()=>{deleteNote(notes._id);
          props.showAlert("Deleted successfully","success")}}></i>
          <i className="far fa-edit mx-2" onClick={()=>{updateNote(notes)}}></i>

        </div>
      </div>
    </div>
  );
};

export default Noteitem;
