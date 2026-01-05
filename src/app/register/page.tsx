'use client'

import { useState } from 'react'
import PlayerAccordion from '@/components/PlayerAccordion'
import FileUploader from '@/components/FileUploader'
import TermsModal from '@/components/TermsModal'

export default function RegisterPage() {
  const [players, setPlayers] = useState(
    Array.from({ length: 10 }, () => ({ fullName: '', jerseyNo: '', position: '', jerseySize: 'M', contact: '' }))
  )
  const [form, setForm] = useState({
    companyName: '',
    managerName: '',
    managerEmail: '',
    managerPhone: '',
    captainName: '',
    captainPhone: '',
    logoUrl: '',
    brandGuideUrl: '',
    agreeEmployees: false,
    agreeTerms: false
  })
  const [loading, setLoading] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlePlayerChange = (index: number, data: any) => {
    const updated = [...players]
    updated[index] = data
    setPlayers(updated)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.agreeEmployees || !form.agreeTerms) {
      alert('Please agree to the terms and confirm employees.')
      return
    }
    setLoading(true)
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, players })
    })
    const data = await res.json()
    setLoading(false)
    if (data.success) window.location.href = '/register/success'
    else alert('Error: ' + data.error)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-retroRed">Team Registration Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input name="companyName" placeholder="Company / Team Name" onChange={handleChange} required className="p-2 border rounded" />
          <input name="managerEmail" placeholder="Manager Email" onChange={handleChange} required className="p-2 border rounded" />
          <input name="managerName" placeholder="Manager Name" onChange={handleChange} required className="p-2 border rounded" />
          <input name="managerPhone" placeholder="Manager Phone" onChange={handleChange} required className="p-2 border rounded" />
          <input name="captainName" placeholder="Captain Name" onChange={handleChange} required className="p-2 border rounded" />
          <input name="captainPhone" placeholder="Captain Phone" onChange={handleChange} required className="p-2 border rounded" />
        </div>

        <div>
          <label className="block font-semibold mb-1">Company Logo (PDF)</label>
          <FileUploader field="logoUrl" required onUploaded={(url) => setForm({ ...form, logoUrl: url })} />
        </div>
        <div>
          <label className="block font-semibold mb-1">Brand Guidelines (PDF optional)</label>
          <FileUploader field="brandGuideUrl" onUploaded={(url) => setForm({ ...form, brandGuideUrl: url })} />
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">Players</h2>
          {players.map((p, i) => (
            <PlayerAccordion key={i} index={i} data={p} onChange={(d) => handlePlayerChange(i, d)} />
          ))}
        </div>

        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={form.agreeEmployees} onChange={(e) => setForm({ ...form, agreeEmployees: e.target.checked })} />
            <span>I confirm all players listed are employees.</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={form.agreeTerms} onChange={(e) => setForm({ ...form, agreeTerms: e.target.checked })} />
            <span>
              I agree to all <a onClick={() => setShowTerms(true)} className="text-retroRed cursor-pointer underline">Terms &amp; Conditions</a>.
            </span>
          </label>
        </div>

        <button disabled={loading} className="bg-gold text-white px-6 py-2 rounded hover:bg-retroYellow transition">
          {loading ? 'Submitting…' : 'Register Team'}
        </button>
      </form>

      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
    </div>
  )
}
