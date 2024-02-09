import React, { useState } from "react";
import toast from "react-hot-toast";

const AddUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    company: "",
    url : ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  
  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('formData', formData);

    fetch(`https://dummyjson.com/users/`,
    {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            company: '',
            url : ''
          });
toast.success('Successfully add new user :) ')


    })
    .catch(e => console.error(e))
    // Reset form data
    



  };


  return (
    <div className="my-8 border shadow-md p-5 md:p-8 md:w-2/3 mx-auto">
               <h2 className="text-2xl uppercase text-center font-semibold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="flex flex-col  p-4 rounded">
   
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            className="border border-gray-300 rounded px-4 py-2 mb-4"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            className="border border-gray-300 rounded px-4 py-2 mb-4"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="border border-gray-300 rounded px-4 py-2 mb-4"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address"
            className="border border-gray-300 rounded px-4 py-2 mb-4"
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Company"
            className="border border-gray-300 rounded px-4 py-2 mb-4"
          />
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleInputChange}
            placeholder="Image Url"
            className="border border-gray-300 rounded px-4 py-2 mb-4"
          />
          <button type="submit" className="bg-blue-500 font-bold hover:bg-blue-700 duration-300 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
  );
};

export default AddUser;
