import Image from 'next/image';
import logoSCN from "@/assets/PT.SCN.svg";
import logoPRIA from "@/assets/PT.PRIA.svg";
import logoBS from "@/assets/PT.BS.png";
import logoASM from "@/assets/PT.ASM.png";
import logoAminTrans from "@/assets/PT.AminTrans.jpg";

const logos = [
  { src: logoSCN, alt: "SCN" },
  { src: logoPRIA, alt: "PRIA" },
  { src: logoBS, alt: "BS" },
  { src: logoASM, alt: "ASM" },
  { src: logoAminTrans, alt: "Amin Trans" },
];

const Partner = () => {
  return (
    <div className="font-lato grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={logo.alt}
          style={{ width: 'auto', height: 'auto' }}
          className="max-h-20 mx-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300 transform hover:scale-125"
        />
      ))}
    </div>
  );
};

export default Partner;
