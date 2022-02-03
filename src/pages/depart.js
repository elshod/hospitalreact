import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../component/table";

const Depart = () =>{
    const [isForm, setForm] = useState(false)
    const [data, setData] = useState([])
    
    const option = {
        id: 'ID',
        name: 'Bo`lim nomi',
        status: 'Bo`lim holati',
    }

    useEffect(()=>{
        axios.get('http://localhost:3000/departs')
        .then(res => {
            if (res.status === 200){
                setData(res.data)
            }
        })
    },[])

    

    const addDepart=(e)=>{
        e.preventDefault()
        let form = document.forms.depart 
        let dep = {}
        let formData = new FormData(form)
        formData.forEach((value,key)=>{
            dep[key] = value 
        })
        axios.post('http://localhost:3000/departs',dep)
        .then(res => {
            if (res.status === 201){
                setData([...data, res.data])
                form.reset()
            }
        })
    }

    const deleteRoom =(id)=>{
        const index = data.findIndex(el=> el.id == id)
        axios.delete(`http://localhost:3000/departs/${id}`)
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
            <h1>Bo'limlar ro'yhati</h1>
            <Table 
                data={data} 
                option={option} 
                url='depart'
                del={(id)=>{ deleteRoom(id) }}
            />
            <button 
                className="addbtn" 
                onClick={()=>{setForm(true)}}>
                    +
            </button>
            <form 
                name='depart'
                className={isForm?'add show':'add'}
                onSubmit={(event)=>{addDepart(event)}}
                >
                <span 
                    className="add__close" 
                    onClick={()=>{setForm(false)}}>
                </span>
                <div className="add__title">
                    Yangi bo'lim qo'shish
                </div>
                <input name='name'
                    placeholder="Bo'lim nomini yozing"
                    required
                />
                <select name="status" required>
                    <option value=''>Bo'lim xolatini belgilang</option>
                    <option value='Ish holatda'>Ish holatda</option>
                    <option value='Remont'>Tarqatildi</option>
                </select>
                <button type="submit">Qo'shish</button>
            </form>
        </>
    )
}

export default Depart