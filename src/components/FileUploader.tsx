'use client'
import { useState } from 'react'

export default function FileUploader({ field, required = false, onUploaded }: any) {
  const [uploading, setUploading] = useState(false)

  const handleFile = async (e: any) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    const res = await fetch('/api/upload', { method: 'POST', body: formData })
    const data = await res.json()
    setUploading(false)
    if (data.url) onUploaded(data.url)
  }

  return (
    <input type="file" accept=".pdf" required={required} onChange={handleFile} disabled={uploading} className="p-2 border rounded w-full" />
  )
}
