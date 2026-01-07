"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  TrendingUp,
  Settings,
  AlertTriangle,
  Check,
  Bot,
  Send,
} from "lucide-react";

// Sidebar navigation items
const navItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Package, label: "SKU Details" },
  { icon: ShoppingCart, label: "Reorder" },
  { icon: TrendingUp, label: "Large Orders" },
  { icon: Settings, label: "Settings" },
];

// Reorder items data
const reorderItems = [
  { sku: "01-37700", name: "Anisyl Alcohol", qty: "-251 kg" },
  { sku: "03-05800", name: "Natural Capro...", qty: "-324 kg" },
  { sku: "05-04005", name: "Enocianina Gr...", qty: "-89 kg" },
  { sku: "03-02603", name: "Calcium Phos...", qty: "-135 kg" },
];

// Overstock items data
const overstockItems = [
  { sku: "05-67550", name: "Ethyl Salicylate", qty: "+32,770 kg" },
  { sku: "20-51500", name: "Thymol Crystals", qty: "+24,331 kg" },
  { sku: "05-77200", name: "Natural Eugenol", qty: "+15,591 kg" },
];

// Pricing table data
const pricingData = [
  {
    sku: "12013673-1",
    desc: "Brisket Bnls, Chairman's R.",
    inv: 3,
    weeks: 0.2,
    cost: "$4.77",
    usda: "$4.97",
    current: "$5.09",
    aiPrice: "$5.19",
    aiDelta: "+8.1%",
  },
  {
    sku: "12011014-1",
    desc: "Brisket Bnls, IBP (Ch)",
    inv: 11,
    weeks: 0.7,
    cost: "$4.59",
    usda: "$4.85",
    current: "$4.70",
    aiPrice: "$4.85",
    aiDelta: "+5.3%",
  },
  {
    sku: "120770599-1",
    desc: "Corned Beef Brisket Flats",
    inv: 31,
    weeks: 3.5,
    cost: "$6.28",
    usda: "$6.82",
    current: "$6.69",
    aiPrice: "$6.39",
    aiDelta: "+1.7%",
  },
];

export function ProductMockup() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Browser chrome mockup */}
      <div className="bg-slate-800 rounded-t-xl p-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-slate-700 rounded-md px-4 py-1.5 text-sm text-slate-300 text-center">
            app.lora.ai
          </div>
        </div>
      </div>

      {/* App container */}
      <div className="bg-slate-50 rounded-b-xl border border-slate-200 overflow-hidden">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-48 bg-white border-r border-slate-100 p-4 hidden sm:block">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
                <span className="text-white text-xs font-bold">L</span>
              </div>
              <span className="font-semibold text-slate-800">Lora</span>
            </div>

            {/* Nav items */}
            <nav className="space-y-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                    item.active
                      ? "bg-slate-100 text-slate-900 font-medium"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </div>
              ))}
            </nav>
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 sm:p-6 min-h-[500px]">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-lg sm:text-xl font-semibold text-slate-800">
                  Inventory Command Center
                </h1>
                <p className="text-xs sm:text-sm text-slate-500">
                  Real-time overview • 5,658 SKUs monitored
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 bg-red-50 text-red-600 rounded-full text-xs font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  271 Needs Reorder
                </div>
                <div className="hidden sm:flex items-center gap-4 text-xs">
                  <div className="text-center">
                    <div className="font-semibold text-slate-800">89</div>
                    <div className="text-slate-500">Healthy</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-slate-600">2,174</div>
                    <div className="text-slate-500">Overstock</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              {/* Reorder card */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-800 text-sm">
                        Reorder
                      </div>
                      <div className="text-xs text-slate-500">
                        Below reorder point
                      </div>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-red-100 text-red-600 rounded text-xs font-medium">
                    271 items
                  </div>
                </div>
                <div className="p-3 space-y-2">
                  {reorderItems.map((item) => (
                    <div
                      key={item.sku}
                      className="flex items-center justify-between p-2 bg-red-50/50 rounded-lg border-l-2 border-red-400"
                    >
                      <div>
                        <div className="text-xs font-medium text-red-700">
                          {item.sku}
                        </div>
                        <div className="text-xs text-slate-500">{item.name}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-red-600">
                          {item.qty}
                        </span>
                        <button className="px-2 py-1 bg-white border border-slate-200 rounded text-xs flex items-center gap-1 hover:bg-slate-50">
                          <ShoppingCart className="w-3 h-3" />
                          Order
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing card */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-medium text-slate-800 text-sm">
                      AI Pricing Recommendations
                    </div>
                    <div className="text-xs text-slate-600 font-medium">
                      72 SKUs
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-medium">
                      Fresh Beef
                    </div>
                    <div className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs">
                      Poultry
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="space-y-2">
                    {pricingData.slice(0, 3).map((item) => (
                      <div
                        key={item.sku}
                        className="flex items-center justify-between p-2 bg-slate-50 rounded-lg"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-medium text-slate-700 truncate">
                            {item.desc}
                          </div>
                          <div className="text-xs text-slate-500">
                            Current: {item.current}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-2">
                          <div className="text-right">
                            <div className="text-xs font-semibold text-emerald-600">
                              {item.aiPrice}
                            </div>
                            <div className="text-xs text-emerald-500">
                              {item.aiDelta}
                            </div>
                          </div>
                          <button className="px-2 py-1 bg-emerald-500 text-white rounded text-xs flex items-center gap-1 hover:bg-emerald-600">
                            <Check className="w-3 h-3" />
                            Accept
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Overstock card */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-slate-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-800 text-sm">
                        Overstock
                      </div>
                      <div className="text-xs text-slate-500">
                        Excess inventory
                      </div>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                    2,174 SKUs
                  </div>
                </div>
                <div className="p-3 space-y-2">
                  {overstockItems.map((item) => (
                    <div
                      key={item.sku}
                      className="flex items-center justify-between p-2 bg-slate-50 rounded-lg border-l-2 border-slate-400"
                    >
                      <div>
                        <div className="text-xs font-medium text-slate-700">
                          {item.sku}
                        </div>
                        <div className="text-xs text-slate-500">{item.name}</div>
                      </div>
                      <span className="text-xs font-medium text-slate-600">
                        {item.qty}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Assistant floating */}
            <div className="absolute bottom-4 right-4 w-64 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hidden lg:block">
              <div className="p-3 bg-slate-900 text-white">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  <span className="font-medium text-sm">AI Assistant</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Ask about SKUs, margins, inventory
                </p>
              </div>
              <div className="p-3">
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                  <input
                    type="text"
                    placeholder="Ask a question..."
                    className="flex-1 text-xs bg-transparent outline-none text-slate-600 placeholder:text-slate-400"
                    readOnly
                  />
                  <button className="w-7 h-7 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-slate-800">
                    <Send className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shadow/glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-slate-400/20 via-slate-500/20 to-slate-400/20 rounded-2xl blur-2xl -z-10" />
    </div>
  );
}
