export default function AdminTable({ teams }: any) {
  return (
    <table className="w-full border">
      <thead className="bg-cream">
        <tr>
          <th className="p-2 border">Company</th>
          <th className="p-2 border">Manager</th>
          <th className="p-2 border">Captain</th>
          <th className="p-2 border">Registered At</th>
          <th className="p-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((t: any) => (
          <tr key={t.id} className="text-center">
            <td className="border p-1">{t.companyName}</td>
            <td className="border p-1">{t.managerName}</td>
            <td className="border p-1">{t.captainName}</td>
            <td className="border p-1">{new Date(t.createdAt).toLocaleString()}</td>
            <td className="border p-1">
              <a href={`/admin/team/${t.id}`} className="text-gold underline">View</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
