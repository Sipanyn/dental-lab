export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 h-20 border-b bg-white/80 backdrop-blur">
      <div className="flex h-full items-center justify-between px-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">داشبورد</h2>

          <p className="text-sm text-slate-500">مدیریت لابراتوار دندانپزشکی</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-lg p-2 transition hover:bg-slate-100">
            🔔
          </button>

          <button className="rounded-lg p-2 transition hover:bg-slate-100">
            🌙
          </button>
        </div>
      </div>
    </header>
  );
}
