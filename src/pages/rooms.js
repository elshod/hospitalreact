import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../component/table";

const Rooms = () =>{
    const [isForm, setForm] = useState(false)
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [floor, setFloor] = useState('')
    const [depart, setDepart] = useState('')
    const [status, setStatus] = useState('Band')
    const option = {
        id: 'ID',
        name: 'Xona raqami',
        type: 'Turi',
        floor: 'Qavat',
        depart: 'Bo`lim',
        status: 'Xona xolati',
    }

    useEffect(()=>{
        axios.get('http://localhost:3000/rooms')
        .then(res => {
            if (res.status === 200){
                setData(res.data)
            }
        })
    })

    

    const addRoom=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/rooms',{
            name, type, floor, depart, status 
        }).then(res => {
            if (res.status === 201){
                setData([...data, res.data])
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

    return (
        <>
            <h1>Xonalar ro'yhati</h1>
            <Table 
                data={data} 
                option={option} 
                url='rooms'
                del={(id)=>{ deleteRoom(id) }}
            />
            <button 
                className="addbtn" 
                onClick={()=>{setForm(true)}}>
                    +
            </button>
            <form 
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
                    onInput={
                        (event)=>{
                            setName(event.target.value)
                        }
                    }
                />
                <select name="type"
                    onInput={
                        (event)=>{
                            setType(event.target.value)
                        }
                    }
                >
                    <option value='0' selected disabled>Xona turi</option>
                    <option value='Muolaja xonasi'>Muolaja xonasi</option>
                    <option value='Shifokor xonasi'>Shifokor xonasi</option>
                    <option value='Ta`minot xonasi'>Ta`minot xonasi</option>
                    <option value='Dam olish xonasi'>Dam olish xonasi</option>
                </select>
                <input 
                    type='number' 
                    name='floor' 
                    placeholder='Qavat'
                    onInput={
                        (event)=>{
                            setFloor(event.target.value)
                        }
                    }    
                />
                <select 
                    name="depart"
                    onInput={
                        (event)=>{
                            setDepart(event.target.value)
                        }
                    }
                    >
                    <option defaultValue='0' selected disabled>Bo'limni tanlang</option>
                    <option value='Nevrologiya'>Nevrologiya</option>
                    <option value='Terapiya'>Terapiya</option>
                    <option value='Travmatologiya'>Travmatologiya</option>
                </select>
                <select 
                    name="status"
                    onInput={
                        (event)=>{
                            setStatus(event.target.value)
                        }
                    }
                    >
                    <option defaultValue='0' selected disabled>Xona xolatini belgilang</option>
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