import { PlayCircle } from 'lucide-react';

const TourPage = () => (
  <div className="flex flex-col h-full animate-in fade-in duration-700">
    <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
        alt="3D Tour Preview"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all border border-white/50">
          <PlayCircle className="w-10 h-10 text-white fill-white/50" />
        </div>
        <h3 className="text-3xl font-bold text-white tracking-wide">Virtual campus tour</h3>
        <p className="text-gray-300 mt-2">Explore labs, dorms, and auditoriums in an interactive 3D view.</p>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-4 mt-6">
      {[
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=300&q=80",
      ].map((img, i) => (
        <div key={i} className="rounded-xl overflow-hidden h-24 relative cursor-pointer hover:opacity-80 transition-opacity">
          <img src={img} className="w-full h-full object-cover" alt="Thumb" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white text-xs font-bold">
            Spot {i + 1}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TourPage;
