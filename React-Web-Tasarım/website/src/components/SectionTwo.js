import Slider from "react-slick";

function SectionTwo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // Ekran boyutu 1024 pikselden küçülürse
        settings: {
          slidesToShow: 3, // Resim sayısını 3'e düşür
        },
      },
      {
        breakpoint: 768, // Ekran boyutu 768 pikselden küçülürse
        settings: {
          slidesToShow: 2, // Resim sayısını 2'ye düşür
        },
      },
    ],
  };

  return (
    <div className="mt-5 container">
      <h1 className="text-3xl  text-extrabold  text-center">Yeni Ürünler</h1>
      <Slider className=" mt-5" {...settings}>
        <div className="card outline-none">
          <img
            src="https://ktnimg2.mncdn.com/products/2024/02/01/2851897/d3ccba15-9fcd-413b-af5b-3be4b94050aa_size708x930.jpg"
            className="object-cover p-2  "
            alt="resim-1"
          />
        </div>
        <div className="card outline-none">
          <img
            src="https://ktnimg2.mncdn.com/products/2024/02/01/2840911/b6db44f4-b2a2-4a80-be7d-54aadb2708eb_size708x930.jpg"
            className="object-cover  p-2  "
            alt="resim-2"
          />
        </div>
        <div className="card outline-none">
          <img
            src="https://ktnimg2.mncdn.com/products/2024/02/01/2867880/6295cd4c-1fdd-4c72-a8d9-52896ae7bd3b_size708x930.jpg"
            className="object-cover p-2  "
            alt="resim-3"
          />
        </div>
        <div className="card outline-none">
          <img
            src="https://ktnimg2.mncdn.com/products/2024/02/01/2859712/ed1f954e-f759-432f-984c-3135dbb5c6cb_size708x930.jpg"
            className="object-cover p-2 "
            alt="resim-4"
          />
        </div>
        <div className="card outline-none">
          <img
            src="https://ktnimg2.mncdn.com/products/2024/02/01/2867880/6295cd4c-1fdd-4c72-a8d9-52896ae7bd3b_size708x930.jpg"
            className="object-cover p-2  "
            alt="resim-3"
          />
        </div>
        <div className="card outline-none">
          <img
            src="https://ktnimg2.mncdn.com/products/2024/02/01/2859712/ed1f954e-f759-432f-984c-3135dbb5c6cb_size708x930.jpg"
            className="object-cover p-2 "
            alt="resim-4"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SectionTwo;
