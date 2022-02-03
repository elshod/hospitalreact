import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../component/table";

const Rooms = () =>{
    const [isForm, setForm] = useState(false)
    const [data, setData] = useState([])
    const [departs, setDeparts] = useState([])

    const option = {
        id: 'ID',
        name: 'Xona raqami',
        type: 'Turi',
        floor: 'Qavat',
        depart: 'Bo`lim',
        status: 'Xona xolati',
    }

    useEffect(()=>{
        axios.get('http://localhost:3000/departs')
        .then(res => {
            if (res.status === 200){
                setDeparts(res.data)
            }
        })
        axios.get('http://localhost:3000/rooms')
        .then(res => {
            if (res.status === 200){
                setData(res.data)
            }
        })
        
    },[])

    

    const addRoom=(e)=>{
        e.preventDefault()
        let form = document.forms.room 
        let room = {}
        let formData = new FormData(form)
        formData.forEach((value,key)=>{
            room[key] = value 
        })
        axios.post('http://localhost:3000/rooms',room)
        .then(res => {
            if (res.status === 201){
                setData([...data, res.data])
                form.reset()
            }
        })
    }

    const deleteRoom =(id)=>{
        const index = data.findIndex(el=> el.id == id)
        axios.delete(`http://localhost:3000/rooms/${id}`)
        .then(res => {
            if (res.status === 200){
                const before = data.slice(0,index)
                const after  = data.slice(index+1)
                setData([...before, ...after])
            }
        })
    }

    const parseDate = (data) => {
        
        data = data.map(room => {
            const index = departs.findIndex(dep => dep.id == room.depart)
            if (departs[index])
                room.depart = departs[index].name
            return room
        })
        return data
    }

    return (
        <>
            <h1>Xonalar ro'yhati</h1>
            <Table 
                data={parseDate(data)} 
                option={option} 
                url='rooms'
                del={(id)=>{deleteRoom(id)}}
            />
            <button 
                className="addbtn" 
                onClick={()=>{setForm(true)}}>
                    +
            </button>
            <form 
                name='room'
                className={isForm?'add show':'add'}
                onSubmit={(event)=>{addRoom(event)}}
                >
                <span 
                    className="add__close" 
                    onClick={()=>{setForm(false)}}>
                </span>
                <div className="add__title">
                    Yangi xona qo'shish
                </div>
                <input 
                    type='number' 
                    name="name" 
                    placeholder="Xona raqami"
                    required
                />
                <select name="type"
                    required
                >
                    <option value=''>Xona turi</option>
                    <option value='Muolaja xonasi'>Muolaja xonasi</option>
                    <option value='Shifokor xonasi'>Shifokor xonasi</option>
                    <option value='Ta`minot xonasi'>Ta`minot xonasi</option>
                    <option value='Dam olish xonasi'>Dam olish xonasi</option>
                </select>
                <input 
                    type='number' 
                    name='floor' 
                    placeholder='Qavat'
                    required
                />
                <select 
                    name="depart"
                    required
                    >
                    <option value='' selected disabled>Bo'limni tanlang</option>
                    {departs.map(dep=>(
                        <option 
                            key={dep.id}
                            value={dep.id}
                            >
                                {dep.name}
                        </option>
                    ))}
                </select>
                <select 
                    name="status"
                    required
                    >
                    <option value='' selected disabled>Xona xolatini belgilang</option>
                    <option value='Bo`sh'>Bo`sh</option>
                    <option value='Band'>Band</option>
                    <option value='Remont'>Remont</option>
                </select>
                <button type="submit">Qo'shish</button>
            </form>
        </>
    )
}

export default Rooms