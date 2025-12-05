import { Building2 } from 'lucide-react';

const ComparisonPage = () => (
  <div className="space-y-8 animate-in fade-in zoom-in duration-300">
    <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center flex-1 w-full">
          <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mb-3 border-4 border-white">
            <Building2 className="text-blue-600 w-10 h-10" />
          </div>
          <h3 className="font-bold text-lg">KazNU</h3>
          <span className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded">National</span>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-black italic shadow-xl z-10">
            VS
          </div>
        </div>

        <div className="flex flex-col items-center flex-1 w-full relative">
          <div className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce">
            Choice
          </div>
          <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mb-3 border-4 border-indigo-100">
            <Building2 className="text-indigo-600 w-10 h-10" />
          </div>
          <h3 className="font-bold text-lg">ENU</h3>
          <span className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded">Technical</span>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 py-3 text-sm font-semibold text-gray-500 uppercase tracking-wider text-center">
        <div className="text-left pl-6">Indicator</div>
        <div>KazNU</div>
        <div>ENU</div>
      </div>
      {[
        { label: 'Tuition (per year)', v1: '$1.2k', v2: '$1.1k', win: 2 },
        { label: 'Scholarships', v1: 'Merit-based', v2: 'Merit + need-based', win: 2 },
        { label: 'Employment rate', v1: '92%', v2: '89%', win: 1 },
        { label: 'Campus rating', v1: 'A', v2: 'A', win: 0 },
        { label: 'Languages', v1: 'KZ, RU, EN', v2: 'KZ, RU, EN, TR', win: 2 },
      ].map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-3 py-4 border-b border-gray-50 hover:bg-slate-50 transition-colors items-center text-center"
        >
          <div className="text-left pl-6 font-medium text-gray-700">{row.label}</div>
          <div className={`font-semibold ${row.win === 1 ? 'text-green-600' : 'text-gray-600'}`}>{row.v1}</div>
          <div className={`font-semibold ${row.win === 2 ? 'text-green-600' : 'text-gray-600'}`}>{row.v2}</div>
        </div>
      ))}
      <div className="p-6 bg-gray-50 flex justify-end">
        <button className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
          Export PDF
        </button>
      </div>
    </div>
  </div>
);

export default ComparisonPage;
