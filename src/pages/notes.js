import React, { Component } from 'react';
import Link from 'next/link'
import notesList from '../utils/notesList'

class Notes extends Component {
  render() {
    return (
      <>
        <h2>Notes</h2>
        <ul>
          {
            notesList.map(note => {
              return (
                <li style={{ border: "1px solid lightGrey", borderRadius: 3, lineHeight: '2em', padding: '0 0 0 10px', margin: 2 }}key={note.url}>
                  <Link href={"/notes" + note.url}><a>{note.title}</a></Link>
                </li>

              )
            })
          }
        </ul>
      </>
    )
  }
};

export default Notes;
