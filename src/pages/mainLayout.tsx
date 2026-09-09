import React, { Component } from 'react'
import Login from './login/LoginPage'
import { Outlet } from 'react-router'

export default class MainLayout extends Component {
  render() {
    return (
      <Outlet />
    )
  }
}
