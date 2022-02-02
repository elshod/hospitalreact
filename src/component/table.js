import React from "react";
import { Link } from "react-router-dom";

const Table = ({title,data,option,del}) => {
    
    
    return (
        <div className="info">
            <div className="info__title" 
            style={{padding: `${title ? '24px':'0px'}` }}>
                {title}
            </div>
            <table>
                <thead>
                    <tr>
                        {Object.keys(option).map(
                            (key,index)=>(
                                <th key={index}>{option[key]}</th>
                            )
                        )}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((doctor,dindex) => {
                            return (
                                <tr key={dindex}>
                                    {Object.keys(option).map(
                                        (key,index)=>(
                                            <td key={index}>{doctor[key]}</td>
                                        )
                                    )}
                                    <td>
                                        <button 
                                            onClick={()=>{del(doctor.id)}}
                                        >
                                            <img src={require('../assets/img/delete.png')}/>
                                        </button>
                                    </td>

                                </tr>
                            )
                            
                        }
                    )}

                </tbody>
            </table>
        </div>
    )
}

export default Table