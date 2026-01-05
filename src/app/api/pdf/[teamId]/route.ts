import { prisma } from '@/lib/prisma'
import { generateTeamPDF } from '@/lib/pdf'
import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: { teamId: string } }) {
  const team = await prisma.team.findUnique({
    where: { id: params.teamId },
    include: { players: true }
  })

  if (!team) return NextResponse.json({ error: 'Team not found' }, { status: 404 })

  const pdfBytes = await generateTeamPDF(team)
  return new NextResponse(pdfBytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=${team.companyName}-ticket.pdf`
    }
  })
}
