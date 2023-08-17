import React,{useEffect} from "react";

const AddApi=()=>{
    const [formData,setformData]=React.useState({
        title:"",
        author:"",

    });
    const [msg,setMsg]=React.useState('')
    const handleForm=(e)=>{
        e.preventDefault();
        //console.log(formData)
        const reqObj={
            method:'POST',
            headers:{'content-Type':'application/json'},
            body: JSON.stringify(formData),
        };
        fetch("http://localhost:4000/posts",reqObj)
        .then((res)=>res.json())
        .then((result)=>{
            console.log(result);
            setMsg("data added")
            setformData({
                title:"",
                author:"",
            })
        })
    };
    const collectInput=(e)=>{
        setformData({
            ...formData,[e.target.name]:e.target.value,

    });

    };

    return<>
    <form onSubmit={handleForm}>
        <input type="text" name="title" value={formData.title} onChange={collectInput}/>
        <input type="text" name="author" value={formData.author} onChange={collectInput}/>
        <input type="submit" value="Add"/>

        
    </form>
    <h1>{msg}</h1>
    </>
};
export default AddApi;