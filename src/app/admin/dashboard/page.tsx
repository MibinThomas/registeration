import { prisma } from '@/lib/prisma'
import AdminTable from '@/components/AdminTable'

export default async function DashboardPage() {
  const teams = await prisma.team.findMany({ include: { players: true }, orderBy: { createdAt: 'desc' } })

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold text-retroRed mb-4">Registered Teams</h1>
      <AdminTable teams={teams} />
    </div>
  )
}
