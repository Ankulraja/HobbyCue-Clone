import React from "react";

const Testimonial = () => {
  return (
    <div className=" w-9/12 max-md:w-10/12 max-sm:w-11/12 bg-gray-100 py-5 px-8 rounded-md">
      <h2 className="text-2xl font-semibold text-purple-600 mb-4">
        Testimonials
      </h2>
      <p className="text-gray-700 mb-4">
        In a fast-growing and ever-changing city like Bangalore, it sometimes
        becomes very difficult to find or connect with like-minded people.
        Websites like hobbycue.com are a great service that helps me get in
        touch with, communicate, connect, and exchange ideas with other dancers.
        It also provides the extra benefit of finding products and services I
        can avail of, which I can be assured will be of great quality as it
        comes recommended by people in the hobbycue community. To have
        discussions, gain visibility, and safely explore various hobbies and
        activities in my city, all under one roof, is an excellent idea, and I
        highly recommend it.
      </p>

      <div className=" flex max-md:flex-col-reverse  gap-4">
        <div className="w-2/3 max-md:w-full mx-auto bg-purple-200 p-4 rounded-lg flex items-center space-x-4">
          <button className="bg-white p-2 rounded-full focus:outline-none">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 4l8 6-8 6V4z" />
            </svg>
          </button>
          <div className="flex-grow">
            <div className="relative">
              <div className="w-full h-1 bg-white rounded-full">
                <div
                  className="h-1 bg-purple-600 rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
              <div className="absolute left-0 top-0 w-full h-full flex justify-between items-center">
                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
              </div>
            </div>
          </div>
          <img
            className="w-12 h-12 rounded-full"
            src="https://i0.wp.com/pixahive.com/wp-content/uploads/2021/05/Indian-classical-dancer-443065-pixahive.jpg?fit=2560%1825&ssl=1"
            alt="Shubha Nagarajan"
          />
        </div>

        <div className="w-fit max-md:w-full flex items-center space-x-4">
          <img
            className="w-16 h-16 rounded-full"
            src="https://i0.wp.com/pixahive.com/wp-content/uploads/2021/05/Indian-classical-dancer-443065-pixahive.jpg?fit=2560%1825&ssl=1"
            alt="Shubha Nagarajan"
          />
          <div className="">
            <h3 className="text-lg font-semibold text-gray-800">
              Shubha Nagarajan
            </h3>
            <p className="text-purple-600">Classical Dancer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
