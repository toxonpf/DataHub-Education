import { ChevronRight, MapPin, Menu, Search } from 'lucide-react';
import { type NavLink } from '../../../shared/config/constants';
import { type University } from '../../../entities/university/model/universities';
import { type FeatureCard } from '../model/features';

type HomePageProps = {
  navLinks: NavLink[];
  features: FeatureCard[];
  universities: University[];
  scrolled: boolean;
  onScrollTo: (id: string) => void;
  onSelectView: (view: string | number) => void;
};

const HomePage = ({
  navLinks,
  features,
  universities,
  scrolled,
  onScrollTo,
  onSelectView,
}: HomePageProps) => (
  <div className="min-h-screen bg-slate-50">
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
            DH
          </div>
          <span className={`font-bold text-xl ${scrolled ? 'text-gray-800' : 'text-white'}`}>
            DataHub <span className="font-light opacity-80">Education</span>
          </span>
        </div>
        <div className={`hidden md:flex items-center space-x-8 ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>
          {navLinks.map((link) =>
            link.action === 'scroll' ? (
              <button
                key={link.id}
                onClick={() => onScrollTo(link.target as string)}
                className="hover:text-blue-500 transition-colors font-medium"
              >
                {link.label}
              </button>
            ) : (
              <button
                key={link.id}
                onClick={() => onSelectView(link.target)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${scrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-900 hover:bg-gray-100'}`}
              >
                {link.label}
              </button>
            ),
          )}
        </div>
        <button className="md:hidden text-white">
          <Menu />
        </button>
      </div>
    </nav>

    <div id="hero" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover"
          alt="Hero"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-sm font-medium mb-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4">
          Platform for choosing universities and programs
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700">
          Discover your future <br />{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
            with DataHub Education
          </span>
        </h1>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          We help applicants explore universities, compare programs, and apply with confidence across the country.
        </p>

        <div className="bg-white p-2 rounded-full shadow-2xl max-w-2xl mx-auto flex items-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
          <div className="pl-4 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search for city or university..."
            className="flex-1 px-4 py-3 bg-transparent border-none focus:ring-0 text-gray-800 placeholder-gray-400 text-lg"
          />
          <button
            onClick={() => onSelectView(2)}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md"
          >
            Find
          </button>
        </div>

        <div className="flex justify-center gap-8 mt-12 text-white/80 animate-in fade-in duration-1000 delay-300">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">120+</div>
            <div className="text-sm">Universities</div>
          </div>
          <div className="w-px bg-white/20"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4k+</div>
            <div className="text-sm">Programs</div>
          </div>
          <div className="w-px bg-white/20"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">85k</div>
            <div className="text-sm">Graduates</div>
          </div>
        </div>
      </div>
    </div>

    <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 -mt-20 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f) => (
          <div
            key={f.id}
            onClick={() => onSelectView(f.id)}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 relative overflow-hidden transform hover:-translate-y-2"
          >
            <div
              className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${f.color} opacity-10 rounded-bl-[100px] transition-transform group-hover:scale-150`}
            ></div>

            <div className="relative">
              <div className="flex justify-between items-start mb-6">
                <span className="text-5xl font-black text-gray-100 select-none">{f.id}</span>
                <div
                  className={`w-14 h-14 ${f.bg} rounded-2xl flex items-center justify-center text-gray-700 shadow-sm group-hover:scale-110 transition-transform`}
                >
                  {f.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">{f.description}</p>
              <div className="flex items-center text-blue-600 font-bold text-sm">
                Learn more{' '}
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Popular universities</h2>
          <p className="text-gray-500 mt-2">Top picks from the 2024 ranking</p>
        </div>
        <button onClick={() => onSelectView('catalog')} className="text-blue-600 font-medium hover:underline">
          Open catalog
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {universities.slice(0, 4).map((uni) => (
          <div
            key={uni.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="h-32 bg-gray-200 relative">
              <img src={uni.image} className="w-full h-full object-cover" alt={uni.name} />
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-bold text-green-600">
                {uni.tag}
              </div>
            </div>
            <div className="p-4">
              <div className="font-bold text-gray-900 mb-1">{uni.name}</div>
              <div className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {uni.city}
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-blue-600">{uni.rating}/5</span>
                <span className="text-gray-400 text-xs">{uni.reviews.toLocaleString()} reviews</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">D</div>
            <span className="font-bold text-xl">DataHub</span>
          </div>
          <p className="text-gray-400 max-w-sm">
            DataHub aggregates educational programs, rankings, and admission steps in one place to make your choice simple.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Navigation</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Programs</li>
            <li className="hover:text-white cursor-pointer">Support</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Contacts</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>support@datahub.kz</li>
            <li>+7 (777) 123-45-67</li>
            <li>Astana, Expo C1</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        (c) 2024 DataHub Education. All rights reserved.
      </div>
    </footer>
  </div>
);

export default HomePage;
