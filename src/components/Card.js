import React from 'react'
import profileImage from '../images/profileImage.png'

export default class List extends React.Component{
  render(){
    const { user } = this.props;
    return(
      <li key = { user.id } title = "Click to see more details" onClick = { this.props.clicked.bind(this, user.id) }>
        <img src = { user.profileImage } alt = { profileImage } />
        <p>{ user.firstName + ' ' + user.lastName }</p>
        <p>{ 'Contact No: ' + user.phone }</p>
        <p>{ "Email: " + user.email } </p>
      </li>
    )
  }
}