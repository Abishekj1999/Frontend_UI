"use client";
import { useState } from "react";
import { PageHeader } from "../components/Nav";
import { Icon } from "../components/Icon";

const langs = [
  { code: "en", name: "English", native: "English" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
  { code: "te", name: "Telugu", native: "తెలుగు" },
  { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", native: "മലയാളം" },
  { code: "bn", name: "Bengali", native: "বাংলা" },
  { code: "mr", name: "Marathi", native: "मराठी" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
  { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
];

export default function Language() {
  const [selected, setSelected] = useState("en");
  return (
    <div className="min-h-screen pb-16">
      <PageHeader title="Language" back="/profile" />
      <div className="max-w-2xl mx-auto px-4 md:px-6 py-6">
        <div className="flex gap-2 mb-6">
          {["App", "Audio", "Subtitles"].map((t, i) => (
            <button key={t} className={`flex-1 py-2.5 rounded-xl text-sm font-medium ${i === 0 ? "bg-white text-black" : "bg-surface border border-line text-white/70"}`}>{t}</button>
          ))}
        </div>

        <p className="eyebrow px-2 mb-2">Choose your app language</p>
        <div className="rounded-2xl bg-surface border border-line divide-y divide-white/[0.04] overflow-hidden">
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => setSelected(l.code)}
              className="w-full flex items-center gap-4 px-4 py-4 hover:bg-white/[0.03] text-left"
            >
              <div className="flex-1">
                <p className="font-medium">{l.name}</p>
                <p className="text-xs text-muted mt-0.5">{l.native}</p>
              </div>
              {selected === l.code ? (
                <div className="w-6 h-6 rounded-full nila-gradient flex items-center justify-center"><Icon name="check" size={14} stroke={2.5} /></div>
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-white/20" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
