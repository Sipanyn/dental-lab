const stats = [
  {
    title: "کل پرونده‌ها",
    value: "۱۲۸",
    change: "+۱۲٪",
  },
  {
    title: "در انتظار بررسی",
    value: "۱۸",
    change: "+۴٪",
  },
  {
    title: "در حال تولید",
    value: "۳۲",
    change: "+۸٪",
  },
  {
    title: "تکمیل شده",
    value: "۷۸",
    change: "+۱۵٪",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">سلام، مدیر 👋</h1>

        <p className="mt-1 text-sm text-slate-500">
          وضعیت امروز لابراتوار را مشاهده کنید.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.title} className="rounded-xl border bg-white p-5">
            <p className="text-sm text-slate-500">{stat.title}</p>

            <div className="mt-3 flex items-end justify-between">
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>

              <span className="text-sm font-medium text-green-600">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder */}
      <div className="rounded-xl border bg-white p-8">
        <h2 className="font-semibold text-slate-900">پرونده‌های اخیر</h2>

        <p className="mt-2 text-sm text-slate-500">
          در مرحله بعد جدول پرونده‌ها را اینجا می‌سازیم.
        </p>
      </div>
    </div>
  );
}
