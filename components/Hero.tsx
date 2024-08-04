"use client";

import CustomButton from "@/components/CustomButton";
import { ImagesSliderDemo } from "@/components/ImagesSlider";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero mt-7 text-white">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Discover some Culinary Delights at FlavorFusion!
        </h1>

        <p className="hero__subtitle">
          Your journey to gourmet adventures and delicious recipes starts here.
        </p>

        <CustomButton
          btnType="button"
          title="Order Now"
          containerStyles="bg-[#CF0A0A] text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <ImagesSliderDemo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
