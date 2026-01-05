import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import { generateQRCode } from './qr'

export async function generateTeamPDF(team: any) {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([600, 800])
  const { height } = page.getSize()
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

  const title = 'The Bootroom 2026 - Team Entry Ticket'
  page.drawText(title, { x: 50, y: height - 60, size: 18, font, color: rgb(0.8, 0.1, 0.1) })

  let y = height - 100
  page.drawText(`Company: ${team.companyName}`, { x: 50, y, size: 12, font })
  y -= 20
  page.drawText(`Manager: ${team.managerName}`, { x: 50, y, size: 12, font })
  y -= 20
  page.drawText(`Captain: ${team.captainName}`, { x: 50, y, size: 12, font })
  y -= 40

  page.drawText('Players:', { x: 50, y, size: 14, font })
  y -= 20

  team.players.forEach((p: any, i: number) => {
    page.drawText(`${i + 1}. ${p.fullName} - #${p.jerseyNo} (${p.position})`, {
      x: 70,
      y,
      size: 10,
      font
    })
    y -= 15
  })

  const qrDataUrl = await generateQRCode(`https://thebootroom.ae/verify/${team.id}`)
  const qrImageBytes = Buffer.from(qrDataUrl.split(',')[1], 'base64')
  const qrImage = await pdfDoc.embedPng(qrImageBytes)
  const qrDims = qrImage.scale(0.3)
  page.drawImage(qrImage, {
    x: 400,
    y: 100,
    width: qrDims.width,
    height: qrDims.height
  })

  const pdfBytes = await pdfDoc.save()
  return pdfBytes
}
