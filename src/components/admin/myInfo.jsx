import React,{ useState , useEffect }  from 'react'
import { API_URL, doApiMethodToken,TOKEN_ROLE } from '../../services/service';
function MyInfo() {
    const [user,setUser] = useState({});
    useEffect(() => {
        doApi();
      },[])

    
    const doApi = async() => {
        let url=API_URL+"/users/myinfo"
        try{
          let {data} = await doApiMethodToken(url,"GET");
          console.log(data);
           setUser(data);
        }
        catch(err){
          console.log(err);
          alert("there problem ,try again later")
        }

    }
      

  return (
    <div className='container text-center'>
        <h1>My Info</h1>
        {user.email&&
        <div className='card shadow py-2 px-3'>
        <h4>first name : {user.fullName.firstName}</h4>
        <h4>last name : {user.fullName.lastName}</h4>
        <h4>email : {user.email}</h4>
        <h4>role : {user.role}</h4>
        </div>
        }

    </div>
  )
}

export default MyInfo