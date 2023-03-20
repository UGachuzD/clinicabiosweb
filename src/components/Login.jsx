import React from 'react'
import '../styles/Login.css'

const Login = () => {
  return (
    <section>
      <div className="form-container">
        <div className="form-login">
          <form action="">
            <h2>Clinica Veterinaria BIOS</h2>
            <div className="form-input">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="form-input">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="form-forget">
              <label>
                <input type="checkbox" required />
                <label>Remember Me<a href="#"> Forget password?</a></label>
              </label>
            </div>
            <button>Log in</button>
            <div className="form-register">
              <p>Don't have account? <a href="#">Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login;