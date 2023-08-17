import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateApi = () => {
    const [formData, setformData] = React.useState({
        title: "",
        author: ""

    });
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/posts/${id}`)
            .then((res) => {
                return res.json()
            })
            .then((result) => {
                setformData({
                    title: result.title,
                    author: result.author,


                });
            });
    }, []);
    const [msg, setMsg] = React.useState('')
    const handleForm = (e) => {
        e.preventDefault();
        //console.log(formData)
        const reqObj = {
            method: 'PUT',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(formData),
        };
        fetch(`http://localhost:4000/posts/${id}`, reqObj)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setMsg("data added")
                setformData({
                    title: "",
                    author: "",
                })
            })
    };
    const collectInput = (e) => {
        setformData({
            ...formData, [e.target.name]: e.target.value,

        });

    };

    return <>
        <form onSubmit={handleForm}>
            <input type="text" name="title" value={formData.title} onChange={collectInput} />
            <input type="text" name="author" value={formData.author} onChange={collectInput} />
            <input type="submit" />


        </form>
        <h1>{msg}</h1>
    </>
};
export default UpdateApi;