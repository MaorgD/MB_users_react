import React,{ useState , useEffect }  from 'react'
import { API_URL, doApiMethodToken } from '../../services/service';
import UserItem from './userItem';


export default function UsersList() {
    const [ar,setAr] = useState([]);
  
    useEffect(() => {
      doApi();
    },[])
  
    const doApi = async() => {
      let url = API_URL+"/users/usersList";
      try{
        let resp = await doApiMethodToken(url);
        console.log(resp.data);
        setAr(resp.data);
      }
      catch(err){
        console.log(err);
        alert("there problem ,try again later")
      }
  
    }
  
  
    return (
      <div className='container'>
        <h1>List of users in systems</h1>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {ar.map((item,i) => {
              return(
                <UserItem key={item._id} doApi={doApi} index={i} item={item}/>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
  