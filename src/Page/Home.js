import React from "react";
import Signup from "../Component/Signup";
import LightblueText from "../Component/LightblueText";
import LightPurpleText from "../Component/LightPurpleText";
import Cards from "../Component/Section-2/Cards";
import Testimonial from "../Component/Testimonial";
import CommunitySection from "../Component/CommunitySection";
import Footer from "../Component/Footer";

const SignInPage = () => {
  return (
    <div>
      <section className="flex bg-[rgb(237,231,238)] flex-col lg:flex-row items-center justify-between min-h-screen p-6 ">
        <div className="flex-1 text-center lg:text-left lg:pr-10">
          <h1 className="text-4xl italic font-bold text-gray-800 mb-4">
            Explore your <LightblueText text={"hobby"}></LightblueText> or{" "}
            <LightPurpleText text={"passion"}></LightPurpleText>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Sign-in to interact with a community of fellow hobbyists and an
            ecosystem of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities...
          </p>
          <p className="text-lg text-gray-600 mb-6">
            If you are an expert or a seller, you can add your listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
        </div>
        <div className="w-full bg-transparent lg:w-1/3  p-8 rounded-lg">
          <Signup></Signup>
        </div>
      </section>
      {/* Section-2 */}
      <section className="bg-white">
        <div className=" h-fit bg-gray-50 p-6 flex flex-col items-center">
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            <Cards
              title={"People"}
              description={
                "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator."
              }
              btnText={"Connect"}
              color={"text-purple-500 "}
              svgFile={
                "M15 17h5l-1.405-1.405A3.032 3.032 0 0019 14V7a3 3 0 00-3-3H5a3 3 0 00-3 3v7a3 3 0 003 3h6m9 0v2a2 2 0 01-2 2h-6m8-4h-4.6a2.001 2.001 0 01-1.8 1H7"
              }
            ></Cards>

            <Cards
              title={"Place"}
              description={
                "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue"
              }
              btnText={"Meet up"}
              color={"text-green-700 "}
              svgFile={
                "M9 20l-5.447-2.724A2 2 0 013 15.382V5.618A2 2 0 013.553 4L9 1.276a2 2 0 011.894 0L18 5.618A2 2 0 0118.447 7v9.764a2 2 0 01-1.106 1.788L10 21.724a2 2 0 01-1 0L4 19"
              }
            ></Cards>

            <Cards
              title={"Product"}
              description={
                "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members."
              }
              btnText={"Get it"}
              color={"text-red-700 "}
              svgFile={"M7 7l10 10M7 17L17 7"}
            ></Cards>
            <Cards
              title={"Program"}
              description={
                "Find events, meetups and workshops related to your hobby. Register or buy tickets online."
              }
              btnText={"Attend"}
              color={"text-blue-500 "}
              svgFile={"M12 8v4l3 3m-3-7a7 7 0 100 14 7 7 0 000-14z"}
            ></Cards>
          </div>
        </div>
      </section>
      <section>
        <div className="h-fit py-16 bg-blue-50 p-6 flex flex-col items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-blue-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <h3 className="text-2xl font-bold text-gray-800">Add your own</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page.
            </p>
            <button className="bg-transparent text-purple-500 border border-purple-500 hover:bg-purple-500 hover:text-white font-bold py-2 px-4 rounded">
              Add new
            </button>
          </div>
        </div>
      </section>
      {/* Section-4 */}
      <section className="w-full">
        <div className="h-fit bg-white flex items-center justify-center py-10">
          <Testimonial />
        </div>
      </section>

      {/* Section-5 */}
      <section>
        <CommunitySection></CommunitySection>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default SignInPage;
