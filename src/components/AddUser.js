import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddUser() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('Male')
    const navigate = useNavigate()

    const saveUser = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3000/user', {
                name,
                email,
                gender
            })
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
                    <h2>Form Tambah</h2>
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
                        <button type="submit" className="btn btn-success">Simpan</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUser