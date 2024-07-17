import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const PageLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="w-full">
      <div className="lg:grid grid-cols-layout bg-pageBg text-black">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className="bg-white min-h-screen">
          <Navbar />
          <main className="p-7">
            <div className="page-title-text">{title}</div>
            <div>{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
