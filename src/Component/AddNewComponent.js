import React from 'react';
import AddNewCards from './AddNewCards';
import { FaUserFriends, FaMapMarkerAlt, FaShoppingCart, FaCalendarCheck } from 'react-icons/fa';
import { IoMdAddCircle } from "react-icons/io";
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

  return (
    <div className="w-7/12 px-10 mx-auto bg-white container py-10 ">
      <h1 className="text-3xl font-bold text-center mb-10 flex gap-2 justify-center items-center"><IoMdAddCircle className='text-blue-500 text-4xl'></IoMdAddCircle>Add Your Listing</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {listingsData.map((listing, index) => (
    
            <AddNewCards
            key={index}
            icon={listing.icon}
            title={listing.title}
            description={listing.description}
            borderColor={listing.borderColor}
            // color ={listing.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Listings;
