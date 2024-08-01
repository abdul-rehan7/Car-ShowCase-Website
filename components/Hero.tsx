"use client";

import Image from "next/image";

import CustomButton from "@/components/CustomButton";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero text-white">
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
          <Image src="/hero.png" alt="hero" fill className="object-contain transparent-image" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
