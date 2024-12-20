import React, { useState, useEffect } from 'react';
function Profile() {
    const [user, setUser] = useState(null)
    const [Editing, setEditing] = useState(false)
      const [Data, setData] = useState({
        login: '',
        email: '',
        password: ''
      })
useEffect (() =>{
    const api = 'http://localhost:9001/profile'
    fetch(api, {
        method: 'GET',
        headers: {
            'Authorization':`Bearer' ${localStorage.getItem('token')}`
        },
    })
    .then (response => response.json())
    .then (data=>{
        setUser(data)
        setData({
            login: data.login,
            email: data.email,
            password: " "
        })
    })
    .catch (error => console.error('Ошибка:', error)) 
}, [])

function Save() {
    const api = 'http://localhost:9001/profile'
    fetch(api, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
      },
      body: JSON.stringify(Data)
    })
    .then (response => response.json())
    .then (data=>{
        alert('Данные обновлены');
        setUser(data)
        setEditing(false)
        })
        .catch(error => console.error('Ошибка:', error))
    }
    if (!user) return <p>Загрузка...</p>

    return (
        <div>
            <h1>Личный кабинет</h1>
            <div>
                <label>Логин:</label>
                {Editing ? (
                    <input
                    type='text'
                    value={Data.login}
                    onChange={(e)=> setData({...Data, login: e.target.value})}
                    />
                ) : (<span>{user.login}</span>)}
            
        </div>
        <div>
        <label>Email:</label>
        {Editing ? (
            <input
            type='password'
            value={Data.password}
            onChange={(e) => setData({...Data, login: e.target.value})}
            />
        ):( <span>******</span>
        )}
        </div>
        <div>
        <label>Пароль:</label>
        {Editing ? (
            <input
            type='password'
            value={Data.password}
            onChange={(e) => setData({...Data, password: e.target.value})}
            />
        ):( <span>******</span>
        )}
        </div>
        {Editing ? (
        <button onClick={Save}>Сохранить</button>
        ): (<button onClick={() => setEditing(true)}>Редактировать</button>)}        
    
    </div>
    )
    }
    export default Profile
    
