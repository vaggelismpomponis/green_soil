import clsx from "clsx";
import Link from "next/link";

type Props = {
  href?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, type = "button", children, variant = "primary", className }: Props) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0",
    variant === "primary" && "bg-primary text-white hover:bg-primary-dark focus:ring-primary-dark",
    variant === "secondary" && "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300",
    className,
  );
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button type={type} className={classes}>{children}</button>;
}


