import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../Share/Spinner";

const SingleUserCard = ({ user }) => {
  console.log(user);

  if (!user) {
    return <Spinner></Spinner>;
  }

  return (
    <Link to={`user/${user.id}`}>
      <div className="border border-gray-300 p-4 rounded">
        <img
          src={user.image}
          alt="User Avatar"
          className="w-20 h-20 mx-auto rounded-full mb-4"
        />
        <div className="text-center">
          <h2 className="text-lg font-semibold">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-sm text-gray-600">Email : {user.email}</p>
          <p className="text-sm text-gray-600">
            {user.address.address}, {user.address.city}
          </p>
          <p className="text-sm text-gray-600">
            Company Name : {user.company.name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleUserCard;
