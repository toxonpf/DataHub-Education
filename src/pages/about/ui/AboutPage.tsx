import { Building2, CheckCircle2, Globe2, GraduationCap, MapPin, Trophy, Users } from 'lucide-react';

const AboutPage = () => (
  <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
    <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
      <img
        src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        alt="Campus"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
        <div>
          <div className="flex items-center gap-2 text-blue-300 font-semibold mb-2 uppercase tracking-wider text-sm">
            Founded in 1934
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">DataHub International University</h2>
          <p className="text-gray-200 max-w-2xl">
            Multidisciplinary university with a focus on research, technology, and strong academic traditions.
          </p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "Students", val: "24k+", icon: <Users className="text-blue-600" /> },
        { label: "Graduates yearly", val: "1,200", icon: <GraduationCap className="text-indigo-600" /> },
        { label: "QS ranking", val: "#150", icon: <Trophy className="text-amber-500" /> },
        { label: "Campuses", val: "16", icon: <Building2 className="text-teal-600" /> },
      ].map((s, i) => (
        <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-gray-50 rounded-lg">{s.icon}</div>
          <div>
            <div className="text-2xl font-bold text-gray-900">{s.val}</div>
            <div className="text-xs text-gray-500 uppercase font-medium">{s.label}</div>
          </div>
        </div>
      ))}
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-500 rounded-full"></span> Why students choose us
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Modern campus, international programs, and strong partnerships with industry leaders across the region.
          </p>
          <ul className="space-y-3">
            {[
              "Academic excellence and mentoring",
              "Broad international exchange programs",
              "Strong employment support for graduates",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Rector</h3>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div>
              <div className="font-bold text-lg">A.T. Example</div>
              <div className="text-blue-600 text-sm">Rector, Doctor of Science</div>
              <div className="text-gray-500 text-sm mt-1">Leading the university since 2020 with a focus on innovation.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white p-6 rounded-2xl h-fit">
        <h3 className="font-bold text-xl mb-4">Contacts</h3>
        <ul className="space-y-4 text-blue-100">
          <li className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-1" />
            <span>Almaty, Abay 71</span>
          </li>
          <li className="flex items-center gap-3">
            <Users className="w-5 h-5" />
            <span>+7 (727) 377-33-33</span>
          </li>
          <li className="flex items-center gap-3">
            <Globe2 className="w-5 h-5" />
            <span>info@kaznu.kz</span>
          </li>
        </ul>
        <button className="w-full mt-6 bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Request consultation
        </button>
      </div>
    </div>
  </div>
);

export default AboutPage;
