import React from 'react'

export const Footer = () => {
 let footerStyle={
  position:"relative",
  top: "100vh",
  width:"100%"
  }

  return (
    <div className='bg-dark text-light text-center' style={footerStyle}>
      Copyright &copy; MyTodolist.com
    </div>
  )
}
