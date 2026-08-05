function NoteCard({ note, onDelete }) {
  const createdDate = new Date(note.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div className="note-card">
      <h3 className="note-title">{note.title}</h3>
      <p className="note-description">{note.description}</p>
      <div className="note-footer">
        <span className="note-date">{createdDate}</span>
        <button className="delete-btn" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default NoteCard
