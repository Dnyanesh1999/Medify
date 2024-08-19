import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your specialist images
import Specialist1 from "./resources/spec1.png";
import Specialist2 from "./resources/spec2.png";
import Specialist3 from "./resources/spec3.png";
// ... import more images as needed

const specialists = [
  {
    name: "Dr. Ahmeda Khan",
    specialty: "Neurologist",
    image: Specialist1,
  },
  {
    name: "Dr. Heena Sachdeva",
    specialty: "Orthopadics",
    image: Specialist2,
  },
  {
    name: "Dr. Ankur Sharma",
    specialty: "Medicine",
    image: Specialist3,
  },
  {
    name: "Dr. Heena Sachdeva",
    specialty: "Orthopadics",
    image: Specialist2,
  },
  {
    name: "Dr. Ankur Sharma",
    specialty: "Medicine",
    image: Specialist3,
  },
  // Add more specialists as needed
];

const DoctorsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 3 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ fontSize: "48px", fontWeight: "600", color: "#1B3C74" }}>
        Our Medical Specialist
      </h2>
      <Slider {...settings}>
        {specialists.map((specialist, index) => (
          <div key={index} style={{ padding: "30px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                margin: "10px",
                width: "370px",
                padding: "30px",
                // boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={specialist.image}
                alt={specialist.name}
                style={{
                  width: "350px",
                  height: "394px",
                  borderRadius: "16px",
                  marginBottom: "10px",
                }}
              />
              <h3>{specialist.name}</h3>
              <p style={{ color: "#3b82f6" }}>{specialist.specialty}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DoctorsSlider;
