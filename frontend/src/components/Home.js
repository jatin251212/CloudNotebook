import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";
import Spinner from "./Spinner";
// import noteContext from '../context/notes/noteContext'

const Home = (props) => {

  // const context=useContext(noteContext);
  // let {notes,setNotes}=context;
  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <Notes showAlert={props.showAlert} />
      
    </>
  );
};

export default Home;
