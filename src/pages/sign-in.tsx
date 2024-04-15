import { UiHeader } from "@/shared/ui/ui-header";
import { SignInForm } from "@/features/auth";
import { UiFormLayout } from "@/shared/ui/layouts/ui-form-layout";

export function SignInPage() {
  return (
    <UiFormLayout title="Sign In" header={<UiHeader />} form={<SignInForm />} />
  );
}
