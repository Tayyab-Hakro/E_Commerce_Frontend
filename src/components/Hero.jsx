import HeroImag from './Images/Heroimg.jpg'
const Hero = () => {
  return (
    <div className="flex items-center  sm:flex-col md:flex-row border border-gray-400">
     <div className='w-full sm:w-full flex sm:flex-col items-center md:justify-center py-10 sm:py-0'>
    <img src={HeroImag} alt='' />
  

      </div>

      {/* Image Section */}
  
    </div>
  );
};

export default Hero;
