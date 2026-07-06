import React from 'react';
// Import context hook using structured standard ES module paths
import { useCart } from '../context/CartContext.js';

// Simulated raw FKApi structure featuring 20 authentic Premier League squads playing the 2025/2026 session
const PL_JERSEYS_DATA = [
  { id: 1, team: "Arsenal", type: "Home", prevColor: "Deep Red / White", newColor: "Classic Red / White Accent", prevPrice: 85, newPrice: 85, image: "🔴" },
  { id: 2, team: "Arsenal", type: "Away", prevColor: "Volt Yellow / Black", newColor: "Carbon Black / Cyan Trims", prevPrice: 85, newPrice: 85, image: "⚫" },
  { id: 3, team: "Aston Villa", type: "Home", prevColor: "Claret / Sky Blue", newColor: "Traditional Claret / Blue", prevPrice: 80, newPrice: 80, image: "🍷" },
  { id: 4, team: "Aston Villa", type: "Away", prevColor: "White / Claret Piping", newColor: "Ice Silver / Maroon Stripes", prevPrice: 80, newPrice: 80, image: "⚪" },
  { id: 5, team: "Bournemouth", type: "Home", prevColor: "Red / Black Stripes", newColor: "Thick Crimson / Black Bars", prevPrice: 75, newPrice: 75, image: "🍒" },
  { id: 6, team: "Brentford", type: "Home", prevColor: "Red / White Stripes", newColor: "Solid Red / White Striping", prevPrice: 75, newPrice: 75, image: "🐝" },
  { id: 7, team: "Brighton", type: "Home", prevColor: "Blue / White Stripes", newColor: "Bright Royal Blue / White Grid", prevPrice: 75, newPrice: 75, image: "🦅" },
  { id: 8, team: "Chelsea", type: "Home", prevColor: "Royal Blue / Gold", newColor: "Oceanic Blue / White Accent", prevPrice: 85, newPrice: 85, image: "🔵" },
  { id: 9, team: "Chelsea", type: "Away", prevColor: "Cream / Navy Trims", newColor: "Light Beige / Orange Piping", prevPrice: 85, newPrice: 85, image: "🍦" },
  { id: 10, team: "Crystal Palace", type: "Home", prevColor: "Red / Blue Halves", newColor: "Asymmetric Red & Blue Matrix", prevPrice: 75, newPrice: 75, image: "🦅" },
  { id: 11, team: "Everton", type: "Home", prevColor: "Blue / White Collar", newColor: "Classic Royal Blue Monogram", prevPrice: 75, newPrice: 75, image: "🍬" },
  { id: 12, team: "Fulham", type: "Home", prevColor: "White / Black Sleeve", newColor: "Pure Alabaster White / Dark Elements", prevPrice: 75, newPrice: 75, image: "🏳️" },
  { id: 13, team: "Ipswich Town", type: "Home", prevColor: "Blue / White Trim", newColor: "Suffolk Blue / Classic Stripes", prevPrice: 70, newPrice: 70, image: "🐴" },
  { id: 14, team: "Leicester City", type: "Home", prevColor: "Blue / Gold Piping", newColor: "Foxes Blue / Modern Gold Cut", prevPrice: 75, newPrice: 75, image: "🦊" },
  { id: 15, team: "Liverpool", type: "Home", prevColor: "Gym Red / Yellow Stripe", newColor: "Dark Retro Red / Chrome Gold", prevPrice: 85, newPrice: 85, image: "🟥" },
  { id: 16, team: "Liverpool", type: "Away", prevColor: "Forest Green / White", newColor: "Deep Teal / Anthracite accents", prevPrice: 85, newPrice: 85, image: "🟢" },
  { id: 17, team: "Manchester City", type: "Home", prevColor: "Sky Blue / Navy", newColor: "Sky Blue / Muted City Grey", prevPrice: 85, newPrice: 85, image: "🔷" },
  { id: 18, team: "Manchester United", type: "Home", prevColor: "Red / Dark Red Hue", newColor: "Centenary Deep Crimson Gloss", prevPrice: 85, newPrice: 85, image: "👹" },
  { id: 19, team: "Newcastle United", type: "Home", prevColor: "Black / White Stripes", newColor: "Traditional Monochrome Panels", prevPrice: 80, newPrice: 80, image: "🦓" },
  { id: 20, team: "Tottenham Hotspur", type: "Home", prevColor: "White / Navy Sleeve", newColor: "Lilywhite / Deep Matte Indigo", prevPrice: 85, newPrice: 85, image: "🐓" }
];

/**
 * Shop Page Component
 * Renders home/away editions with color shifts while executing price integrations on click.
 */
export default function Shop() {
  // Connect component actions to global Context state mutations
  const { addToCart } = useCart();

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Component Intro Headline */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Last Session Archive Shop</h1>
          <p className="text-slate-500 text-sm mt-1">Displaying 20 official Premier League Home & Away jerseys showing color changes at matching price value points.</p>
        </div>

        {/* Product Catalog Display Grid layout */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PL_JERSEYS_DATA.map((jersey) => (
            <div 
              key={jersey.id} 
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-lg transition transform hover:-translate-y-0.5 duration-200"
            >
              
              {/* Product Content Block container */}
              <div className="p-5">
                
                {/* Visual Jersey Placeholder Graphic Container element rendering item graphics */}
                <div className="w-full h-40 bg-slate-100 rounded-xl mb-4 flex items-center justify-center text-4xl select-none relative">
                  {jersey.image}
                  <span className="absolute bottom-2 right-2 bg-slate-950/5 text-slate-600 text-xs px-2 py-0.5 rounded font-mono font-bold uppercase">
                    {jersey.type}
                  </span>
                </div>

                {/* Team metadata header */}
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Premier League</span>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mt-0.5">{jersey.team}</h3>
                <p className="text-slate-400 text-xs font-semibold">{jersey.type} Kit</p>

                {/* Color Scheme Module tracking shifts with crossed out historic attributes */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">Prev Colour:</span>
                    <span className="text-slate-500 font-mono font-semibold truncate max-w-30 line-through opacity-75">{jersey.prevColor}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-emerald-600 font-bold">New Colour:</span>
                    <span className="text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded truncate max-w-30">{jersey.newColor}</span>
                  </div>
                </div>

              </div>

              {/* Action and Pricing Module Card Footer */}
              <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  {/* Shows historical price crossed out next to active purchase rates */}
                  <span className="text-[11px] text-slate-400 font-bold line-through">${jersey.prevPrice}.00</span>
                  <span className="text-base font-black text-slate-900">${jersey.newPrice}.00</span>
                </div>

                {/* Event Action Button that triggers item processing chains */}
                <button
                  onClick={() => addToCart(jersey)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-sm transition active:scale-95 flex items-center space-x-1"
                >
                  <svg xmlns="http://w3.org" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
                  <span>Add</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
