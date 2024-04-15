import { UiButton } from "@/shared/ui/ui-button";
import { useSignOut } from "@/features/auth/model/use-sign-out";

export function SignOutButton() {
  const { signOut, isPending } = useSignOut();
  return (
    <UiButton
      disabled={isPending}
      variant={"outlined"}
      onClick={() => signOut({})}
    >
      Sign out
    </UiButton>
  );
}
