export function SignUp() {
   return (
      <main className="auth-shell ">
  <div className="form-col wrap" style={{ width: '100%' }}>
    <div className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
      <h1 className="h1">Create Your Account</h1>
      <p className="body muted mt-2">Join for early access, order tracking, and a faster checkout.</p>
    </div>

    <form data-validate="" data-success-target="#signup-success">
      <div className="field">
        <label className="label" htmlFor="name">Full Name</label>
        <input id="name" type="text" required />
        <p className="field__error">Please enter your name.</p>
      </div>
      <div className="field">
        <label className="label" htmlFor="email">Email</label>
        <input id="email" type="email" required />
        <p className="field__error">Please enter a valid email address.</p>
      </div>
      <div className="field">
        <label className="label" htmlFor="password">Password</label>
        <input id="password" type="password" required />
        <p className="field__error">Please choose a password.</p>
      </div>
      <button type="submit" className="btn btn--primary btn--full">Create Account</button>
    </form>

    <p className="text-center mt-4"><a href="#" className="text-link">Already have an account? Log in</a></p>

    <div className="form-divider small">OR</div>

    <button className="btn btn--secondary btn--full">Continue with Google</button>

  </div>
</main>
   )
}