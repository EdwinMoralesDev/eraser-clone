export default function UserDashboardPage({
  params,
}: {
  params: { userId: string };
}) {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
    </div>
  );
}