function Profile({ user }) {
  return (
    <section className="profile-section">
      <h1 className="welcome-title">
        Welcome Back, <span className="welcome-name">{user.name}</span>
      </h1>
      <p className="welcome-subtitle">Start capturing your thoughts below.</p>
    </section>
  )
}

export default Profile
