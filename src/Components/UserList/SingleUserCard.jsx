import React from 'react'

const SingleUserCard = ({ user }) => {

  return (
    <div className="border border-gray-300 p-4 rounded">
    <img src={user.image} alt="User Avatar" className="w-20 h-20 mx-auto rounded-full mb-4" />
    <div className="text-center">
      <h2 className="text-lg font-semibold">{user.firstName} {user.lastName}</h2>
      <p className="text-sm text-gray-600">Email : {user.email}</p>
      <p className="text-sm text-gray-600">{user.address.address}, {user.address.city}</p>
      <p className="text-sm text-gray-600">Company Name : {user.company.name}</p>
    </div>
  </div>
  )
}

export default SingleUserCard