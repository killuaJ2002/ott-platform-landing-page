import animeBg from "../assets/images/anime-bg.jpg";
import Navbar from "../components/Navbar";
const HomePage = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={animeBg}
          alt="background"
          className="w-full h-full object-cover blur-2xl scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-white/20"></div>
      <div className="relative z-10 lg:p-4 2xl:p-6 w-full h-full flex flex-col">
        <Navbar />
      </div>
    </div>
  );
};

export default HomePage;
