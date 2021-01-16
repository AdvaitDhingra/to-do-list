import { useEffect, useState } from "react"
import fire from './firebase'

const Notes = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fire.firestore().collection("notes").onSnapshot(snap => {
            var notess = []
            snap.forEach(doc => {
                notes.push(doc.data())
            })
            setNotes(notess)
        })
        console.log(notes)
    }, [])
    return(
        <div>
            {
                notes.map(note => {
                    return(
                        <div>
                            <p>{note}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Notes