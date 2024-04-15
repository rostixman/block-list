import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiLink } from "@/shared/ui/ui-link";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiHeader } from "@/shared/ui/ui-header";
import { SignOutButton } from "@/features/auth";
import { useSessionQuery } from "@/entities/session";
import { Profile } from "@/widgets/profile";

export function UiPage() {
  const { data } = useSessionQuery();
  return (
    <main className="min-h-screen">
      <UiHeader right={<Profile />} />

      <UiButton variant="primary">Hey</UiButton>
      <UiButton variant="secondary">Hey</UiButton>
      <UiButton variant="outlined">Sign Out</UiButton>
      <UiButton disabled variant="primary">
        Sign Out
      </UiButton>
      <UiTextField
        label="Text field"
        inputProps={{ placeholder: "Enter email" }}
      />
      <UiTextField
        error="Text field"
        inputProps={{ placeholder: "Enter email" }}
      />
      <UiTextField inputProps={{ placeholder: "Enter email" }} />
      <UiSelectField
        options={[
          { value: "value 1", label: "label 1" },
          { value: "value 2", label: "label 2" },
        ]}
      />
      <UiLink href="/">Link</UiLink>
      <UiSpinner className={"text-teal-600 w-20 h-20"} />
      {/*<UiPageSpinner />*/}
    </main>
  );
}
