import React from 'react';
import AddNewCards from './AddNewCards';
import { FaUserFriends, FaMapMarkerAlt, FaShoppingCart, FaCalendarCheck } from 'react-icons/fa';
import { IoMdAddCircle } from "react-icons/io";


import { BsPeopleFill } from "react-icons/bs";
import { MdPlace } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";
const Listings = () => {
  const listingsData = [
    {
      icon: <FaUserFriends  />,
      title: 'People',
      description: 'An Individual or Organization. Teacher, Coach, Professional or Online Seller. Company, Business or Association.',
      borderColor: 'border-purple-700',
      color: 'bg-purple-700'
    },
    {
      icon: <FaMapMarkerAlt  />,
      title: 'Place',
      description: 'An Address. Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.',
      borderColor: 'border-green-700',
      // color: 'bg-green-700'
    },
    {
      icon: <FaShoppingCart  />,
      title: 'Product',
      description: 'An Item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher. Equipment, Instrument or Activity Kit.',
      borderColor: 'border-red-700',
      // color: 'bg-red-700'

    },
    {
      icon: <FaCalendarCheck />,
      title: 'Program',
      description: 'An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition, Performance or Competition.',
      borderColor: 'border-blue-700',
      // color: 'bg-blue-700'
    },
  ];

  // return (
  //   <div className="w-7/12 px-10 mx-auto bg-white container py-10 ">
  //     <h1 className="text-3xl font-bold text-center mb-10 flex gap-2 justify-center items-center"><IoMdAddCircle className='text-blue-500 text-4xl'></IoMdAddCircle>Add Your Listing</h1>
  //     {/* <div className="grid gap-8 md:grid-cols-2">
  //       {listingsData.map((listing, index) => (
    
  //           <AddNewCards
  //           key={index}
  //           icon={listing.icon}
  //           title={listing.title}
  //           description={listing.description}
  //           borderColor={listing.borderColor}
  //           // color ={listing.color}
  //         />
  //       ))}
  //     </div> */}

      
  //   </div>
  // );


  return(
    <div className="h-fit py-40 bg-gray-50 p-6 flex flex-col items-center">
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="p-6 bg-white border-2 border-purple-700 rounded-lg shadow-lg hover:bg-purple-700 group ">
          <div className="flex items-center mb-4 gap-3">
           <BsPeopleFill className='text-3xl text-purple-700 group-hover:text-white'></BsPeopleFill>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-white">People</h3>
          </div>
          <p className="text-gray-600 mb-4 group-hover:text-white">
            Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.
          </p>
        </div>
        <div className="p-6 bg-white border-2 border-green-700 rounded-lg shadow-lg hover:bg-green-700 group">
          <div className="flex items-center mb-4 gap-3">
          <MdPlace className='text-3xl text-green-500 group-hover:text-white'></MdPlace>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-white">Place</h3>
          </div>
          <p className="text-gray-600 mb-4 group-hover:text-white">
            Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.
          </p>
         
        </div>
        <div className="p-6 bg-white border-2 border-amber-700 rounded-lg shadow-lg hover:bg-amber-700 group">
          <div className="flex items-center mb-4 gap-3">
           <FaBagShopping className='text-2xl group-hover:text-white text-amber-700'></FaBagShopping>
            <h3 className="text-xl font-bold group-hover:text-white text-gray-800">Product</h3>
          </div>
          <p className="text-gray-600 mb-4 group-hover:text-white">
            Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.
          </p>
        
        </div>
        <div className="p-6 bg-white   border-2 border-blue-700 rounded-lg shadow-lg hover:bg-blue-700 group">
          <div className="flex items-center mb-4 gap-3">
            <FaRegCalendarCheck className=' group-hover:text-white text-2xl text-blue-700'></FaRegCalendarCheck>
            <h3 className="text-xl font-bold group-hover:text-white text-gray-800">Program</h3>
          </div>
          <p className="text-gray-600 mb-4 group-hover:text-white">
            Find events, meetups and workshops related to your hobby. Register or buy tickets online.
          </p>
       
        </div>
      </div>
    </div>
  )
};

export default Listings;
