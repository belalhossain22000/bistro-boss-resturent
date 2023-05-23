import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// import required modules
import { Pagination, Navigation } from "swiper";
import SectionTitle from "../../../componensts/SectionTitle/SectionTitle";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-12 w-[70%] mx-auto ">
      <SectionTitle
        subHeading={"what out client say"}
        heading={"testimonials"}
      ></SectionTitle>

      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews &&
          reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="text-center  p-20 flex flex-col items-center justify-center space-y-6">
                <Rating
                  style={{ maxWidth: 150 }}
                  value={review.rating}
                  readOnly
                />
                <p className="text-9xl">"</p>

                <p className="text-xl">{review.details}</p>
                <h3 className="text-3xl text-orange-500">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
