import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authControllerSignOut } from "@/shared/api/generated";
import { useRouter } from "next/router";
import { ROUTES } from "@/shared/constants/routes";
import { useResetSession } from "@/entities/session";

export function useSignOut() {
  const router = useRouter();
  const resetSession = useResetSession();

  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    async onSuccess() {
      router.push(ROUTES.SING_IN);
      resetSession();
    },
  });

  return {
    isPending: signOutMutation.isPending,
    signOut: signOutMutation.mutate,
  };
}
