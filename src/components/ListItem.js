import React from 'react'
import { Link } from 'react-router-dom'


let getTime = (note) => {
    return new Date(note.updated).toLocaleDateString()
}


let getTitle = (note) => {
    const title = note.body.split('\n')[0]
    if (title.length > 45) {
        return title.slice(0, 45)
    }

return title
}

let getHasan = (note) => {
    const title = note.hasan.split('\n')[0]
    return title
}

let getDetail = (note) => {
    const title = note.detail.split('\n')[0]
    return title
}




const ListItem = ({ note }) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div id="fff" className={getHasan(note)}>

                <h3>{getTitle(note)}</h3> <h4 className="condition">({getHasan(note)})</h4> 
                <p>{getDetail(note)}</p>

                <p><span>{getTime(note)}</span></p>
            </div>
        </Link>
    )
}

export default ListItem
