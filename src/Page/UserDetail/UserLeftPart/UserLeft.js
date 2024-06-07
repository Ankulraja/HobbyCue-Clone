import { useDispatch, useSelector } from "react-redux";
import { MdModeEditOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { setLoading, setSideBar, setUserData } from "../../../Slice/UserSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
const UserLeft = () => {
  const { loading, userData } = useSelector((state) => state.user);
  console.log("............", loading, userData);
  const dispatch =useDispatch();
  return (
    <div className="w-11/12 bg-[rgb(0,0,0)] text-white  mx-auto h-full py-10">
      <div onClick={()=>{dispatch(setSideBar(false))}} className="absolute right-[8%] top-[2%] text-2xl"><RxCross2></RxCross2></div>
      <div className="relative w-8/12 rounded-full mx-auto">
        <img
          className="w-full h-full rounded-full"
          src={userData?.avatar}
          alt="loading..."
        ></img>
        <div className="absolute bottom-[5%] cursor-pointer text-black right-[10%] rounded-full bg-white py-2 px-2 ">
          <MdModeEditOutline></MdModeEditOutline>
        </div>
      </div>
      <div className="w-11/12 mx-auto text-center py-10">
        <h2 className="font-bold text-2xl">
          {userData?.profile?.firstName + " " + userData?.profile?.lastName}
        </h2>
        <p className="text-[12px] text-gray-200">{userData?.profile?.username}</p>
      </div>
      <div className="w-11/12 mx-auto flex py-2 items-center gap-3">
        <i className="text-blue-300 text-2xl">
          <MdEmail></MdEmail>
        </i>
        <p className="hover:text-blue-500"><a href={`mailto:${userData?.profile?.email}`}>{userData?.profile?.email}</a></p>
    
      </div>
      <div className="w-11/12 mx-auto flex py-2 items-center gap-3">
        <i className="text-blue-300 text-2xl">
          <FaPhoneAlt></FaPhoneAlt>
        </i>
        <p className="hover:text-blue-500"><a href={`tel:+${userData?.profile?.email}`}>{userData?.phoneNumber}</a></p>

      </div>
      <div className="w-11/12 mx-auto py-5 text-gray-200">
        <h1>
          {userData?.Bio +
            ` Hello this is ${
              userData?.profile.firstName + " " + userData?.profile?.lastName
            } with a working proffession on " ${
              userData?.jobTitle
            } " and I am seeing to work on a good competative enviornment,Where i improve my self under a experience team`}
        </h1>
      </div>
    </div>
  );
};
export default UserLeft;
