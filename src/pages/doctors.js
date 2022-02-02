import React from "react";
import Table from "../component/table";

const Doctors = () => {

    const data = [
        {
            name: 'Ronald Richards',
            email: 'ronald.richards@example.com',
            recep: '12:00-12:45pm',
            spec: 'Nevrolog',
            depart: 'Nevrologiya'
        },
        {
            name: 'Ronald Richards',
            email: 'ronald.richards@example.com',
            recep: '12:00-12:45pm',
            spec: 'Nevrolog',
            depart: 'Nevrologiya'
        },
        {
            name: 'Ronald Richards',
            email: 'ronald.richards@example.com',
            recep: '12:00-12:45pm',
            spec: 'Nevrolog',
            depart: 'Nevrologiya'
        },
    ]

    const option = {
        name: 'F.I.O',
        email: 'Email',
        recep: 'Qabul vaqti',
        spec: 'Mutaxassislik',
        depart: 'Bo`lim'
    }

    return (
        <>
            <h1>Shifokorlar ro'yhati</h1>
            <Table data={data} option={option}/>
        </>
    )
}

export default Doctors