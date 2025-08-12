import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  to: string;
}

const Button = (props: ButtonProps) => {
  const { children, to } = props;

  return (
    <Link
      href={to}
      className="font-lato bg-primary hover:bg-secondary px-4 py-2 rounded-full text-sm font-semibold"
    >
      {children}
    </Link>
  );
};

export default Button;
