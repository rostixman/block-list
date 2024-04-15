import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export type UiLinkProps = {
  className?: string;
  children?: ReactNode;
} & LinkProps;

export function UiLink({ className, children, ...rest }: UiLinkProps) {
  return (
    <Link
      {...rest}
      className={clsx(
        className,
        "p-1 text-teal-500 hover:text-teal-600 cursor-pointer",
      )}
    >
      {children}
    </Link>
  );
}
