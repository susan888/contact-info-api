import React from 'react'

export default class Header extends React.Component{
  render(){
    return(
      <header>
        {this.props.userDetail ? <div><i className="fa fa-arrow-left" onClick = { this.props.goBack }></i></div> : false }
        <p className = { this.props.userDetail ? 'detailActive' : '' } >{ this.props.title }</p>
      </header>
    )
  }
}