import { HomeLayout } from "@/components/layouts/home-layout";

interface LayoutProps {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <HomeLayout>
      {children}
    </HomeLayout>
  );
};

export default Layout;