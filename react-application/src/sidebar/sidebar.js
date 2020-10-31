import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebaritem';

class SidebarComponent extends React.Component {
    constructor(){
        super()
    }
render(){
    const {notes, classes, selectedNoteIndex} = this.props

    if(notes){
        return(
            <div className={classes.sidebarContainer}>
                <Button
                onClick = {this.newNote}
                className = {classes.newNoteBtn}>
                    New Note
                </Button>
                
                <List>
                    {
                        notes.map((_note,_index) => {
                            return(
                                <div key={_index}>
                                    <SidebarItemComponent
                                        _note={_note}
                                        _index={_index}
                                        selectedNoteIndex={selectedNoteIndex}
                                        selectNote = {this.selectNote}
                                        deleteNote = {this.deleteNote}>
                                    </SidebarItemComponent>
                                    <Divider></Divider>
                                </div>
                            )
                        })
                    }
                </List>
            </div>
        )
    }
    else {
        return(<div>Loading</div>)
    }
}
    newNote= ()=>{
        this.props.newNote()
    }
    selectNote = (n,i) => {
        this.props.selectNote(n,i)
    }
    deleteNote = (note) => {
        this.props.deleteNote(note)
    }
}

export default withStyles(styles)(SidebarComponent)