import Dashboard from "@/components/dashboard";
import { DashboardProvider } from "@/context/dashboard_context";


export default function DashboardPage() {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
}