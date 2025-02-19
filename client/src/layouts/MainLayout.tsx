import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";;

function MainLayout(){
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;