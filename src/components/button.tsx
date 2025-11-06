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
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2",
    variant === "primary" && "bg-primary text-white hover:bg-primary-dark focus:ring-primary-dark",
    variant === "secondary" && "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300",
    className,
  );
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button type={type} className={classes}>{children}</button>;
}


