import { Dialog, Fab, Typography, DialogTitle, Input, Button } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';

import { useState } from 'react'

import fire from './firebase'

import Notes from './notes'

const Main = () => {
    const [noteDialogOpen, setNoteDialogOpen] = useState(false);

    const [currentNote, setCurrentNote] = useState("")


    function newNote(){
        setNoteDialogOpen(true)
    }
    function uploadNote(e){
        e.preventDefault()

        fire    
            .firestore()
            .collection("notes")
            .add({
                note: currentNote
            }).then({
            }).catch(error => {
                console.log(error)
            })
        setCurrentNote("")
        setNoteDialogOpen(false)
    }
    return(
        <div style = {{
            width: "100%",
            height: "100%",
        }}>
            <div style = {{
                backgroundColor: "white",
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "auto"
            }}>
                <Notes/>
            </div>
            <Fab onClick = {newNote} color = "primary" aria-label = "add" style = {{
                position: "fixed",
                right: "10%",
                bottom: "10%"
            }}>
                <AddIcon/>
            </Fab>
            <Dialog open = {noteDialogOpen} onClose = {() => setNoteDialogOpen(false)} style = {{
                padding: "20px 20px"
            }}>
                <DialogTitle>
                    <Typography>
                        Add a new note
                    </Typography>
                </DialogTitle>
                <form>
                <Input style = {{
                    width: "500px",
                    height: "200px",
                    marginLeft: "20px",
                    marginRight: "20px",
                    marginBottom: "20px"
                }}type = "text" multiline placeholder = "Reminder/Note?" onChange = {(e) => setCurrentNote(e.target.value)}/>
                <Button color = "primary" varient = "contained" onClick = {uploadNote}>Add</Button>
                </form>
            </Dialog>
        </div>
    )
}
export default Main