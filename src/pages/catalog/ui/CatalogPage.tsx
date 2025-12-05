import { useMemo, useState } from 'react';
import { MapPin } from 'lucide-react';
import DetailWrapper from '../../../widgets/detail-wrapper/ui/DetailWrapper';
import { type University } from '../../../entities/university/model/universities';

type CatalogPageProps = {
  universities: University[];
  onSelectView: (view: string | number) => void;
  onBack: () => void;
};

const CatalogPage = ({ universities, onSelectView, onBack }: CatalogPageProps) => {
  const [city, setCity] = useState('All');
  const [tag, setTag] = useState('All');

  const cities = useMemo(() => ['All', ...new Set(universities.map((u) => u.city))], [universities]);
  const tags = useMemo(() => ['All', ...new Set(universities.map((u) => u.tag))], [universities]);

  const filteredUniversities = universities.filter((uni) => {
    return (city === 'All' || uni.city === city) && (tag === 'All' || uni.tag === tag);
  });

  return (
    <DetailWrapper title="University catalog" onBack={onBack}>
      <div className="grid md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-8 space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg font-semibold">ALL</div>
              <div className="text-gray-600 text-sm">
                {filteredUniversities.length} universities match your filters
              </div>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700"
              >
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c === 'All' ? 'All cities' : c}
                  </option>
                ))}
              </select>
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700"
              >
                {tags.map((t) => (
                  <option key={t} value={t}>
                    {t === 'All' ? 'All tags' : t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {filteredUniversities.length > 0 ? (
              filteredUniversities.map((u, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 relative">
                    <img src={u.image} alt={u.name} loading="lazy" className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 px-3 py-1 bg-white/80 text-sm font-semibold rounded-full text-blue-700 border border-white/70 shadow-sm">
                      {u.tag}
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">{u.name}</h3>
                      <span className="text-blue-600 font-semibold">{u.rating}/5</span>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {u.city}
                    </div>
                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => onSelectView(1)}
                        className="text-blue-600 text-sm font-semibold hover:underline"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => onSelectView(3)}
                        className="text-gray-500 text-sm hover:text-gray-700 transition-colors"
                      >
                        Admission
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-dashed">
                <h3 className="text-xl font-medium text-gray-500">No universities fit your filters</h3>
                <p className="text-gray-400 mt-2">Try changing the city or tag to see more options.</p>
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-4 bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col gap-4 self-stretch sticky top-24 h-[calc(100vh-140px)] max-h-[calc(100vh-140px)]">
          <div>
            <p className="text-sm text-blue-600 font-semibold">Smart choice</p>
            <h3 className="text-xl font-bold text-gray-900 mt-1">AI assistant helps you decide</h3>
            <p className="text-gray-500 text-sm mt-2">
              Shortlist universities with GPT tips about strengths, scholarships, and student reviews.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 space-y-3 flex-1 min-h-[240px] overflow-y-auto text-sm text-gray-800">
            {[
              { role: 'assistant', text: 'Hi! Tell me your goals, budget, and preferred city.' },
              { role: 'user', text: 'Looking for IT programs with strong labs in Astana.' },
              { role: 'assistant', text: 'Try ENU (IT) or AITU (Tech). Do you want dorm details?' },
            ].map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-blue-100 text-gray-900'
                      : 'bg-white text-gray-800 border border-gray-200'
                  } shadow-sm`}
                >
                  <div className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">
                    {m.role === 'user' ? 'You' : 'Advisor'}
                  </div>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2">
            {['I want top-5 universities', 'IT programs in Astana', 'Dormitory availability'].map((q) => (
              <button key={q} className="text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-2 text-left">
                {q}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 shadow-inner bg-white">
            <input
              type="text"
              placeholder="Ask a question: scholarship, dorm, cost..."
              className="flex-1 text-sm focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm">
              Send
            </button>
          </div>
        </div>
      </div>
    </DetailWrapper>
  );
};

export default CatalogPage;
