import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { authControllerSignIn } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";

export const useSignInForm = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
  });

  const errorMessage = signInMutation.error ? "Sign In failed" : undefined;

  return {
    register,
    errorMessage,
    handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
    isPending: signInMutation.isPending,
  };
};
