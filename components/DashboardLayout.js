import SideBar from "./ui/molecules/sidebar";
import TopBar from "./ui/molecules/topbar";
import dynamic from "next/dynamic";
const DashboardLayout = (props) => {
  return (
    <>
      <div className="bg-[#F5FBFF] flex h-screen w-[100vw]">
        <SideBar />
        <main className="flex flex-col">
          <TopBar />
          <div className="bg-white mt-10  ml-10 w-[94%] mr-2  h-[80%] rounded-md">
            <p className="p-8  font-normal ">Web pages</p>
            {props.children}
          </div>
        </main>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(DashboardLayout), {ssr: false});

