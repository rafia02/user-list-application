import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);

  return (
    <div className=" mx-auto mt-8">
      <div className="border border-gray-300 p-8 rounded">
        <img
          src={user.image}
          alt="User Avatar"
          className="w-52 h-52 mx-auto rounded-full mb-8"
        />
        <div className="text-center">
          <h2 className="text-3xl font-semibold">
            Name : {user.firstName} {user.lastName}
          </h2>
          <p className="text-lg text-gray-600 my-1">Email : {user.email}</p>
          <p className="text-lg text-gray-600">
            Address : {user.address.address}, {user.address.city}
          </p>
          <p className="text-lg text-gray-600 mt-1">
            Company Name : {user.company.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
