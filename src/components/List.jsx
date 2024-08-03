import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import list from "../../public/list.json";

function List() {
    const filterData = list.filter((data) => data.category === "free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-blue-100 min-h-screen text-white">
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12">
                <h1 className="font-semibold text-2xl pb-4 text-black">
                All-Inclusive Solutions for Every Event
                </h1>
                <p className="text-black">
                Our event management services blend creativity, precision, and excellence to make every event unforgettable. From corporate conferences to intimate gatherings, we offer tailored solutions that meet your unique needs. Our expert team meticulously handles every detail, so you can enjoy your event stress-free. Whether it's a wedding, baby shower, or housewarming, we transform your vision into reality with flawless execution and unmatched service.
                </p>
            </div>

            <div className="mt-12">
                <Slider {...settings}>
                    {filterData.map((item) => (
                        <div className="p-2" key={item.id}>
                            <Cards item={item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default List;