import BannerHome from '../../image/BannerHome1.png';

export default function Cover() {
  return (
    <div className="relative">
      <img
        src={BannerHome}
        alt="Banner"
        className="w-full h-auto"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-white text-[8vw] md:text-7xl lg:text-7xl font-bold font-open_sans">SELAMAT DATANG DI</p>
        <p className="text-[#FFB30E] text-[8vw] md:text-7xl lg:text-7xl font-bold font-open_sans">RASA NUSANTARA</p>
      </div>
    </div>
  );
}
