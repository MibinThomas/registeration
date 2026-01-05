'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await signIn('credentials', { redirect: false, email, password })
    if (!res?.error) window.location.href = '/admin/dashboard'
    else alert('Invalid credentials')
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4 text-center text-retroRed">Admin Login</h1>
      <form onSubmit={handleLogin} className="space-y-3">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 w-full border rounded" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 w-full border rounded" />
        <button className="bg-retroRed text-white px-4 py-2 rounded w-full">Login</button>
      </form>
    </div>
  )
}
