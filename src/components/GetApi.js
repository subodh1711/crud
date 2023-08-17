import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

const GetApi=()=>{
    const [postsdata,setData]=React.useState([]);
    const [msg, setMsg] = useState('');

   
    useEffect(() => {
        get();
      }, []);
      const get = () => {
        fetch('http://localhost:4000/posts')
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            console.log(result);
            setData(result);
          });
      };
    if (postsdata==null){
        return<p>loading....</p>
    }
    const deleteform = (e) => {
        if (window.confirm('Are you sure want to delete?')) {
          fetch(`http://localhost:4000/posts/${e.target.name}`, {
            method: 'DELETE',
          })
            .then((res) => res.json)
            .then((result) => {
              setMsg('data deleted');
              get();
              
            });
        }
        
      };
return <>
<table>
    <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>
        <th>Delete</th>

    </tr>
    { postsdata   &&   postsdata.map((data,i)=>{
            return(
                <tr key={i}>
                    <td>{data.title}</td>
                    <td>{data.author}</td>
                    <td><Link to={`/update/${data.id}`}><button>Edit</button></Link></td>
                    <td>
                <Link to="/">
                  <button onClick={deleteform} name={data.id}>
                    Delete
                  </button>
                </Link>
              </td>

                </tr>
            )
        })
    }
</table>
<p>{msg}</p>
</>
};
export default GetApi;