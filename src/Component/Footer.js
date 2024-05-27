// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-10 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold mb-4">Hobbycue</h2>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Our Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Work with Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">How Do I</h2>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Sign Up</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Add a Listing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Claim Listing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Post a Query</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Add a Blog Post</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Other Queries</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Quick Links</h2>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Listings</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog Posts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Shop / Store</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Community</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Social Media</h2>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-pinterest"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-google"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-telegram"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fas fa-envelope"></i></a>
            </div>
            <div>
              <h2 className="font-bold mb-2">Invite Friends</h2>
              <form className="flex">
                <input type="email" className="border border-gray-300 rounded-l px-4 py-2 w-full" placeholder="Email ID" />
                <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-r">Invite</button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
      <div className="text-center py-3 bg-[rgb(242,231,242)] mt-10 text-gray-500">
          © Purple Cues Private Limited
        </div>
    </footer>

  );
}

export default Footer;
