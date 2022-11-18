import React , {useState , useEffect} from 'react'
import { API_URL , doApiMethodToken,TOKEN_ID } from '../../services/service';
import ToyItem from './toyItem';


export default function MyToysList() {
    const [ar,setAr] = useState([]);

    
    useEffect(() => {
        doApi();
      },[])
    

      const doApi = async() => {
        let url = API_URL+"/toys/toybyid/"+localStorage.getItem(TOKEN_ID);
        try{
          let resp = await doApiMethodToken(url,"GET");
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
            <h1>MY TOYS :</h1>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>category</th>
              <th>price</th>
              <th>info</th>
              <th>img_url</th>
            </tr>
          </thead>
          <tbody>
            {ar.map((item,i) => {
              return(
                <ToyItem key={item._id} doApi={doApi} index={i} item={item}/>
              )
            })}
          </tbody>
        </table>
    </div>
  )
}
