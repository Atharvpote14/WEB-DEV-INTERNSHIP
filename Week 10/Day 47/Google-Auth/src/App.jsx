import { useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import Navbar from './components/Navbar.jsx'
import Login from './components/Login.jsx'
import NoteForm from './components/NoteForm.jsx'
import NotesList from './components/NotesList.jsx'
import Profile from './components/Profile.jsx'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [notes, setNotes] = useState([])

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential)
    setUser({
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
    })
  }

  const handleLoginError = () => {
    console.error('Google login failed')
  }

  const handleLogout = () => {
    setUser(null)
    setNotes([])
  }

  const handleAddNote = (note) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...note },
    ])
  }

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
  }

  if (!user) {
    return (
      <Login onLoginSuccess={handleLoginSuccess} onLoginError={handleLoginError} />
    )
  }

  return (
    <div className="dashboard">
      <Navbar user={user} onLogout={handleLogout} />

      <main className="main-content">
        <Profile user={user} />

        <section className="notes-section">
          <h2 className="section-title">Create New Note</h2>
          <NoteForm onAdd={handleAddNote} />

          <NotesList notes={notes} onDelete={handleDeleteNote} />
        </section>
      </main>
    </div>
  )
}

export default App
