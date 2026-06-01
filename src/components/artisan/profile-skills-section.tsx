"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const skillCategories = [
  "Carpentry",
  "Plumbing",
  "Electrical",
  "Painting",
  "Welding",
  "Masonry",
  "Tailoring",
  "Photography",
  "Graphic Design",
  "Other",
]

const experienceOptions = [
  "Less than 1 year",
  "1-2 years",
  "3-5 years",
  "5-10 years",
  "10+ years",
]

interface SkillsData {
  skillCategory: string
  yearsOfExperience: string
  bio: string
}

interface ProfileSkillsSectionProps {
  initialData: SkillsData
}

export function ProfileSkillsSection({ initialData }: ProfileSkillsSectionProps) {
  const [data, setData] = useState<SkillsData>(initialData)
  const [errors, setErrors] = useState<Partial<SkillsData>>({})
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<SkillsData> = {}
    if (!data.skillCategory) newErrors.skillCategory = "Please select a skill category"
    if (!data.yearsOfExperience) newErrors.yearsOfExperience = "Please select years of experience"
    if (!data.bio.trim()) {
      newErrors.bio = "Bio is required"
    } else if (data.bio.trim().length < 20) {
      newErrors.bio = "Bio must be at least 20 characters"
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
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Skills & Experience</h2>
      <p className="text-sm text-gray-500 mb-5">Your craft, expertise level, and professional bio</p>

      <form onSubmit={handleSave} noValidate className="space-y-4">
        <div className="space-y-1.5">
          <Label className="text-sm font-medium text-gray-700">Craft / Skill Category</Label>
          <Select
            value={data.skillCategory}
            onValueChange={(v) => setData({ ...data, skillCategory: v })}
          >
            <SelectTrigger className={`h-11 focus:ring-0 focus:ring-offset-0 focus:border-[#605DEC] ${errors.skillCategory ? "border-red-400" : ""}`}>
              <SelectValue placeholder="Choose a skill/category" />
            </SelectTrigger>
            <SelectContent className="rounded-lg border border-gray-200 bg-white shadow-lg max-h-72 overflow-y-auto">
              {skillCategories.map((cat) => (
                <SelectItem key={cat} value={cat} className="cursor-pointer focus:bg-gray-100 px-3 py-2 text-sm">
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.skillCategory && <p className="text-xs text-red-500">{errors.skillCategory}</p>}
        </div>

        <div className="space-y-1.5">
          <Label className="text-sm font-medium text-gray-700">Years of Experience</Label>
          <Select
            value={data.yearsOfExperience}
            onValueChange={(v) => setData({ ...data, yearsOfExperience: v })}
          >
            <SelectTrigger className={`h-11 focus:ring-0 focus:ring-offset-0 focus:border-[#605DEC] ${errors.yearsOfExperience ? "border-red-400" : ""}`}>
              <SelectValue placeholder="Choose an option" />
            </SelectTrigger>
            <SelectContent className="rounded-lg border border-gray-200 bg-white shadow-lg max-h-72 overflow-y-auto">
              {experienceOptions.map((opt) => (
                <SelectItem key={opt} value={opt} className="cursor-pointer focus:bg-gray-100 px-3 py-2 text-sm">
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.yearsOfExperience && <p className="text-xs text-red-500">{errors.yearsOfExperience}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="bio" className="text-sm font-medium text-gray-700">Professional Bio</Label>
          <textarea
            id="bio"
            value={data.bio}
            onChange={(e) => setData({ ...data, bio: e.target.value })}
            placeholder="Describe your skills, experience, and the type of work you do."
            rows={5}
            className={`w-full resize-none p-3 border rounded-lg text-sm focus:outline-none focus:border-[#605DEC] transition-colors ${errors.bio ? "border-red-400" : "border-gray-300 hover:border-gray-400"}`}
          />
          {errors.bio && <p className="text-xs text-red-500">{errors.bio}</p>}
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
