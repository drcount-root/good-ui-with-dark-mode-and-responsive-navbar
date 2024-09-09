import { ReactNode } from "react";

const SubRootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-2xl">Root routes Outlet</h1>
        <div>Sidebar</div>
        {children}
      </div>
    </main>
  );
};

export default SubRootLayout;
