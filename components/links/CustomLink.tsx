import React from "react";
import Link from "next/link";

interface Props {
  href: any;
  linkStyles: string;
  label: string;
}

const CustomLink = ({ href, linkStyles, label }: Props) => {
  return (
    <div>
      <Link href={`${href}`}>
        <a target="_blank" className={`${linkStyles}`}>
          {label}
        </a>
      </Link>
    </div>
  );
};

export default CustomLink;
