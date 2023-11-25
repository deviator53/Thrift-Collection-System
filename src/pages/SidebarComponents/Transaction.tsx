import React from 'react'
import { UserState } from '../../redux/types'

const Transaction: React.FC<{ loggedUser: UserState }> = ({loggedUser}) => {
  return (
    <div>Transaction</div>
  )
}

export default Transaction