import { ReactNode } from "react";

export type UiFormLayoutProps = {
  header?: ReactNode;
  form?: ReactNode;
  title?: string;
};

export function UiFormLayout({ header, form, title }: UiFormLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {header}
      <main className="grow flex flex-col pt-24">
        <div className="rounded-xl border border-slate-300 px-14 py-8 pb-14 w-full max-w-[400px] bg-white self-center">
          {title && <h1 className="text-2xl mb-6">{title}</h1>}
          {form}
        </div>
      </main>
    </div>
  );
}
