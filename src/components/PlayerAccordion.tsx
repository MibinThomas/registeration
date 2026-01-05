'use client'
import { useState } from 'react'

export default function PlayerAccordion({ index, data, onChange }: any) {
  const [open, setOpen] = useState(false)

  const update = (e: any) => {
    onChange({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <div className="border rounded mb-2">
      <button type="button" onClick={() => setOpen(!open)} className="w-full text-left px-3 py-2 bg-cream font-semibold">
        Player {i + 1}
      </button>
      {open && (
        <div className="p-3 grid md:grid-cols-3 gap-2">
          <input name="fullName" placeholder="Full Name" value={data.fullName} onChange={update} className="p-1 border rounded" />
          <input name="jerseyNo" placeholder="Jersey #" value={data.jerseyNo} onChange={update} className="p-1 border rounded" />
          <input name="position" placeholder="Position" value={data.position} onChange={update} className="p-1 border rounded" />
          <select name="jerseySize" value={data.jerseySize} onChange={update} className="p-1 border rounded">
            {['S', 'M', 'L', 'XL', 'XXL'].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <input name="contact" placeholder="Contact #" value={data.contact} onChange={update} className="p-1 border rounded" />
        </div>
      )}
    </div>
  )
}
