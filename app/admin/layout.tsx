import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "Vitoria Administração",
  description: "Vitoria painel de administração",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
