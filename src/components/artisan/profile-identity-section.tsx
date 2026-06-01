"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface IdentityData {
  fullName: string
  email: string
  phone: string
}

interface ProfileIdentitySectionProps {
  initialData: IdentityData
}

export function ProfileIdentitySection({ initialData }: ProfileIdentitySectionProps) {
  const [data, setData] = useState<IdentityData>(initialData)
  const [errors, setErrors] = useState<Partial<IdentityData>>({})
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<IdentityData> = {}
    if (!data.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!data.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Enter a valid email address"
    }
    if (data.phone && !/^\+?[\d\s\-()]{7,15}$/.test(data.phone)) {
      newErrors.phone = "Enter a valid phone number"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSaving(true)
    // TODO: replace with real API call
    await new Promise((r) => setTimeout(r, 600))
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Identity</h2>
      <p className="text-sm text-gray-500 mb-5">Your basic personal information</p>

      <form onSubmit={handleSave} noValidate className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name</Label>
          <Input
            id="fullName"
            value={data.fullName}
            onChange={(e) => setData({ ...data, fullName: e.target.value })}
            placeholder="Your full name"
            className={`h-11 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#605DEC] ${errors.fullName ? "border-red-400" : ""}`}
          />
          {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="you@example.com"
            className={`h-11 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#605DEC] ${errors.email ? "border-red-400" : ""}`}
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number <span className="text-gray-400 font-normal">(optional)</span></Label>
          <Input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            placeholder="+234 800 000 0000"
            className={`h-11 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#605DEC] ${errors.phone ? "border-red-400" : ""}`}
          />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 rounded-lg bg-[#605DEC] text-white text-sm font-medium hover:bg-[#5558e3] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {saving ? "Saving…" : "Save Changes"}
          </button>
          {saved && (
            <span className="flex items-center gap-1.5 text-sm text-green-600">
              <CheckCircle className="w-4 h-4" /> Saved
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
