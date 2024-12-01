import { useEffect } from "react";

function Article2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center">My Badminton Career</h1>
      <p className="text-gray-700 mt-6 text-lg text-center">
        Badminton has been a cornerstone of my journey. Through numerous tournaments and practice sessions, I've learned discipline, teamwork, and resilience.
        Here's a peek into my passion for the sport!
      </p>

      {/* Image Gallery */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <img
          src="../images/Junaid.JPG"
          alt="Playing in a tournament"
          className="w-full rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
        />
        <img
          src="/images/Me Action.png"
          alt="Celebrating a win"
          className="w-full rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
        />
        <img
          src="/images/team.jpg"
          alt="In action during a match"
          className="w-full rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
        />
        <img
          src="https://res.cloudinary.com/dsgwuim2d/image/upload/v1733075214/ActionFull_bjvy7n.jpg"
          alt="Post-match celebration"
          className="w-full rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
        />
        <img
          src="/images/Action4.JPG"
          alt="Training drills"
          className="w-full rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
        />
      </div>

      {/* Video Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Practice Sessions</h2>
        <p className="text-gray-700 mt-4 text-center">
          Here's a closer look at one of my practice sessions, showcasing the effort and determination that goes into perfecting my game.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
          {/* Horizontal Video */}
          <video
            src="/images/MyPractice.mp4"
            controls
            className="w-full sm:w-1/2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            Your browser does not support the video tag.
          </video>
          {/* Vertical Video */}
          <video
            src="/images/Shots.mp4"
            controls
            className="w-full sm:w-1/4 aspect-[9/16] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Article2;
