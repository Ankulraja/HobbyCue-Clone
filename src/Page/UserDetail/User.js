import { useSelector } from "react-redux";
import UserLeft from "./UserLeftPart/UserLeft";
import UserRight from "./UserRightPart/UserRight";

const User = () => {
  const { sideBar } = useSelector((state) => state.user);
  console.log("Sidebar......", sideBar);

  return (
    <div className="flex relative">
      <div
        className={`w-[500px] max-lg:${sideBar ? "block" : "hidden"} lg:block z-40 bg-gray-200 min-h-[calc(100vh-4rem)] `}
      >
        <UserLeft />
      </div>
      <div
        className={`w-full  bg-gray-200 h-[calc(100vh-4rem)] ${sideBar && 'max-lg:hidden'}`}
      >
        <UserRight />
      </div>
    </div>
  );
};

export default User;
