import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import { useDispatch } from 'react-redux';
import { setLoading, setUserData } from '../../../Slice/UserSlice';
import Loader from '../../../Component/Loader';
import toast from 'react-hot-toast';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const getAllUserData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://602e7c2c4410730017c50b9d.mockapi.io/users'
      );
      let result = response.data.reverse();
      const userData = {
        ...result[0],
        phoneNumber: 9878642475,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      dispatch(setUserData(userData));
      setUsers(result);
      setFilteredUsers(result);
      setLoading(false);
    } catch (e) {
      console.log('Error while getting user data', e);
      toast.error("Error while getting user data");
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  useEffect(() => {
    const results = users.filter(user =>
      (user.profile.firstName + " " + user.profile.lastName).toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchTerm, users]);

  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredUsers(users);
  };

  return (
    <div className="p-4 relative">
      {loading && <div className='absolute top-[50%] -translate-x-[50%] left-[50%]'><Loader /></div>}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">User List</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add User
        </button>
      </div>
      <div className="mb-4 flex flex-wrap gap-2 bg-white py-3 px-2 rounded-lg">
        <button className="bg-blue-700 text-white px-4 py-2 rounded">LIST</button>
        <button className="bg-gray-200 px-4 py-2 rounded">GRID</button>
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-2 py-1 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={handleClearSearch}
            >
              &times;
            </button>
          )}
        </div>
        <select className="border rounded px-2 py-1">
          <option>Select Jobtitle</option>
        </select>
        <select className="border rounded px-2 py-1">
          <option disabled selected hidden>Select Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
      <div className="bg-white border-gray-200 rounded-md overflow-hidden">
        <div className="hidden md:flex bg-gray-100 border-b md:items-center text-right">
          <div className="w-1/4 px-6 py-3">Name</div>
          <div className="w-1/4 px-6 py-3">Email</div>
          <div className="w-1/4 px-6 py-3">Phone No.</div>
          <div className="w-1/4 px-6 py-3">Status</div>
        </div>
      </div>
      <div className='h-[calc(100vh-15rem)] overflow-y-scroll'>
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
