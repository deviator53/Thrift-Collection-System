import React from 'react'
import { UserState } from '../../redux/types'

const Services: React.FC<{ loggedUser: UserState }> = ({loggedUser}) => {
  return (
    <div>Services</div>
  )
}

export default Services