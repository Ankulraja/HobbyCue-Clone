import { BsPeopleFill } from "react-icons/bs";
import { MdPlace } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";
const Cards = ({ title, description, btnText, color, svgFile }) => {
  return (
    <div className="p-6 border border-gray-400 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <svg
          className={`"w-6 h-6 ${color} mr-2"`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={svgFile}
          />
        </svg>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-transparent max-md:w-full  text-purple-700 border border-purple-700 hover:bg-purple-500 hover:text-white font-bold py-2 px-4 rounded">
        {btnText}
      </button>
    </div>
  );
};
export default Cards;
