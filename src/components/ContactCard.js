import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email ,number} = props.contact;
  return (
    <div className="row">

   
    <table >
    <tr >
      <td >{name}</td>
      <td >{number}</td>
      <td >{email}</td>
    </tr>
  </table>
  </div>
  );
};
/*
<div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
        <div>{number}</div>
      </div>
    </div>
    */
export default ContactCard;
