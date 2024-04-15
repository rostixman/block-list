import { UiLogo } from "@/shared/ui/ui-logo";
import clsx from "clsx";
import { ReactNode } from "react";

export type UiHeaderProps = {
  className?: string;
  right?: ReactNode;
};

export function UiHeader({ className, right }: UiHeaderProps) {
  return (
    <div
      className={clsx(
        "px-4 py-5 border-b border-b-slate-300 flex justify-between items-center bg-white",
        className,
      )}
    >
      <UiLogo />
      {right}
    </div>
  );
}
