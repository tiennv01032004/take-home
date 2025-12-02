export const metadata = {
  title: "Dashboard",
  description: "Quản lý hệ thống",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex">{children}</div>;
}
