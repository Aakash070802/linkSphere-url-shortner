import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="bg-void text-phosphor-mint flex min-h-screen items-center justify-center px-4">
      <section className="w-full max-w-md">
        <Outlet />
      </section>
    </main>
  );
};

export default AuthLayout;
