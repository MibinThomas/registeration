import { prisma } from '@/lib/prisma'
import { TeamSchema } from '@/lib/validators'
import { NextResponse } from 'next/server'
import { generateQRCode } from '@/lib/qr'
import { sendConfirmationEmail } from '@/lib/email'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const parsed = TeamSchema.parse(data)

    const qr = await generateQRCode(parsed.companyName + Date.now())

    const team = await prisma.team.create({
      data: {
        companyName: parsed.companyName,
        managerName: parsed.managerName,
        managerEmail: parsed.managerEmail,
        managerPhone: parsed.managerPhone,
        captainName: parsed.captainName,
        captainPhone: parsed.captainPhone,
        logoUrl: parsed.logoUrl,
        brandGuideUrl: parsed.brandGuideUrl,
        qrCodeHash: qr,
        players: {
          createMany: { data: parsed.players }
        }
      },
      include: { players: true }
    })

    await sendConfirmationEmail(parsed.managerEmail, parsed.companyName)
    return NextResponse.json({ success: true, team })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
