import { GoogleLogin } from '@react-oauth/google'

function Login({ onLoginSuccess, onLoginError }) {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">📝</div>
        <h1 className="login-title">Notes App</h1>
        <p className="login-tagline">Store your thoughts instantly.</p>

        <GoogleLogin
          onSuccess={onLoginSuccess}
          onError={onLoginError}
          size="large"
          shape="pill"
          theme="filled_blue"
        />
      </div>
    </div>
  )
}

export default Login
