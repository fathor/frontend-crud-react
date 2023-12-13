import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function EditUser() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('Male')
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        getUsersById()
    }, [])

    const saveUser = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:3000/user/${id}`, {
                name,
                email,
                gender
            })
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const getUsersById = async () => {
        const response = await axios.get(`http://localhost:3000/user/${id}`)
        setName(response.data.name)
        setEmail(response.data.email)
        setGender(response.data.gender)
    }
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
                    <h2>Form Edit</h2>
                    <form onSubmit={saveUser}>
                        <div className="mb-3">
                            <label className="form-label">Nama</label>
                            <input type="text" className="form-control" id="name" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nama</label>
                            <input type="email" className="form-control" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gander</label>
                            <select name="gander" id="gander" className='form-control' value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditUser