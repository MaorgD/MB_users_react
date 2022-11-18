import React from 'react'
import { API_URL, doApiMethodToken ,TOKEN_ID,TOKEN_ROLE} from '../../services/service';

export default function ToyItem(props) {

  const onDelClick = async() =>{
    if(window.confirm("Are you sure you want to delete: "+item.name)){
      try{
        let url = API_URL+"/toys/"+item._id;
        let resp = await doApiMethodToken(url,"DELETE");
        console.log(resp.data);
        if(resp.data.deletedCount == 1){
          props.doApi();
        }
      }
      catch(err){
        console.log(err.response);
        alert("There problem , try again later")
      }

    }
  }

  let item = props.item;
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td title={item.id}>{item.name}</td>
      <td>{item.category}</td>
      <td>{item.price}</td>
      <td>{item.info} nis</td>
      <td>{item.img_url } </td>
      
      {(localStorage.getItem(TOKEN_ROLE)=="admin"||localStorage.getItem(TOKEN_ID)==item.user_id)&&<td>
        <button onClick={() => {onDelClick()}} className='btn btn-danger'>Del</button>
      </td>}
    </tr>
  )
}