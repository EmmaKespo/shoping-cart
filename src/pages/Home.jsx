import React from 'react';

export default function Home({ setActivePage }) {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* Brand Hero Element styled strictly with deep Green and White accents */}
      <section className="bg-linear-to-br from-emerald-800 to-emerald-950 text-white py-24 px-6 text-center relative overflow-hidden shadow-inner">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] background-size[16px_16px]"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="bg-emerald-600/50 text-white font-mono text-xs px-4 py-1.5 rounded-full border border-emerald-500/30 uppercase tracking-widest font-bold">2025/2026 Session Live</span>
          <h1 className="text-5xl md:text-6xl font-black mt-6 tracking-tight leading-none">
            PREMIER LEAGUE <br/><span className="text-emerald-400">JERSEY OUTLET</span>
          </h1>
          <p className="text-emerald-100 text-base md:text-lg mt-6 font-medium max-w-lg mx-auto opacity-90">
            Secure official Home and Away jersey kits from last season before stock lines close out.
          </p>
          
          {/* Request Fulfillment: Direct Call to Action anchor that routes users directly to shop views */}
          <div className="mt-10">
            <button 
              onClick={() => setActivePage('shop')} 
              className="bg-white text-emerald-900 hover:bg-emerald-50 text-lg font-black px-8 py-4 rounded-xl shadow-xl transition transform hover:-translate-y-0.5 active:translate-y-0 duration-150"
            >
              Explore Shop Collection
            </button>
          </div>
        </div>
      </section>

      {/* Brand Highlights Section displaying 1 or 2 targeted layout display assets */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-12 uppercase tracking-wide">Featured Brand Identity</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Brand Card Asset 1 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex items-center space-x-6 hover:shadow-md transition-shadow">
            <div className="w-24 h-24 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-bold text-center border border-emerald-200 text-3xl">
              👕
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Premium Selection</span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">Forest Green Home Edition</h3>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">Official team fabrics built with classic weaving, featuring matching performance badge details.</p>
            </div>
          </div>

          {/* Brand Card Asset 2 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex items-center space-x-6 hover:shadow-md transition-shadow">
            <div className="w-24 h-24 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center font-bold text-center border border-slate-200 text-3xl">
              🎽
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Alternative Outfits</span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">Alabaster White Away Edition</h3>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">Clean aesthetic accents optimizing structural comfort variables for everyday styling.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
