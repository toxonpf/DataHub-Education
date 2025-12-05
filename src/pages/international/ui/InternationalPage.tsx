import { Globe2, Users } from 'lucide-react';

const InternationalPage = () => (
  <div className="space-y-6">
    <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full blur-[100px] opacity-20"></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4">International exposure</h3>
        <p className="text-slate-300 max-w-xl mb-6">
          Partnerships with 150+ universities in 40 countries. Exchange semesters, dual degrees, and research mobility.
        </p>
        <div className="flex gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400">40+</div>
            <div className="text-xs text-slate-400">Countries</div>
          </div>
          <div className="text-center border-l border-slate-700 pl-4">
            <div className="text-3xl font-bold text-teal-400">150+</div>
            <div className="text-xs text-slate-400">Partner universities</div>
          </div>
          <div className="text-center border-l border-slate-700 pl-4">
            <div className="text-3xl font-bold text-teal-400">500</div>
            <div className="text-xs text-slate-400">Students yearly</div>
          </div>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Globe2 className="text-teal-600" /> Erasmus+
        </h4>
        <p className="text-sm text-gray-500 mb-4">
          Semester abroad with tuition waived and support for living expenses.
        </p>
        <button className="text-teal-600 text-sm font-semibold hover:underline">See partners</button>
      </div>
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Users className="text-blue-600" /> Internships and joint labs
        </h4>
        <p className="text-sm text-gray-500 mb-4">
          Joint labs with IT, telecom, and engineering companies. Internships guaranteed for top students.
        </p>
        <button className="text-blue-600 text-sm font-semibold hover:underline">See opportunities</button>
      </div>
    </div>
  </div>
);

export default InternationalPage;
