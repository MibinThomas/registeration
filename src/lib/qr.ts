import QRCode from 'qrcode'

export async function generateQRCode(data: string) {
  try {
    const qrDataUrl = await QRCode.toDataURL(data)
    return qrDataUrl
  } catch (err) {
    console.error('QR generation failed', err)
    throw err
  }
}
