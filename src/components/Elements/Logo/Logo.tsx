import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="">
    <Link href="/" className="flex items-center space-x-2 ml-2">
      <Image
        src="/assets/LogoMKA.svg"
        alt="Logo"
        width={50}
        height={50}
      />
    </Link>
    </div>
  );
};

export default Logo;
