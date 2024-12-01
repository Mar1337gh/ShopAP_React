import React from 'react';

function Login() {

    function Log() {
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value
    const data =  {
        login: login,
        password: password, 
    }
    //debugger
    console.log(data)

    const api = 'http://localhost:9001/registration'
          // ввод данных
    fetch (api, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then (result => result.json())
    .then ((result) => {
      console.log(result)
      localStorage.setItem('token', result.token) // хран токена
    })
  }
  

  return (
    <>
    <h1>Логин</h1>
    <input id = 'Login' type = 'text' placeholder='Логин' />
    <input id = 'Password' type = 'password' placeholder='Пароль' />
    <button onClick={Log}>Войти</button>
    </>
  );
}

export default Login;