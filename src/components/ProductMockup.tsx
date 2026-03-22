"use client";

import {
  LayoutDashboard,
  DollarSign,
  TrendingUp,
  Bell,
  Check,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: DollarSign, label: "Pricing" },
  { icon: TrendingUp, label: "Margins" },
  { icon: Bell, label: "Alerts" },
];

const pricingRows = [
  {
    desc: "Brisket Bnls, Chairman's R.",
    current: "$5.09",
    aiPrice: "$5.19",
    delta: "+8.1%",
    reason: "Cost up 3.2%, USDA trending higher",
  },
  {
    desc: "Brisket Bnls, IBP (Ch)",
    current: "$4.70",
    aiPrice: "$4.85",
    delta: "+5.3%",
    reason: "Below market, margin at risk",
  },
  {
    desc: "Corned Beef Brisket Flats",
    current: "$6.69",
    aiPrice: "$6.39",
    delta: "+1.7%",
    reason: "Overstocked, optimize for velocity",
  },
];

export function ProductMockup() {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Browser chrome */}
      <div className="bg-slate-900 rounded-t-xl p-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-slate-700" />
          <div className="w-3 h-3 rounded-full bg-slate-700" />
          <div className="w-3 h-3 rounded-full bg-slate-700" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-slate-800 rounded-md px-4 py-1.5 text-sm text-slate-400 text-center">
            app.lora.ai
          </div>
        </div>
      </div>

      {/* App */}
      <div className="bg-white rounded-b-xl border border-slate-200 overflow-hidden">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-44 border-r border-slate-100 p-4 hidden sm:block">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center">
                <span className="text-white text-xs font-bold">L</span>
              </div>
              <span className="font-semibold text-slate-900 text-sm">Lora</span>
            </div>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs ${
                    item.active
                      ? "bg-slate-100 text-slate-900 font-medium"
                      : "text-slate-400"
                  }`}
                >
                  <item.icon className="w-3.5 h-3.5" />
                  {item.label}
                </div>
              ))}
            </nav>
          </div>

          {/* Main */}
          <div className="flex-1 p-5 sm:p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h1 className="text-base font-semibold text-slate-900">
                  Pricing Recommendations
                </h1>
                <p className="text-xs text-slate-400 mt-0.5">
                  Fresh Beef · 72 SKUs
                </p>
              </div>
              <div className="px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-medium">
                +$42K opportunity
              </div>
            </div>

            <div className="space-y-2">
              {pricingRows.map((row) => (
                <div
                  key={row.desc}
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                >
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-slate-700 truncate">
                      {row.desc}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 hidden sm:block">
                      {row.reason}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 ml-3 shrink-0">
                    <div className="text-right">
                      <div className="text-xs text-slate-400">
                        {row.current}
                      </div>
                      <div className="text-xs font-semibold text-emerald-600">
                        {row.aiPrice}
                      </div>
                    </div>
                    <button className="w-7 h-7 bg-emerald-500 text-white rounded-md flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Shadow */}
      <div className="absolute -inset-4 bg-slate-900/5 rounded-2xl blur-2xl -z-10" />
    </div>
  );
}
