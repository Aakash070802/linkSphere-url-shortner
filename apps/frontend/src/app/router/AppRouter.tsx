import { createBrowserRouter, RouterProvider } from "react-router-dom";

function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950">
      <h1 className="text-5xl font-bold text-white">LinkSphere 🚀 HEllo</h1>
    </main>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
