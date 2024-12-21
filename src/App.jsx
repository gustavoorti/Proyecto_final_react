import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Ingresar, setIngresar] = useState(0)

  return (
    <>
      <h1>Bienvenido a mi sitio web</h1>

      <div className='login-container'>
        <h3>Iniciar sesion</h3>
        <form action='/login' method='POST'>
          <input type='text' name="username" placeholder="Usuario" required/>
          <br/>
          <input type="password" name="password" placeholder="Contraseña" required/>
          <br/>
          <br/>

          <button onClick={() => setIngresar((Ingresar) => Ingresar)}>
        Ingresar
        </button>
        </form>

        <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
      </div>
      <p className="read-the-docs">
        Hola que tal, muchas grc por ingresar a mi pagina
      </p>
    </>
  )
}

export default App
