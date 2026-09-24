import { Outlet } from "react-router-dom";

function BirthdayLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-200 text-[#211a2e]">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default BirthdayLayout;
