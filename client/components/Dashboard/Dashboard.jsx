import React from 'react'
import { Route, Link } from "react-router-dom"

import SideMenu from '../SideMenu/SideMenu.jsx'
import AuthedHeader from '../AuthedHeader/AuthedHeader.jsx'
import RunList from '../RunList/RunList.jsx'

export default class Dashboard extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      menuOpen: false
    };

    ([]).forEach((funcName)=>{
      this[funcName] = this[funcName].bind(this)
    })
  }

  componentWillMount(){
    //check login
  }

  render(){
    return (<div className="dashboard">
      <AuthedHeader />
      <SideMenu />
      <div className="pageContent container">
        {/* we omit the '/' because that's the base path here */}
        <Route exact path={`${this.props.match.url}dashboard`} component={DashboardContent} />
        <Route path={`${this.props.match.url}runs`} component={RunList} />
      </div>
    </div>)
  }
}

function DashboardContent(){
  return (<React.Fragment>I AM DASHBOARD CONTENT</React.Fragment>)
}