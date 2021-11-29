import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'
import $ from "jquery";



const Notes = () => {

    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()

    }, [])


    let getNotes = async () => {
        
        let response = await fetch('http://127.0.0.1:5000/notes/')
        let data = await response.json()
            setNotes(data)
           
    }

    
    let comR = () => {
        $(".incompleted").fadeOut(100);
       $(".completed").delay(100).fadeIn(100);
    }
    let proR = () => {
        $(".completed").fadeOut(100);
        $(".incompleted").delay(100).fadeIn(100);
     }

     let allR = () => {
        $(".completed").delay(100).fadeIn(100);
        $(".incompleted").delay(100).fadeIn(100);
     }

    return (
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title"> My Tasks</h2>
    
                <p className="notes-count">{notes.length}</p>
            </div>

            <div className="notes-list">
            <button className="btn1" onClick={comR}>Completed</button>
            <button className="btn1" onClick={proR}>Incompleted</button>
            <button className="btn1" onClick={allR}>All tasks</button>

                {notes.map((note, index) => (
                    <ListItem key={index} note={note} />
                ))}
                
            </div>

            <AddButton />
        </div>
    )
}

export default Notes
