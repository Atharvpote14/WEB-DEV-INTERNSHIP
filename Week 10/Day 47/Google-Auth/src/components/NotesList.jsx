import NoteCard from './NoteCard.jsx'

function NotesList({ notes, onDelete }) {
  if (notes.length === 0) {
    return <p className="no-notes">No notes yet. Create your first note above!</p>
  }

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default NotesList
