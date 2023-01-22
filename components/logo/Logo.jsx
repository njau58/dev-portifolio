import React from "react";
import Image from "next/image";
import { logo, logo_white } from "../../assets/assets";
import Link from "next/link";

const Logo = ({ colorNavChange,mobileMenuLogo }) => {
  console.log(mobileMenuLogo);
  return (
    <div className="relative ml-6 z-50">
      <Link href="/" passHref={true}>
        <Image
          src={colorNavChange ? logo :
            !mobileMenuLogo? logo:
          logo_white}
          alt="Logo"
          width={100}
          height={100}
          className=""
        ></Image>
      </Link>
    </div>
  );
};

export default Logo;
