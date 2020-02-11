import React from 'react'
import Card from './Card'

export default class Main extends React.Component{
  render(){
    return(
      <div className = 'flex-container main-container'>
        <ul className = 'list-style first-element'>
          { this.props.users.map((user) =>{
          return <Card key = { user.id } user = { user } clicked = { this.props.clicked } />})}
        </ul>
      </div>
    )
  }
}