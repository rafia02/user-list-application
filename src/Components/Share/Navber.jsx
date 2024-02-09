import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div className="flex py-1 justify-between items-center ">
      <Link to="/">
        <div>
          <img
            className="h-14 w-32 md:h-20 md:w-40"
            src="https://images.ctfassets.net/h6ufgtwb6nv1/1LIuDAS2s0VGFMVqQ13WZb/209d7d9e123c113f13731956c46941cb/Userlist_Logo_Vector.svg?w=384&q=75"
            alt=""
          />
        </div>
      </Link>

      <div className="flex justify-between items-center">
        <Link to="/" className="text-sm md:text-lg font-semibold mx-4">
          Users
        </Link>
        <Link to="/addUser" className="text-sm md:text-lg font-semibold mx-4">
          Add User
        </Link>
        {/* <Link to="/favorite" className='text-sm md:text-lg font-semibold mx-4' >Fovorite </Link> */}
      </div>
    </div>
  );
};

export default Navber;
