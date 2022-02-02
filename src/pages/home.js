import React from "react";
import Stat from "../component/home/stat";
import Table from "../component/table";

const Home = () => {

    const pdata = [
        {
            name: 'Rustamov Aziz',
            email: 'aziz@gmail.com',
            doctor: 'Ergashev Tohir',
            reason: 'Bosh ogrigi',
            data: '02/02/2022'
        },
        {
            name: 'Rustamov Aziz',
            email: 'aziz@gmail.com',
            doctor: 'Ergashev Tohir',
            reason: 'Bosh ogrigi',
            data: '02/02/2022'
        },
        {
            name: 'Rustamov Aziz',
            email: 'aziz@gmail.com',
            doctor: 'Ergashev Tohir',
            reason: 'Bosh ogrigi',
            data: '02/02/2022'
        },
    ]

    const poption = {
        name: 'F.I.O',
        email: 'Email',
        doctor: 'Davolayotgan shifokori',
        reason: 'Tashrif sababi',
        data: 'Tashrif sanasi'
    }

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
            <Stat/>
            <Table title='Bemorlar ro`yhati' data={pdata} 
            option={poption}/>
            <Table title='Shifokorlar' data={data} 
            option={option}/>

        </>
    )
}

export default Home