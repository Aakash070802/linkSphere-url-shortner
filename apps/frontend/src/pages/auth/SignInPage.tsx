import AuthCard from "@/components/auth/AuthCard";

const SignInPage = () => {
  return (
    <AuthCard
      title="Welcome back"
      description="Sign in to manage your links, monitor analytics, and access your LinkSphere dashboard."
    >
      <div className="text-lichen py-8 text-center">Sign In Form</div>
    </AuthCard>
  );
};

export default SignInPage;
