import React from 'react'
import { API_URL, doApiMethodToken, doApiMethodTokenPatch } from '../../services/service';

export default function UserItem(props) {
  let item = props.item;
  // משנה תפקיד של משתמש
  const onRoleClick = async () => {
    let bodyData;
    if (item.role == "user") {
      bodyData = { role: "admin" }
    }
    else if (item.role == "admin") {
      bodyData = { role: "user" }
    }
    let url = API_URL + "/users/changeRole/" + item._id;
    try {

        let resp = await doApiMethodTokenPatch(url, "PATCH", bodyData)
        console.log(resp.data)
        if (resp.data) {

          props.doApi()
        }
    }
    catch (err) {
      console.log(err.response);
      alert("There problem, or you try to change superAdmin to user");
    }
  }
  const ondDelClick = async () => {

    let url = API_URL + "/users/" + item._id;
    try {
      
      let resp = await doApiMethodToken(url, "DELETE", {})
      console.log(resp.data)

      props.doApi()

    }
    catch (err) {
      console.log(err.response);
      alert("There problem, or you try to change superAdmin to user");
    }
  }

  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
        <button onClick={onRoleClick}>
          {item.role}
        </button>
      </td>
      <td>
        <button className='badge bg-danger' onClick={ondDelClick}>Del</button>
      </td>
    </tr>
  )
}
