import "../App.css";

function SectionThree() {
  return (
    <div className="   flex my-10 ">
      <div className="section-three-card flex-1 p-1 cursor-pointer">
        {" "}
        <div className="img-container">
          <img
            alt=""
            src="https://ktnimg2.mncdn.com/cms/2024/02/07/47cfd24e-0f87-4790-9590-eba2ede6581f.jpg"
          />
        </div>{" "}
        <div className="img-desc p-2 ">
          Sezon trendleri ve stil haberleri için Koton Blog ' da
        </div>
        <button className="section-three-btn btn text-center text-bold bg-black text-white p-3 m-2 text-sm hover:bg-white hover:text-black">
          TRENDLERİ KEŞFET{" "}
        </button>
      </div>
      <div className="section-three-card flex-1 p-1 cursor-pointer">
        <div className="img-container">
          <img
            className="object-cover h-full "
            alt=""
            src="https://ktnimg2.mncdn.com/cms/2024/02/15/cde7e335-c27a-4aca-afd4-6b8b554f6440.png"
          />
        </div>
      </div>
      <div className="section-three-card flex-1 p-1 cursor-pointer">
        {" "}
        <div className="img-container">
          <img
            className="object-cover h-full "
            alt=""
            src="https://ktnimg2.mncdn.com/cms/2024/02/15/e7a53c83-390a-46e5-9810-a5d5e263fa2f.png"
          />
        </div>{" "}
      </div>
      <div className="section-three-card flex-1 p-1 cursor-pointer">
        <div className="img-container">
          <img
            className="object-cover h-full pr-2 "
            alt=""
            src="      https://ktnimg2.mncdn.com/cms/2024/02/19/c21ba3ac-ceef-4b2f-b17b-bc4531cb5c64.png
          "
          />
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
