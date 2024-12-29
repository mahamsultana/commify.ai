import Dashboard from "@/components/Dashboard";
import IntegrationCard from "@/components/Integration";
import Sidebar from "@/components/SideBar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
       <Dashboard/>
    </div>
  );
}
