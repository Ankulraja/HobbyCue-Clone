import React, { useState } from "react";
import { setSideBar, setUserData } from "../../../Slice/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import './UserCard.css'; // Assuming you have a separate CSS file

const UserCard = ({ user }) => {
  const [showFullDesignation, setShowFullDesignation] = useState(false);
  const dispatch = useDispatch();
  const { sideBar } = useSelector((state) => state.user);
  const toggleDesignation = () => {
    setShowFullDesignation(!showFullDesignation);
  };

  const truncatedDesignation =
    user?.jobTitle?.length > 25
      ? `${user.jobTitle.substring(0, 25)}...`
      : user.jobTitle;

  let phoneNumber = Math.floor(
    Math.random() * (9999999999 - 6999999999) + 6999999999
  );
  let statusCheck = Math.floor(Math.random() * (2 - 0) + 0);

  const clickHandler = () => {
    dispatch(setSideBar(!sideBar));
    const userData = {
      ...user,
      phoneNumber: phoneNumber,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    dispatch(setUserData(userData));
  };

  return (
    <div
      onClick={clickHandler}
      className="user-card flex bg-white cursor-pointer items-center flex-row md:flex-row md:items-center border-b py-4 px-6"
    >
      <img
        className="w-10 h-10 rounded-full mr-4"
        src={user.avatar}
        alt={user.firstName}
      />
      <div className="flex-1 ">
        <div className="font-medium ">
          {user.profile.firstName + " " + user.profile.lastName}
        </div>
        <div className="text-sm w-full text-gray-500">
          {showFullDesignation ? user.jobTitle : truncatedDesignation}
          {user.jobTitle.length > 25 && (
            <span
              className="text-blue-600 cursor-pointer"
              onClick={toggleDesignation}
            >
              {showFullDesignation ? "" : "..."}
            </span>
          )}
        </div>
      </div>
      <div className="hidden md:block w-1/4 flex-1">{user.profile.email}</div>
      <div className="hidden md:block w-1/4 flex-1">{phoneNumber}</div>
      <div>
        <span
          className={`${
            statusCheck === 1 ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"
          } w-1/4 px-2 py-1 rounded-full`}
        >
          {`${statusCheck === 1 ? "Active" : "Inactive"}`}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
