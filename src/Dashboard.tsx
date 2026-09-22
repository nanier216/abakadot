import { useState } from "react"
import {
  LayoutDashboard,
  Users,
  TabletSmartphone,
  BarChart3,
  Settings,
  Battery,
  Wifi,
  Volume2,
  History,
  Search,
  Menu,
  X,
  Home,
  TrendingUp,
  Clock,
  Award,
  Activity,
  Download,
  Bell,
  Shield,
  LogOut,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  WifiOff,
  ChevronRight,
  Filter,
  MoreVertical,
  RefreshCw,
  Edit3,
} from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

interface DashboardProps {
  onGoHome: () => void
}

// ─── Data ───────────────────────────────────────────────────────────────────
const students = [
  {
    id: 1,
    name: "Maria Santos",
    grade: "Grade 1 Braille",
    progress: 78,
    deviceId: "PD-004",
    lastActive: "2 min ago",
    status: "active",
    avatar: "MS",
    sessions: 42,
    streak: 7,
    masteredChars: 24,
    email: "maria.s@school.edu",
  },
  {
    id: 2,
    name: "Leo Chen",
    grade: "Grade 2 Braille",
    progress: 45,
    deviceId: "PD-007",
    lastActive: "1 hr ago",
    status: "active",
    avatar: "LC",
    sessions: 28,
    streak: 3,
    masteredChars: 14,
    email: "leo.c@school.edu",
  },
  {
    id: 3,
    name: "Samira Ali",
    grade: "Pre-K Intro",
    progress: 92,
    deviceId: null,
    lastActive: "3 hr ago",
    status: "inactive",
    avatar: "SA",
    sessions: 61,
    streak: 14,
    masteredChars: 8,
    email: "samira.a@school.edu",
  },
  {
    id: 4,
    name: "James Wilson",
    grade: "Grade 1 Braille",
    progress: 60,
    deviceId: "PD-002",
    lastActive: "Yesterday",
    status: "active",
    avatar: "JW",
    sessions: 35,
    streak: 5,
    masteredChars: 19,
    email: "james.w@school.edu",
  },
  {
    id: 5,
    name: "Aisha Nkosi",
    grade: "Pre-K Intro",
    progress: 33,
    deviceId: "PD-009",
    lastActive: "5 min ago",
    status: "active",
    avatar: "AN",
    sessions: 19,
    streak: 2,
    masteredChars: 4,
    email: "aisha.n@school.edu",
  },
  {
    id: 6,
    name: "Carlos Rivera",
    grade: "Grade 2 Braille",
    progress: 71,
    deviceId: "PD-003",
    lastActive: "30 min ago",
    status: "active",
    avatar: "CR",
    sessions: 48,
    streak: 9,
    masteredChars: 22,
    email: "carlos.r@school.edu",
  },
  {
    id: 7,
    name: "Priya Sharma",
    grade: "Grade 1 Braille",
    progress: 85,
    deviceId: null,
    lastActive: "2 days ago",
    status: "inactive",
    avatar: "PS",
    sessions: 53,
    streak: 0,
    masteredChars: 26,
    email: "priya.s@school.edu",
  },
  {
    id: 8,
    name: "Noah Adeyemi",
    grade: "Pre-K Intro",
    progress: 22,
    deviceId: "PD-011",
    lastActive: "10 min ago",
    status: "active",
    avatar: "NA",
    sessions: 12,
    streak: 4,
    masteredChars: 3,
    email: "noah.a@school.edu",
  },
]

const devices = [
  {
    id: "PD-002",
    unit: "PinDot Unit #02",
    studentName: "James Wilson",
    status: "online",
    battery: 91,
    signal: "strong",
    firmware: "v2.1.4",
    lastSync: "5 min ago",
    mode: "Writing",
  },
  {
    id: "PD-003",
    unit: "PinDot Unit #03",
    studentName: "Carlos Rivera",
    status: "online",
    battery: 67,
    signal: "good",
    firmware: "v2.1.4",
    lastSync: "2 min ago",
    mode: "Reading",
  },
  {
    id: "PD-004",
    unit: "PinDot Unit #04",
    studentName: "Maria Santos",
    status: "online",
    battery: 84,
    signal: "strong",
    firmware: "v2.1.4",
    lastSync: "Just now",
    mode: "Writing",
  },
  {
    id: "PD-007",
    unit: "PinDot Unit #07",
    studentName: "Leo Chen",
    status: "idle",
    battery: 52,
    signal: "weak",
    firmware: "v2.0.9",
    lastSync: "1 hr ago",
    mode: "Idle",
  },
  {
    id: "PD-009",
    unit: "PinDot Unit #09",
    studentName: "Aisha Nkosi",
    status: "online",
    battery: 38,
    signal: "good",
    firmware: "v2.1.4",
    lastSync: "4 min ago",
    mode: "Reading",
  },
  {
    id: "PD-011",
    unit: "PinDot Unit #11",
    studentName: "Noah Adeyemi",
    status: "online",
    battery: 73,
    signal: "strong",
    firmware: "v2.1.3",
    lastSync: "8 min ago",
    mode: "Writing",
  },
  {
    id: "PD-005",
    unit: "PinDot Unit #05",
    studentName: "Unassigned",
    status: "offline",
    battery: 12,
    signal: "none",
    firmware: "v2.0.9",
    lastSync: "3 days ago",
    mode: "—",
  },
  {
    id: "PD-008",
    unit: "PinDot Unit #08",
    studentName: "Unassigned",
    status: "maintenance",
    battery: 0,
    signal: "none",
    firmware: "v2.1.4",
    lastSync: "N/A",
    mode: "—",
  },
]

const chartData = [
  { day: "Mon", time: 4.5 },
  { day: "Tue", time: 4.2 },
  { day: "Wed", time: 3.8 },
  { day: "Thu", time: 3.9 },
  { day: "Fri", time: 3.1 },
  { day: "Sat", time: 2.8 },
  { day: "Sun", time: 2.5 },
]

const classProgressData = students.map((s) => ({
  name: s.name.split(" ")[0],
  progress: s.progress,
}))

const weeklyUsageData = [
  { day: "Mon", hours: 5.2 },
  { day: "Tue", hours: 4.8 },
  { day: "Wed", hours: 6.1 },
  { day: "Thu", hours: 5.5 },
  { day: "Fri", hours: 4.2 },
  { day: "Sat", hours: 2.1 },
  { day: "Sun", hours: 1.8 },
]

const recentSessions = [
  {
    id: 1,
    student: "Maria Santos",
    date: "Sep 22, 2026",
    duration: "42 min",
    chars: 8,
    grade: "Grade 1 Braille",
    result: "Excellent",
  },
  {
    id: 2,
    student: "Aisha Nkosi",
    date: "Sep 22, 2026",
    duration: "28 min",
    chars: 3,
    grade: "Pre-K Intro",
    result: "Good",
  },
  {
    id: 3,
    student: "Carlos Rivera",
    date: "Sep 22, 2026",
    duration: "51 min",
    chars: 11,
    grade: "Grade 2 Braille",
    result: "Excellent",
  },
  {
    id: 4,
    student: "Leo Chen",
    date: "Sep 21, 2026",
    duration: "35 min",
    chars: 5,
    grade: "Grade 2 Braille",
    result: "Needs Review",
  },
  {
    id: 5,
    student: "Noah Adeyemi",
    date: "Sep 21, 2026",
    duration: "19 min",
    chars: 2,
    grade: "Pre-K Intro",
    result: "Good",
  },
]

// ─── Helpers ────────────────────────────────────────────────────────────────
function BatteryBar({ pct }: { pct: number }) {
  const color = pct > 50 ? "#2DD4BF" : pct > 20 ? "#FBBF24" : "#f87171"
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-xs text-slate-500 tabular-nums">{pct}%</span>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    online: "bg-emerald-50 text-emerald-700",
    idle: "bg-amber-50 text-amber-700",
    offline: "bg-slate-100 text-slate-500",
    maintenance: "bg-red-50 text-red-600",
    active: "bg-teal-50 text-teal-700",
    inactive: "bg-slate-100 text-slate-500",
  }
  const labels: Record<string, string> = {
    online: "Online",
    idle: "Idle",
    offline: "Offline",
    maintenance: "Maintenance",
    active: "Active",
    inactive: "Inactive",
  }
  return (
    <span
      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${map[status] ?? "bg-slate-100 text-slate-500"}`}
    >
      {labels[status] ?? status}
    </span>
  )
}

function SignalDot({ signal }: { signal: string }) {
  const map: Record<string, string> = {
    strong: "text-emerald-500",
    good: "text-brand-teal",
    weak: "text-brand-orange",
    none: "text-slate-300",
  }
  return <Wifi className={`w-4 h-4 ${map[signal] ?? "text-slate-400"}`} />
}

// ─── Section: Dashboard Overview ────────────────────────────────────────────
function DashboardOverview({
  selectedStudentId,
  setSelectedStudentId,
}: {
  selectedStudentId: number
  setSelectedStudentId: (id: number) => void
}) {
  const [activeTab, setActiveTab] = useState<"device" | "metrics">("device")
  const [mobilePanel, setMobilePanel] = useState<"roster" | "detail">("roster")
  const selectedStudent = students.find((s) => s.id === selectedStudentId)!

  return (
    <div className="flex flex-col flex-1 overflow-hidden min-h-0">
      {/* Mobile panel toggle — sits above the panels as a column item */}
      <div className="md:hidden flex shrink-0 border-b border-gray-200 bg-white z-10">
        <button
          onClick={() => setMobilePanel("roster")}
          className={`flex-1 py-3 text-sm font-semibold transition-colors ${
            mobilePanel === "roster"
              ? "text-brand-teal border-b-2 border-brand-teal"
              : "text-slate-500"
          }`}
        >
          Learners
        </button>
        <button
          onClick={() => setMobilePanel("detail")}
          className={`flex-1 py-3 text-sm font-semibold transition-colors ${
            mobilePanel === "detail"
              ? "text-brand-teal border-b-2 border-brand-teal"
              : "text-slate-500"
          }`}
        >
          {selectedStudent.name.split(" ")[0]}'s Detail
        </button>
      </div>

      {/* Panels row */}
      <div className="flex flex-1 overflow-hidden min-h-0">
        {/* Roster */}
        <section
          className={`${
            mobilePanel === "roster" ? "flex" : "hidden"
          } md:flex w-full md:w-80 lg:w-96 shrink-0 bg-white border-r border-gray-200 flex-col min-h-0`}
        >
          <div className="p-5 border-b border-gray-100 bg-white">
            <h2 className="font-display text-xl font-bold text-slate-900">
              Active Learners
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Select a student to view metrics
            </p>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {students.map((student) => (
              <button
                key={student.id}
                onClick={() => {
                  setSelectedStudentId(student.id)
                  setMobilePanel("detail")
                }}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border-2 ${
                  selectedStudentId === student.id
                    ? "border-brand-teal bg-white shadow-md shadow-brand-teal/5"
                    : "border-transparent bg-white shadow-sm hover:border-gray-200 hover:shadow-md"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                      selectedStudentId === student.id
                        ? "bg-brand-teal text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {student.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <h3 className="font-bold text-slate-900 text-sm truncate">
                        {student.name}
                      </h3>
                      {student.deviceId && (
                        <div
                          className="w-2 h-2 rounded-full bg-brand-teal shrink-0"
                          title="Device Active"
                        />
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mb-2.5 truncate">
                      {student.grade}
                    </p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-medium text-slate-500">
                        <span>Mastery</span>
                        <span>{student.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-brand-teal h-full rounded-full transition-all duration-500"
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Detail Panel */}
        <section
          className={`${
            mobilePanel === "detail" ? "flex" : "hidden"
          } md:flex flex-1 flex-col bg-[#F8FAFC] overflow-hidden min-h-0`}
        >
          <div className="bg-white border-b border-gray-200 pt-6 px-6 md:px-8 flex-none shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-brand-orange text-white flex items-center justify-center font-display font-bold text-xl shadow-lg shadow-brand-orange/20">
                {selectedStudent.avatar}
              </div>
              <div>
                <h1 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                  {selectedStudent.name}
                </h1>
                <p className="text-slate-500 text-sm font-medium">
                  {selectedStudent.grade}
                </p>
              </div>
            </div>
            <div className="flex space-x-6 md:space-x-8">
              {(["device", "metrics"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-1 font-semibold text-sm md:text-base transition-colors border-b-2 ${
                    activeTab === tab
                      ? "border-brand-teal text-brand-teal"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {tab === "device" ? "Live Device View" : "AI Skill Metrics"}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-5 md:p-8">
            {activeTab === "device" && (
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <TabletSmartphone className="w-7 h-7 text-slate-400" />
                    <div>
                      <h3 className="font-bold text-slate-900">
                        PinDot{" "}
                        {selectedStudent.deviceId ?? "No device assigned"}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm mt-1">
                        {selectedStudent.deviceId ? (
                          <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />{" "}
                            Online
                          </span>
                        ) : (
                          <span className="text-slate-400">
                            No device connected
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-slate-500">
                          <Battery className="w-4 h-4" /> 84%
                        </span>
                        <span className="flex items-center gap-1 text-slate-500">
                          <Wifi className="w-4 h-4" /> Strong
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-brand-orange/10 border border-brand-orange/20 px-4 py-2 rounded-full self-start sm:self-auto">
                    <span className="font-bold text-brand-orange flex items-center gap-2 text-sm">
                      <Volume2 className="w-4 h-4" /> Writing Mode
                    </span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center">
                    <h4 className="font-bold text-slate-900 mb-6 self-start text-sm">
                      Live Reading Plate
                    </h4>
                    <div className="bg-slate-800 rounded-3xl p-8 shadow-inner w-full max-w-[240px] aspect-[2/3] flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-2 rounded-2xl border border-slate-700 pointer-events-none" />
                      <div className="grid grid-cols-2 gap-6 relative z-10">
                        {[true, false, true, false, true, false].map(
                          (active, i) => (
                            <div
                              key={i}
                              className={`w-10 h-10 rounded-full border-2 ${
                                active
                                  ? "bg-brand-teal shadow-[0_0_16px_rgba(45,212,191,0.5)] border-brand-teal/50"
                                  : "bg-slate-900 border-slate-700 shadow-inner"
                              }`}
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center justify-between text-sm">
                      Activity Feed{" "}
                      <History className="w-4 h-4 text-slate-400" />
                    </h4>
                    <div className="flex-1 bg-slate-50 rounded-xl p-3 font-mono text-xs space-y-3 overflow-y-auto min-h-[200px]">
                      <div className="text-slate-500">
                        <span className="text-brand-teal font-bold mr-2">
                          [10:42:01]
                        </span>
                        System: Initialized '{selectedStudent.grade}' curriculum
                      </div>
                      <div className="text-slate-500">
                        <span className="text-brand-teal font-bold mr-2">
                          [10:43:15]
                        </span>
                        Device: Actuating intro sequence...
                      </div>
                      <div className="text-slate-800 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                        <span className="text-brand-orange font-bold mr-2">
                          [10:45:22]
                        </span>
                        Student spoke:{" "}
                        <span className="font-bold italic">"Apple"</span>
                        <span className="text-slate-500 mt-1 block">
                          ↳ AI translated to Braille. Actuating pins 1, 4...
                        </span>
                      </div>
                      <div className="text-slate-400 flex items-center gap-2 animate-pulse">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />{" "}
                        Waiting for input...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "metrics" && (
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      label: "Mastered",
                      value: selectedStudent.masteredChars,
                      color: "text-brand-teal",
                      sub: "+3 this week",
                      subColor: "bg-emerald-50 text-emerald-600",
                    },
                    {
                      label: "Learning",
                      value: 8,
                      color: "text-brand-orange",
                      sub: "Focus: K–O",
                      subColor: "bg-brand-orange/10 text-brand-orange",
                    },
                    {
                      label: "Needs Work",
                      value: 2,
                      color: "text-red-500",
                      sub: "High error: 'H','J'",
                      subColor: "bg-red-50 text-red-600",
                    },
                  ].map((card) => (
                    <div
                      key={card.label}
                      className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 flex flex-col justify-between"
                    >
                      <h4 className="text-slate-500 font-medium mb-2 text-xs md:text-sm">
                        {card.label}
                      </h4>
                      <div
                        className={`text-3xl md:text-4xl font-display font-bold ${card.color}`}
                      >
                        {card.value}
                      </div>
                      <div
                        className={`mt-3 text-xs font-medium w-fit px-2 py-1 rounded ${card.subColor}`}
                      >
                        {card.sub}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">
                    Average Response Time
                  </h3>
                  <p className="text-slate-500 text-xs mb-6">
                    Tactile read latency — last 7 days
                  </p>
                  <div className="h-[240px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={chartData}
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                      >
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="#f1f5f9"
                          vertical={false}
                        />
                        <XAxis
                          dataKey="day"
                          stroke="#94a3b8"
                          fontSize={11}
                          tickLine={false}
                          axisLine={false}
                          dy={8}
                        />
                        <YAxis
                          stroke="#94a3b8"
                          fontSize={11}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(v) => `${v}s`}
                          dx={-8}
                        />
                        <Tooltip
                          contentStyle={{
                            borderRadius: "12px",
                            border: "none",
                            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                          }}
                          formatter={(v: number) => [`${v}s`, "Avg Time"]}
                        />
                        <Line
                          type="monotone"
                          dataKey="time"
                          stroke="#2DD4BF"
                          strokeWidth={3}
                          dot={{
                            r: 5,
                            fill: "#2DD4BF",
                            stroke: "#fff",
                            strokeWidth: 2,
                          }}
                          activeDot={{
                            r: 7,
                            fill: "#FBBF24",
                            stroke: "#fff",
                            strokeWidth: 2,
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      {/* end panels row */}
    </div>
  )
}

// ─── Section: Student Directory ──────────────────────────────────────────────
function StudentDirectory() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const grades = ["All", "Pre-K Intro", "Grade 1 Braille", "Grade 2 Braille"]

  const filtered = students.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.grade.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === "All" || s.grade === filter
    return matchSearch && matchFilter
  })

  return (
    <div className="flex-1 overflow-y-auto p-5 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
              Student Directory
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              {students.length} enrolled learners
            </p>
          </div>
          <button className="flex items-center gap-2 bg-brand-teal text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#25B5A3] transition-colors shadow-sm shadow-brand-teal/20 self-start sm:self-auto">
            <Users className="w-4 h-4" /> Add Student
          </button>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search students..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition-all"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {grades.map((g) => (
              <button
                key={g}
                onClick={() => setFilter(g)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === g
                    ? "bg-brand-teal text-white shadow-sm"
                    : "bg-white border border-gray-200 text-slate-600 hover:border-brand-teal/40"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Student Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-teal/20 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold text-base shrink-0">
                  {student.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">
                        {student.name}
                      </h3>
                      <p className="text-xs text-slate-500">{student.email}</p>
                    </div>
                    <StatusBadge status={student.status} />
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                    <div className="bg-slate-50 rounded-xl p-2">
                      <div className="font-display font-bold text-brand-teal text-lg">
                        {student.progress}%
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        Mastery
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-2">
                      <div className="font-display font-bold text-slate-900 text-lg">
                        {student.streak}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        Day Streak
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-2">
                      <div className="font-display font-bold text-slate-900 text-lg">
                        {student.sessions}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        Sessions
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{student.lastActive}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {student.deviceId ? (
                        <span className="flex items-center gap-1 text-xs text-brand-teal font-medium">
                          <TabletSmartphone className="w-3.5 h-3.5" />{" "}
                          {student.deviceId}
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <TabletSmartphone className="w-3.5 h-3.5" /> No device
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>{student.grade}</span>
                      <span>{student.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full bg-brand-teal rounded-full"
                        style={{ width: `${student.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <Users className="w-10 h-10 mx-auto mb-3 opacity-40" />
            <p className="font-medium">No students match your search</p>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Section: Device Management ──────────────────────────────────────────────
function DeviceManagement() {
  const online = devices.filter((d) => d.status === "online").length
  const offline = devices.filter(
    (d) => d.status === "offline" || d.status === "idle",
  ).length
  const maintenance = devices.filter((d) => d.status === "maintenance").length

  return (
    <div className="flex-1 overflow-y-auto p-5 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
              Device Management
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              {devices.length} registered PinDot units
            </p>
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-slate-700 font-semibold px-4 py-2.5 rounded-xl hover:border-brand-teal/40 transition-colors text-sm self-start sm:self-auto">
            <RefreshCw className="w-4 h-4" /> Sync All
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              label: "Online",
              value: online,
              icon: CheckCircle2,
              color: "text-brand-teal",
              bg: "bg-teal-50",
            },
            {
              label: "Offline / Idle",
              value: offline,
              icon: WifiOff,
              color: "text-brand-orange",
              bg: "bg-amber-50",
            },
            {
              label: "Maintenance",
              value: maintenance,
              icon: AlertTriangle,
              color: "text-red-500",
              bg: "bg-red-50",
            },
          ].map((card) => (
            <div
              key={card.label}
              className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100"
            >
              <div
                className={`w-9 h-9 rounded-xl ${card.bg} flex items-center justify-center mb-3`}
              >
                <card.icon className={`w-5 h-5 ${card.color}`} />
              </div>
              <div className={`font-display font-bold text-3xl ${card.color}`}>
                {card.value}
              </div>
              <div className="text-slate-500 text-xs font-medium mt-1">
                {card.label}
              </div>
            </div>
          ))}
        </div>

        {/* Device List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Fleet Overview</h2>
            <button className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-teal transition-colors">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-xs text-slate-400 uppercase tracking-wider">
                  {[
                    "Unit",
                    "Assigned To",
                    "Status",
                    "Battery",
                    "Signal",
                    "Firmware",
                    "Last Sync",
                    "",
                  ].map((h) => (
                    <th key={h} className="px-5 py-3 text-left font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {devices.map((device) => (
                  <tr
                    key={device.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-5 py-4">
                      <span className="font-bold text-slate-900">
                        {device.unit}
                      </span>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {device.id}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {device.studentName}
                    </td>
                    <td className="px-5 py-4">
                      <StatusBadge status={device.status} />
                    </td>
                    <td className="px-5 py-4">
                      <BatteryBar pct={device.battery} />
                    </td>
                    <td className="px-5 py-4">
                      <SignalDot signal={device.signal} />
                    </td>
                    <td className="px-5 py-4 font-mono text-xs text-slate-500">
                      {device.firmware}
                    </td>
                    <td className="px-5 py-4 text-slate-500 text-xs">
                      {device.lastSync}
                    </td>
                    <td className="px-5 py-4">
                      <button className="text-slate-400 hover:text-brand-teal transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden divide-y divide-gray-100">
            {devices.map((device) => (
              <div key={device.id} className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      {device.unit}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {device.studentName}
                    </p>
                  </div>
                  <StatusBadge status={device.status} />
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <BatteryBar pct={device.battery} />
                  <SignalDot signal={device.signal} />
                  <span className="font-mono">{device.firmware}</span>
                </div>
                <div className="text-xs text-slate-400">
                  Last sync: {device.lastSync}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Section: Reports ────────────────────────────────────────────────────────
function Reports() {
  const avgMastery = Math.round(
    students.reduce((sum, s) => sum + s.progress, 0) / students.length,
  )
  const activeDevices = devices.filter((d) => d.status === "online").length
  const totalSessions = students.reduce((sum, s) => sum + s.sessions, 0)

  return (
    <div className="flex-1 overflow-y-auto p-5 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
              Reports
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Week of Sep 16 – 22, 2026
            </p>
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-slate-700 font-semibold px-4 py-2.5 rounded-xl hover:border-brand-teal/40 transition-colors text-sm self-start sm:self-auto">
            <Download className="w-4 h-4" /> Export PDF
          </button>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: "Enrolled Students",
              value: students.length,
              icon: Users,
              color: "text-brand-teal",
              bg: "bg-teal-50",
            },
            {
              label: "Avg Class Mastery",
              value: `${avgMastery}%`,
              icon: Award,
              color: "text-brand-orange",
              bg: "bg-amber-50",
            },
            {
              label: "Active Devices",
              value: activeDevices,
              icon: TabletSmartphone,
              color: "text-brand-teal",
              bg: "bg-teal-50",
            },
            {
              label: "Total Sessions",
              value: totalSessions,
              icon: Activity,
              color: "text-brand-orange",
              bg: "bg-amber-50",
            },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100"
            >
              <div
                className={`w-8 h-8 rounded-lg ${kpi.bg} flex items-center justify-center mb-3`}
              >
                <kpi.icon className={`w-4 h-4 ${kpi.color}`} />
              </div>
              <div
                className={`font-display font-bold text-2xl md:text-3xl ${kpi.color}`}
              >
                {kpi.value}
              </div>
              <div className="text-slate-500 text-xs font-medium mt-1">
                {kpi.label}
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-slate-900 mb-1">
              Class Mastery by Student
            </h3>
            <p className="text-slate-500 text-xs mb-5">
              Overall progress percentage
            </p>
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={classProgressData}
                  margin={{ top: 5, right: 10, bottom: 5, left: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#f1f5f9"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="name"
                    stroke="#94a3b8"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    dy={6}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) => `${v}%`}
                    dx={-4}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                    formatter={(v: number) => [`${v}%`, "Mastery"]}
                  />
                  <Bar
                    dataKey="progress"
                    fill="#2DD4BF"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-slate-900 mb-1">
              Weekly Usage Hours
            </h3>
            <p className="text-slate-500 text-xs mb-5">
              Total class device hours per day
            </p>
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={weeklyUsageData}
                  margin={{ top: 5, right: 10, bottom: 5, left: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#f1f5f9"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="day"
                    stroke="#94a3b8"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    dy={6}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) => `${v}h`}
                    dx={-4}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                    formatter={(v: number) => [`${v}h`, "Hours"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="hours"
                    stroke="#FBBF24"
                    strokeWidth={3}
                    dot={{
                      r: 5,
                      fill: "#FBBF24",
                      stroke: "#fff",
                      strokeWidth: 2,
                    }}
                    activeDot={{
                      r: 7,
                      fill: "#2DD4BF",
                      stroke: "#fff",
                      strokeWidth: 2,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Sessions Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <h2 className="font-bold text-slate-900">Recent Sessions</h2>
          </div>
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-xs text-slate-400 uppercase tracking-wider">
                  {[
                    "Student",
                    "Date",
                    "Duration",
                    "Chars Learned",
                    "Grade",
                    "Result",
                  ].map((h) => (
                    <th key={h} className="px-5 py-3 text-left font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentSessions.map((session) => (
                  <tr
                    key={session.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-5 py-4 font-semibold text-slate-900">
                      {session.student}
                    </td>
                    <td className="px-5 py-4 text-slate-500">{session.date}</td>
                    <td className="px-5 py-4 text-slate-600">
                      {session.duration}
                    </td>
                    <td className="px-5 py-4 font-mono text-brand-teal font-bold">
                      +{session.chars}
                    </td>
                    <td className="px-5 py-4 text-slate-500 text-xs">
                      {session.grade}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          session.result === "Excellent"
                            ? "bg-teal-50 text-teal-700"
                            : session.result === "Good"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-red-50 text-red-600"
                        }`}
                      >
                        {session.result}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden divide-y divide-gray-100">
            {recentSessions.map((session) => (
              <div
                key={session.id}
                className="p-4 flex items-center justify-between gap-3"
              >
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {session.student}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {session.date} · {session.duration} ·{" "}
                    <span className="text-brand-teal font-bold">
                      +{session.chars} chars
                    </span>
                  </div>
                </div>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                    session.result === "Excellent"
                      ? "bg-teal-50 text-teal-700"
                      : session.result === "Good"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-red-50 text-red-600"
                  }`}
                >
                  {session.result}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Section: Settings ───────────────────────────────────────────────────────
function SettingsSection() {
  const [notifications, setNotifications] = useState({
    progress: true,
    device: true,
    weekly: false,
  })
  const [curriculum, setCurriculum] = useState("Grade 1 Braille")

  return (
    <div className="flex-1 overflow-y-auto p-5 md:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
            Settings
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Manage your account and preferences
          </p>
        </div>

        {/* Profile */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-5">
          <h2 className="font-bold text-slate-900 flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-brand-teal" /> Profile
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-xl">
              EC
            </div>
            <div>
              <div className="font-bold text-slate-900">Educator Clark</div>
              <div className="text-sm text-slate-500">
                educator.clark@school.edu
              </div>
            </div>
            <button className="ml-auto text-sm text-brand-teal font-semibold hover:underline">
              Edit
            </button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Full Name", value: "Educator Clark" },
              { label: "Email", value: "educator.clark@school.edu" },
              { label: "School", value: "AbakaDot Academy" },
              { label: "Role", value: "Lead Educator" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-xs font-semibold text-slate-500 mb-1">
                  {field.label}
                </label>
                <input
                  type="text"
                  defaultValue={field.value}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition-all"
                />
              </div>
            ))}
          </div>
          <button className="bg-brand-teal text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-[#25B5A3] transition-colors shadow-sm shadow-brand-teal/20">
            Save Changes
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
          <h2 className="font-bold text-slate-900 flex items-center gap-2">
            <Bell className="w-4 h-4 text-brand-teal" /> Notifications
          </h2>
          {[
            {
              key: "progress" as const,
              label: "Student Progress Alerts",
              desc: "Notify when a student completes a milestone",
            },
            {
              key: "device" as const,
              label: "Device Status Alerts",
              desc: "Alert on low battery or connectivity issues",
            },
            {
              key: "weekly" as const,
              label: "Weekly Summary Report",
              desc: "Receive a digest every Monday morning",
            },
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between gap-4"
            >
              <div>
                <div className="font-medium text-slate-900 text-sm">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
              </div>
              <button
                onClick={() =>
                  setNotifications((n) => ({ ...n, [item.key]: !n[item.key] }))
                }
                className={`relative w-12 h-6 rounded-full transition-colors shrink-0 ${
                  notifications[item.key] ? "bg-brand-teal" : "bg-slate-200"
                }`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${
                    notifications[item.key] ? "left-7" : "left-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        {/* Curriculum */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
          <h2 className="font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-brand-teal" /> Curriculum Defaults
          </h2>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-2">
              Default Grade Level
            </label>
            <select
              value={curriculum}
              onChange={(e) => setCurriculum(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition-all"
            >
              <option>Pre-K Intro</option>
              <option>Grade 1 Braille</option>
              <option>Grade 2 Braille</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-2">
              AI Voice Language
            </label>
            <select className="w-full px-3.5 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition-all">
              <option>English (US)</option>
              <option>Español</option>
              <option>Filipino</option>
              <option>Swahili</option>
              <option>Arabic</option>
            </select>
          </div>
        </div>

        {/* Account */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
          <h2 className="font-bold text-slate-900 flex items-center gap-2">
            <Shield className="w-4 h-4 text-brand-teal" /> Account & Security
          </h2>
          <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 hover:border-brand-teal/40 transition-colors text-sm text-slate-700 font-medium">
            Change Password <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
          <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 hover:border-brand-teal/40 transition-colors text-sm text-slate-700 font-medium">
            Two-Factor Authentication{" "}
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
          <button className="w-full flex items-center gap-2 px-4 py-3 rounded-xl border border-red-100 bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition-colors">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Nav items ───────────────────────────────────────────────────────────────
const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "students", label: "Student Directory", icon: Users },
  { id: "devices", label: "Device Management", icon: TabletSmartphone },
  { id: "reports", label: "Reports", icon: BarChart3 },
] as const

type Section = "dashboard" | "students" | "devices" | "reports" | "settings"

// ─── Root Dashboard ──────────────────────────────────────────────────────────
export default function Dashboard({ onGoHome }: DashboardProps) {
  const [activeSection, setActiveSection] = useState<Section>("dashboard")
  const [selectedStudentId, setSelectedStudentId] = useState(students[0].id)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sectionTitles: Record<Section, string> = {
    dashboard: "Dashboard",
    students: "Student Directory",
    devices: "Device Management",
    reports: "Reports",
    settings: "Settings",
  }

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 flex flex-col shadow-lg transition-transform duration-300 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="h-16 md:h-20 flex items-center justify-between px-5 border-b border-gray-100 shrink-0">
          <button onClick={onGoHome} className="group flex items-center gap-2">
            <img
              src="/new-logo.png"
              alt="AbakaDot Logo"
              className="h-7 w-auto object-contain"
            />
            <span className="font-display font-bold text-slate-900 text-sm group-hover:text-brand-teal transition-colors">
              AbakaDot
            </span>
          </button>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-5 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id)
                setSidebarOpen(false)
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-150 text-sm ${
                activeSection === item.id
                  ? "bg-brand-teal/10 text-brand-teal"
                  : "text-slate-500 hover:text-slate-900 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-gray-100 space-y-1">
          <button
            onClick={() => {
              setActiveSection("settings")
              setSidebarOpen(false)
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
              activeSection === "settings"
                ? "bg-brand-teal/10 text-brand-teal"
                : "text-slate-500 hover:text-slate-900 hover:bg-gray-50"
            }`}
          >
            <Settings className="w-5 h-5 shrink-0" />
            <span>Settings</span>
          </button>
          <button
            onClick={onGoHome}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium text-sm text-slate-500 hover:text-slate-900 hover:bg-gray-50 transition-all"
          >
            <Home className="w-5 h-5 shrink-0" />
            <span>Back to Home</span>
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Mobile top bar */}
        <header className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-slate-600 hover:text-brand-teal transition-colors p-1"
          >
            <Menu className="w-6 h-6" />
          </button>
          <span className="font-display font-bold text-slate-900 text-base">
            {sectionTitles[activeSection]}
          </span>
          <button
            onClick={onGoHome}
            className="text-slate-400 hover:text-brand-teal transition-colors p-1"
          >
            <Home className="w-5 h-5" />
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-hidden flex flex-col min-h-0">
          {activeSection === "dashboard" && (
            <DashboardOverview
              selectedStudentId={selectedStudentId}
              setSelectedStudentId={setSelectedStudentId}
            />
          )}
          {activeSection === "students" && <StudentDirectory />}
          {activeSection === "devices" && <DeviceManagement />}
          {activeSection === "reports" && <Reports />}
          {activeSection === "settings" && <SettingsSection />}
        </main>
      </div>
    </div>
  )
}
