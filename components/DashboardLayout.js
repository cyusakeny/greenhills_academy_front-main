import SideBar from "./ui/molecules/sidebar";
import TopBar from "./ui/molecules/topbar";

const DashboardLayout = (props) => {
  return (
    <>
      <div className="bg-[#F5FBFF] flex h-screen w-[100vw]">
        <SideBar />
        <main className="flex flex-col">
         <TopBar /> 
          {props.children}
          {/* </div> */}
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
