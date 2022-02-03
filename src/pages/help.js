import React, {useState} from "react";


const Help = () => {

    const [person, setPerson] = useState({
        ism: '',
        yosh: '',
        raqam: ''
    })

    const setData = (e) => {
        e.preventDefault()
        let user = {}
        let form = document.forms.person 

        let formData = new FormData(form)
        formData.forEach((data,key) => {
            user[key] = data
        })
        setPerson(user)
        
    }


    return (
        <>
            {console.log(person)}    
            <form 
                onSubmit={(event)=>setData(event)}
                name="person"
                >
                <input name='ism' />
                <input name='yosh' />
                <input name='raqam' />
                <button type="submit">Kirit</button>
            </form>

        </>
    )
}

export default Help