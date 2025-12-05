import { useState } from 'react';
import { Calendar, Globe2, Search } from 'lucide-react';

const ProgramsPage = () => {
  const [filter, setFilter] = useState('All');
  const programs = [
    { name: 'Computer Science', level: 'Bachelor', dur: '4 years', code: '6B06101' },
    { name: 'Data Science', level: 'Master', dur: '2 years', code: '7M06102' },
    { name: 'Business Analytics', level: 'Bachelor', dur: '4 years', code: '6B04101' },
    { name: 'Artificial Intelligence', level: 'PhD', dur: '3 years', code: '8D05101' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {['All', 'Bachelor', 'Master', 'PhD'].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                filter === t ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t === 'All' ? 'All programs' : t}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search program..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {programs
          .filter((p) => filter === 'All' || p.level === filter)
          .map((prog, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-indigo-200 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                    prog.level === 'Bachelor'
                      ? 'bg-blue-100 text-blue-700'
                      : prog.level === 'Master'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-orange-100 text-orange-700'
                  }`}
                >
                  {prog.level}
                </div>
                <div className="text-gray-400 text-sm font-mono">{prog.code}</div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {prog.name}
              </h4>
              <div className="flex items-center text-gray-500 text-sm gap-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {prog.dur}
                </span>
                <span className="flex items-center gap-1">
                  <Globe2 className="w-4 h-4" /> RU/EN/KZ
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProgramsPage;
