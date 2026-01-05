import { prisma } from '@/lib/prisma'

export default async function VerifyPage({ params }: { params: { teamId: string } }) {
  const team = await prisma.team.findUnique({ where: { id: params.teamId }, include: { players: true } })

  if (!team) return <div className="text-center py-20 text-red-500">Invalid or unverified team.</div>

  return (
    <div className="py-10 text-center">
      <h1 className="text-2xl font-bold text-retroRed mb-2">✅ Team Verified!</h1>
      <p className="mb-6">Welcome {team.companyName}</p>
      <h2 className="font-semibold">Players:</h2>
      <ul className="mt-2 space-y-1">
        {team.players.map((p) => (
          <li key={p.id}>{p.fullName} – #{p.jerseyNo} ({p.position})</li>
        ))}
      </ul>
    </div>
  )
}
