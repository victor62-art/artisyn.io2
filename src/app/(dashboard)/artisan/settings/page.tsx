import Link from 'next/link';

import {
  SettingsTabsShell,
  type SettingsTab,
} from '@/components/settings/settings-tabs-shell';

const tabs: SettingsTab[] = [
  {
    value: 'profile',
    label: 'Profile',
    description: 'Name, bio, and public details',
    content: (
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-900">
            Display name
          </label>
          <div className="mt-2 rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">
            Samuel Ade
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-900">
            Profile summary
          </label>
          <div className="mt-2 min-h-24 rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">
            Experienced artisan focused on residential repairs and client
            service.
          </div>
        </div>
      </div>
    ),
  },
  {
    value: 'security',
    label: 'Security',
    description: 'Password and wallet access',
    content: (
      <div className="space-y-4">
        <div className="rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          Wallet connection is active and verified.
        </div>
        <button className="rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">
          Review connected devices
        </button>
      </div>
    ),
  },
  {
    value: 'notifications',
    label: 'Notifications',
    description: 'Email and job alerts',
    content: (
      <div className="space-y-3">
        {['Job invitations', 'Application updates', 'Payment reminders'].map(
          (item) => (
            <label
              key={item}
              className="flex items-center justify-between rounded-md border border-gray-200 px-3 py-2"
            >
              <span className="text-sm font-medium text-gray-900">{item}</span>
              <input type="checkbox" defaultChecked className="h-4 w-4" />
            </label>
          ),
        )}
      </div>
    ),
  },
  {
    value: 'billing',
    label: 'Billing',
    description: 'Plan and payout settings',
    content: (
      <div className="rounded-md border border-gray-200 p-4">
        <p className="text-sm font-medium text-gray-900">Current plan</p>
        <p className="mt-1 text-2xl font-bold text-gray-950">Free</p>
        <p className="mt-2 text-sm text-gray-600">
          Upgrade options and payout controls can live inside this pane.
        </p>
      </div>
    ),
  },
  {
    value: 'team',
    label: 'Team',
    description: 'Coming soon',
    disabled: true,
    content: (
      <p className="text-sm text-gray-600">
        Team settings are not available yet.
      </p>
    ),
  },
];

export default function SettingsTabsShellTestPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 text-gray-900 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Setting</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your profile efficiently and customize it to suite your use.
          </p>
        </div>

        <div className="mb-5 flex flex-wrap gap-2 text-sm">
          {tabs
            .filter((tab) => !tab.disabled)
            .map((tab) => (
              <Link
                key={tab.value}
                href={`/component-tests/settings-tabs-shell?tab=${tab.value}`}
                className="rounded-md border border-gray-200 bg-white px-3 py-2 font-medium text-gray-700 hover:border-[#605DEC] hover:text-[#605DEC]"
              >
                Link to {tab.label}
              </Link>
            ))}
        </div>

        <SettingsTabsShell
          tabs={tabs}
          defaultTab="profile"
          title="Account Settings"
          description="Shared shell for account management sections with URL-backed navigation."
          navHeader={
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Samuel Adeyemi
              </p>
              <p className="mt-1 text-xs text-gray-500">Curator account</p>
            </div>
          }
          navFooter={
            <p className="rounded-md bg-gray-50 p-3 text-xs text-gray-500">
              Active tab is stored in the URL query string.
            </p>
          }
        />
      </div>
    </main>
  );
}
