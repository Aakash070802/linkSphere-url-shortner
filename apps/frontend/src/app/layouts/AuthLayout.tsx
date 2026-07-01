import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="bg-void text-phosphor-mint flex min-h-screen items-center justify-center px-6 py-12">
      <section className="w-full max-w-lg">
        <Outlet />
      </section>
    </main>
  );
};

export default AuthLayout;
