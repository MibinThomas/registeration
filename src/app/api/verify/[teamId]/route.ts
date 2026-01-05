import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: { teamId: string } }) {
  const team = await prisma.team.findUnique({
    where: { id: params.teamId },
    include: { players: true }
  })

  if (!team) return NextResponse.json({ verified: false })

  return NextResponse.json({ verified: true, team })
}
