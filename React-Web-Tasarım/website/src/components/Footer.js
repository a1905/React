import "../App.css";
import { GrNext } from "react-icons/gr";
import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
function Footer() {
  return (
    <div className="footer w-full  bg-slate-100 ">
      <div className="row p-10">
        <div className="flex">
          <div className="flex-1">
            <h2 className="footer-title">
              En güncel moda haberleri için kaydolun
            </h2>
            <p className="footer-desc">
              Herkesten önce kaçırılmaması gereken haberleri alın
            </p>
            <input placeholder="E-posta" className="p-2 outline-none "></input>
            <button className="p-3 ">
              {" "}
              <GrNext />
            </button>
          </div>
          <div className="store-container flex-1 flex text-xl ml-20">
            <div className="app-store cursor-pointer">
              <p>App Store</p>
              <FaAppStore />
            </div>
            <div className="play-store ml-20 cursor-pointer">
              <p>Play Store</p>
              <IoLogoGooglePlaystore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
