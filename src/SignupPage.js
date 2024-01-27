function SignupPage() {
    return (
        <div className="Signup-container">
      <form className="Login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="Form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="Form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="Login-button">Log In</button>
      </form>
    </div>
    );
}

export default SignupPage;