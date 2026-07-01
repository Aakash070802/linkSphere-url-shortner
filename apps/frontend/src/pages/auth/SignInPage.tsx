import AuthCard from "@/components/auth/AuthCard";
import SignInForm from "@/components/auth/SignInForm";

const SignInPage = () => {
  return (
    <AuthCard
      title="Welcome back"
      description="Sign in to manage your links, monitor analytics, and access your LinkSphere dashboard."
    >
      <SignInForm />
    </AuthCard>
  );
};

export default SignInPage;
