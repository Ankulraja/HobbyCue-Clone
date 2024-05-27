import React from 'react';

const AddNewCards = ({ icon, title, description, borderColor,color}) => {

  const cardClasses = `
    flex flex-col group border-2 rounded-lg p-5 transition-transform transform hover:scale-105
    ${borderColor} 
  `;

  return (
    <div className={cardClasses}>
      <div className="flex items-center mb-3 ">
        <div className="text-3xl mr-3">{icon}</div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p className="">{description}</p>
    </div>
  );
};

export default AddNewCards;
