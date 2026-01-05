import { uploadToS3 } from '@/lib/s3'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.formData()
  const file = data.get('file') as File

  if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })

  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  const fileName = `${Date.now()}-${file.name}`

  const fileUrl = await uploadToS3(buffer, fileName, file.type)
  return NextResponse.json({ url: fileUrl })
}
