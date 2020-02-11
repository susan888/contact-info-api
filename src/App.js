import React from 'react';
import './App.css';
import Main from './components/Main'
import Header from './components/Header'
import DetailInfo from './components/DetailInfo'

function withHeader(Component){
  return function(props){
    return (
      <React.Fragment>
        <Header title = 'Contact Info' />
        <Component {...props} clicked = { props.clicked } />
      </React.Fragment>
    );
  };
}

const EnhancedPage = withHeader(Main);

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      users: [
        {
          "id": 1,
          "email": "jaydon_gislason59@yahoo.com",
          "phone": "(998) 970-2799",
          "address": {
            "city": "South Nyah",
            "state": "New York",
            "country": "Equatorial Guinea",
            "zipCode": "16308-9260",
            "countryCode": "AX",
            "streetAddress": "3585 Lucinda Valleys"
          },
          "lastName": "Von",
          "firstName": "Walter",
          "profileImage": "https://s3.amazonaws.com/uifaces/faces/twitter/jeremyworboys/128.jpg"
        },
        {
          "id": 2,
          "email": "jaydon_gislason59@yahoo.com",
          "phone": "(998) 970-2799",
          "address": {
            "city": "South Nyah",
            "state": "New York",
            "country": "Equatorial Guinea",
            "zipCode": "16308-9260",
            "countryCode": "AX",
            "streetAddress": "3585 Lucinda Valleys"
          },
          "lastName": "Von",
          "firstName": "Walter",
          "profileImage": "https://s3.amazonaws.com/uifaces/faces/twitter/jeremyworboys/128.jpg"
        }
      ],
      isLoaded: false,
      detailClicked: false,
      detailClickedValue: 1
    }
  }
  clicked = (id) =>{
    this.setState({detailClicked: !this.state.detailClicked, detailClickedValue: id})
    console.log(id)
  }
  goBack = () =>{
    console.log('clicked')
    this.setState({detailClicked: !this.state.detailClicked, detailClickedValue: null})
  }
  render(){
    return (
      <div className="App">
        { this.state.isLoaded === true ?  this.state.detailClicked ? 
        <DetailInfo user = { this.state.users.filter((user) =>{
          return user.id === this.state.detailClickedValue; }) } goBack = { this.goBack }/> : 
        <EnhancedPage users = {this.state.users} clicked = { this.clicked } /> : 
        <div>
          <Header title = 'People' /> 
          <p style={{paddingTop: '70px', fontSize: '20px'}} >Data is loading...</p> 
        </div> 
        }
      </div>
    );
  }
  componentDidMount(){
    return fetch("https://mock-io.herokuapp.com/users").then((response) => response.json()).then((resJson) =>{
      this.setState({users: [...resJson], isLoaded: true})
    })
    .catch((error) =>{
      console.log(error);
    })
  }
}