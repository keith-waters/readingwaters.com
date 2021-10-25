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
                <li key={note.url}>
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
