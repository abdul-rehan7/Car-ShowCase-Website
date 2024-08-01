import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col  text-gray-100 mt-5 border-t border-gray-600">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 ">
        <div className="flex flex-col justify-start  items-start gap-6 ">
          <Image
            src="/logo.svg"
            alt="logo"
            width={170}
            height={50}
            className="object-contain"
          />
          <p className="text-base text-gray-100">
            FlavorFusion 2024 <br /> All Rights Reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          <div className="footer__link">
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold">About</h1>
              <Link href={""}>How it Works</Link>
              <Link href={""}>Featured</Link>
              <Link href={""}>Partnership</Link>
              <Link href={""}>Business Relation</Link>
            </div>
          </div>
          <div className="footer__link">
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold">Company</h1>
              <Link href={""}>Events</Link>
              <Link href={""}>Blogs</Link>
              <Link href={""}>PodCast</Link>
              <Link href={""}>Invite a Friend</Link>
            </div>
          </div>
          <div className="footer__link">
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold">Socials</h1>
              <Link href={""}>Discord</Link>
              <Link href={""}>Instagram</Link>
              <Link href={""}>Twitter</Link>
              <Link href={""}>Facebook</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-between items-center flex-wrap mt-10 border-t border-gray-600 sm:px-16 px-6 py-10 ">
        <p>@2024 FlavorFusion. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href={"/"} className="text-gray-100 ">
            Privacy Policy
          </Link>
          <Link href={"/"} className="text-gray-100 ">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
