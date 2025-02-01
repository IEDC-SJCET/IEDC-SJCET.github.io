import Image from "next/image";
import type React from "react";

interface LogoProps {
  size?: number; // Optional prop to define image size
}

const Logo: React.FC<LogoProps> = ({ size = 50 }) => {
  return (
    <div>
      <Image src="/images/bootcamp(white).png" alt="IEDC Logo" width={size} height={size} />
    </div>
  );
};

export default Logo;
