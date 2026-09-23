import { PageHeader } from "../components/Nav";
import { SettingsList, SectionLabel } from "../components/ListRow";

export default function Playback() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader title="Playback Settings" back="/profile" />
      <div className="max-w-2xl mx-auto px-4 md:px-6 py-6">
        <SectionLabel>Streaming quality</SectionLabel>
        <SettingsList items={[
          { label: "Cellular data", icon: "settings", meta: "Auto", href: "#" },
          { label: "Wi-Fi", icon: "settings", meta: "Highest (4K)", href: "#" },
          { label: "Data Saver", icon: "settings", toggle: true, on: false },
        ]} />

        <SectionLabel>Download quality</SectionLabel>
        <SettingsList items={[
          { label: "Download quality", icon: "download", meta: "HD (720p)", href: "#" },
          { label: "Downloads over Wi-Fi only", icon: "download", toggle: true, on: true },
          { label: "Smart downloads", icon: "download", toggle: true, on: true },
        ]} />

        <SectionLabel>Audio & subtitles</SectionLabel>
        <SettingsList items={[
          { label: "Preferred audio", icon: "volume", meta: "Tamil", href: "/language" },
          { label: "Preferred subtitles", icon: "cc", meta: "English", href: "/language" },
          { label: "Subtitle appearance", icon: "settings", meta: "Default", href: "#" },
          { label: "Dolby Atmos", icon: "volume", toggle: true, on: true },
        ]} />

        <SectionLabel>Playback</SectionLabel>
        <SettingsList items={[
          { label: "Autoplay next episode", icon: "play", toggle: true, on: true },
          { label: "Autoplay previews", icon: "play", toggle: true, on: false },
          { label: "Skip intro automatically", icon: "play", toggle: true, on: true },
          { label: "Skip recap automatically", icon: "play", toggle: true, on: true },
          { label: "Picture-in-Picture", icon: "pip", toggle: true, on: true },
        ]} />

        {/* Subtitle preview */}
        <SectionLabel>Preview</SectionLabel>
        <div className="rounded-2xl bg-surface border border-line overflow-hidden">
          <div className="aspect-video relative nila-gradient">
            <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.2), transparent 55%)" }} />
            <div className="absolute bottom-6 inset-x-6 text-center">
              <p className="inline-block bg-black/70 backdrop-blur px-4 py-2 rounded text-white text-lg font-medium">
                "The tide always tells the truth."
              </p>
            </div>
          </div>
          <div className="p-4 text-xs text-muted text-center">Subtitle preview · English · Default style</div>
        </div>
      </div>
    </div>
  );
}
