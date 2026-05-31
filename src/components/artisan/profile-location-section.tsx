"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "FCT (Abuja)", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
]

interface LocationData {
  state: string
  city: string
  address: string
}

interface ProfileLocationSectionProps {
  initialData: LocationData
}

export function ProfileLocationSection({ initialData }: ProfileLocationSectionProps) {
  const [data, setData] = useState<LocationData>(initialData)
  const [errors, setErrors] = useState<Partial<LocationData>>({})
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<LocationData> = {}
    if (!data.state) newErrors.state = "Please select a state"
    if (!data.city.trim()) newErrors.city = "City is required"
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
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Location</h2>
      <p className="text-sm text-gray-500 mb-5">Where you are based and available to work</p>

      <form onSubmit={handleSave} noValidate className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-gray-700">State</Label>
            <Select
              value={data.state}
              onValueChange={(v) => setData({ ...data, state: v })}
            >
              <SelectTrigger className={`h-11 focus:ring-0 focus:ring-offset-0 focus:border-[#605DEC] ${errors.state ? "border-red-400" : ""}`}>
                <SelectValue placeholder="Choose State" />
              </SelectTrigger>
              <SelectContent className="rounded-lg border border-gray-200 bg-white shadow-lg max-h-72 overflow-y-auto">
                {nigerianStates.map((state) => (
                  <SelectItem key={state} value={state} className="cursor-pointer focus:bg-gray-100 px-3 py-2 text-sm">
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.state && <p className="text-xs text-red-500">{errors.state}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="city" className="text-sm font-medium text-gray-700">City</Label>
            <Input
              id="city"
              value={data.city}
              onChange={(e) => setData({ ...data, city: e.target.value })}
              placeholder="Enter your city"
              className={`h-11 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#605DEC] ${errors.city ? "border-red-400" : ""}`}
            />
            {errors.city && <p className="text-xs text-red-500">{errors.city}</p>}
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="address" className="text-sm font-medium text-gray-700">Street Address <span className="text-gray-400 font-normal">(optional)</span></Label>
          <Input
            id="address"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            placeholder="e.g. 12 Broad Street"
            className="h-11 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#605DEC]"
          />
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
