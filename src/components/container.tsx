import clsx from "clsx";

type Props = React.PropsWithChildren<{ className?: string }>;

export function Container({ className, children }: Props) {
  return <div className={clsx("mx-auto w-full max-w-screen-xl px-4", className)}>{children}</div>;
}


