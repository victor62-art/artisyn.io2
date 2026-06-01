"use client";

import React, { useState, useEffect } from "react";

/**
 * PrivacySettingsPage component provides the interface for artisans to manage 
 * their profile visibility and data sharing preferences.
 */
export default function PrivacySettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [settings, setSettings] = useState({
    profileVisibility: "public",
    showEmail: false,
    showEarnings: false,
    discoverable: true,
  });

  // Fetch existing privacy settings on load
  useEffect(() => {
    const fetchPrivacySettings = async () => {
      try {
        // Integration with privacy endpoints as per requirements
        const response = await fetch("/api/user/privacy");
        if (response.ok) {
          const data = await response.json();
          setSettings(data);
        }
      } catch (error) {
        console.error("Failed to fetch privacy settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacySettings();
  }, []);

  const handleToggle = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: typeof prev[key] === 'boolean' ? !prev[key] : prev[key]
    }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);

    try {
      const response = await fetch("/api/user/privacy", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });

      if (response.ok) {
        setSuccess(true);
        // Persists across reload is handled by the API; local state feedback provided here
        setTimeout(() => setSuccess(false), 3000);
      } else {
        throw new Error("Persistence failed");
      }
    } catch (error) {
      alert("Error saving settings. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-600">Loading Privacy Settings...</div>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Settings</h1>
        <p className="text-gray-500">Control your profile discoverability and visibility.</p>
      </div>

      <form onSubmit={handleSave} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <div className="p-6 space-y-8">
          {/* Profile Visibility */}
          <section>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Profile Visibility
            </label>
            <select
              value={settings.profileVisibility}
              onChange={(e) => setSettings({ ...settings, profileVisibility: e.target.value })}
              className="w-full md:w-1/2 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all"
            >
              <option value="public">Public</option>
              <option value="followers">Followers Only</option>
              <option value="private">Private</option>
            </select>
            <p className="mt-2 text-sm text-gray-500">Public profiles can be seen by anyone on the platform.</p>
          </section>

          <hr className="border-gray-100" />

          {/* Toggles */}
          <div className="space-y-6">
            {[
              { id: "showEmail", label: "Show email on profile", desc: "Allow users to see your contact email address." },
              { id: "showEarnings", label: "Display total earnings", desc: "Show your cumulative earnings to build trust." },
              { id: "discoverable", label: "Search discoverability", desc: "Appear in the search results and artisan directory." }
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex-grow pr-4">
                  <h3 className="text-sm font-semibold text-gray-800">{item.label}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleToggle(item.id as keyof typeof settings)}
                  className={`${settings[item.id as keyof typeof settings] ? 'bg-green-500' : 'bg-gray-300'} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  <span className={`${settings[item.id as keyof typeof settings] ? 'translate-x-6' : 'translate-x-1'} pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-200 ease-in-out mt-1`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
          {success && <span className="text-green-600 text-sm font-medium animate-pulse">Changes saved successfully!</span>}
          <button
            type="submit"
            disabled={saving}
            className="ml-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
