import React from 'react'
import Header from './Header'
import profileImage from '../images/profileImage.png'

export default class DetailInfo extends React.Component{
  
  render(){
    const { user } = this.props;
    const { address } = user[0];
    return(
      <div className = 'person-detail'>
        <Header title = { user[0].firstName + ' ' + user[0].lastName } userDetail = { true } goBack = { this.props.goBack } />
        <div className = "main-person-detail">
          <div className = "main-person-image">
            <div className = "background-cover">
              <img src = { user[0].profileImage } alt = { profileImage } />
            </div>
            <img src = { user[0].profileImage } alt = { profileImage } />
          </div>
          <div className = 'detail-margin'>
            <label className ="border">Address </label>
            <label>City </label><p>{ address.city }</p>
            <label>State </label><p>{ address.state }</p>
            <label>Country </label><p>{ address.country }</p>
            <label>Street Address </label><p>{ address.streetAddress }</p>
            <label>Zip Code | Country Code </label><p>{ address.zipCode + ' | ' + address.countryCode }</p>
            <label className ="border">Contact </label>
            <label>Phone No. </label><p>{ user[0].phone }</p>
            <label>Email </label><p>{ user[0].email }</p>
          </div>
        </div>
      </div>
    )

  }
}