import { PageHeader } from "../components/Nav";
import { SettingsList, SectionLabel } from "../components/ListRow";

export default function AppSettings() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader title="App Settings" back="/profile" />
      <div className="max-w-2xl mx-auto px-4 md:px-6 py-6">
        <SectionLabel>Appearance</SectionLabel>
        <SettingsList items={[
          { label: "Theme", icon: "settings", meta: "Dark", href: "#" },
          { label: "App Icon", icon: "info", meta: "Default", href: "#" },
          { label: "Reduce Motion", icon: "settings", toggle: true, on: false },
        ]} />

        <SectionLabel>Data & Storage</SectionLabel>
        <SettingsList items={[
          { label: "Data Saver", icon: "settings", toggle: true, on: false },
          { label: "Downloads over Wi-Fi only", icon: "download", toggle: true, on: true },
          { label: "Autoplay next episode", icon: "play", toggle: true, on: true },
          { label: "Autoplay previews", icon: "play", toggle: true, on: false },
          { label: "Storage used", icon: "download", meta: "4.3 GB / 20 GB", href: "/downloads" },
        ]} />

        <SectionLabel>Privacy</SectionLabel>
        <SettingsList items={[
          { label: "Personalized ads", icon: "info", toggle: true, on: true },
          { label: "Share viewing activity", icon: "share", toggle: true, on: false },
          { label: "Parental Controls", icon: "lock", meta: "Off", href: "#" },
          { label: "Manage devices", icon: "tv", meta: "3 signed in", href: "#" },
        ]} />

        <SectionLabel>Advanced</SectionLabel>
        <SettingsList items={[
          { label: "Clear cache", icon: "trash", meta: "128 MB" },
          { label: "Reset preferences", icon: "settings", danger: true },
        ]} />
      </div>
    </div>
  );
}
