import { prisma } from '@/lib/prisma'

export default async function TeamDetail({ params }: { params: { id: string } }) {
  const team = await prisma.team.findUnique({ where: { id: params.id }, include: { players: true } })
  if (!team) return <div>Team not found</div>

  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold text-retroRed mb-4">{team.companyName}</h1>
      <p>Manager: {team.managerName}</p>
      <p>Captain: {team.captainName}</p>
      <p>Email: {team.managerEmail}</p>
      <p className="mt-2">
        <a href={`/api/pdf/${team.id}`} className="text-gold underline">Download Ticket PDF</a>
      </p>

      <h2 className="mt-6 font-semibold">Players:</h2>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        {team.players.map((p) => (
          <li key={p.id}>
            {p.fullName} – #{p.jerseyNo} ({p.position}) / {p.jerseySize}
          </li>
        ))}
      </ul>
    </div>
  )
}
