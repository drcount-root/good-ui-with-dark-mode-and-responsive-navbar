import { ReactNode } from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-2xl">Auth routes Outlet</h1>
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
