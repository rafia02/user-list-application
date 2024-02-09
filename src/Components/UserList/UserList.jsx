import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SingleUserCard from "./SingleUserCard";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => setUsers(response.data.users))
      .catch(error => console.error('Error fetching users: ', error));
  }, []);

//   const {
//     data: users = [],
//     refetch,
//     isLoading,
//   } = useQuery({
//     queryKey: [],
//     queryFn: async () => {
//       const res = await fetch(
//         `https://doodleincblog.vercel.app/comment/${blogId}`
//       );
//       const result = await res.json();
//       return result;
//     },
//   });
console.log(users)

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const sortedUsers = filteredUsers.sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.firstName.localeCompare(b.firstName);
      case "email":
        return a.email.localeCompare(b.email);
      case "company":
        return a.company.name.localeCompare(b.company.name);
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mt-8">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded px-4 py-2"
        />
        <select
          value={sortBy}
          onChange={handleSort}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="">Sort by...</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="company">Company</option>
        </select>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {sortedUsers.map((user) => (
          <Link key={user.id} to={`/user/${user.id}`}>
            <SingleUserCard user={user}></SingleUserCard>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link
          to="/add-user"
          className="bg-blue-500 text-white px-4 py-2 rounded">
          Add User
        </Link>
      </div>
    </div>
  );
};

export default UserList;