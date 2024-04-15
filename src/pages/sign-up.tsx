import { SignUpForm } from "@/features/auth";
import { UiHeader } from "@/shared/ui/ui-header";
import { UiFormLayout } from "@/shared/ui/layouts/ui-form-layout";

export function SignUpPage() {
  return (
    <UiFormLayout title="Sign Up" header={<UiHeader />} form={<SignUpForm />} />
  );
}
