import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Note = ({ match, history }) => {
    let noteId = match.params.id

    let [note, setNote] = useState(null)


    useEffect(() => {

        getNote()
    }, [noteId])

    let getNote = async () => {
        if (noteId === 'new') return
        let response = await fetch(`http://127.0.0.1:5000/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
        if (noteId != 'new')   document.getElementById("upd").style.display = "block"; document.getElementById("flo1").style.display = "block";
    }

  
    

    const createNote = async () => {


        await fetch(`http://127.0.0.1:5000/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...note, 'updated': new Date() })
        })
       
    }


    const updateNote = async () => {
        await fetch(`http://127.0.0.1:5000/notes/${noteId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...note, 'updated': new Date() })
        })
        history.push('/')
    }

    const deleteNote = async () => {
        await fetch(`http://127.0.0.1:5000/notes/${noteId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
        history.push('/')
    }

    let handleSubmit = () => {
        if (noteId !== "new" && !note.body) {
            deleteNote()
        } else if (noteId !== "new") {
            updateNote()
        } else if (noteId === 'new' && note !== null) {
            createNote();
        }

        history.push('/')
    }

   

    return (
        <div className="note">
            <div className="note-header">
                
                {noteId !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Add</button>
                )}

                
                 <button id="upd" onClick={updateNote}>Update</button>
<h3>
                    <Link to={'/'}>back </Link>
                </h3>
            </div>
            
            <textarea className="textarea1" onChange={(e) => { setNote({ ...note, 'body': e.target.value, 'hasan': 'incompleted' }) }} placeholder="New Task Title ..." value={note?.body}></textarea>
            <textarea onChange={(e) => { setNote({ ...note, 'detail': e.target.value}) }} placeholder="New Task Detail ..." value={note?.detail}></textarea>

            <div className="flo1" id="flo1">completed <input onChange={(e) => { setNote({ ...note, 'hasan': 'completed' }) }} type="checkbox" className="flo"/></div>
        </div>
    )
}

export default Note
