import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await axios.get('http://localhost:3000/users')
        setUsers(response.data)
    }

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/user/${id}`)
            getUsers()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12">
                    <h2>List Users</h2>
                    <a href="/add" className="btn btn-warning mb-3">Tambah Data</a>
                    <table className="table table-striped table-dark mt-3">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nama</th>
                                <th>Email</th>
                                <th>Gander</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>
                                        <Link to={`edit/${user.id}`} className='btn btn-warning btn-sm badge rounded-pill'>Edit</Link>
                                        <Link onClick={() => deleteUser(user.id)} className='btn btn-danger btn-sm badge rounded-pill'>Hapus</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserList