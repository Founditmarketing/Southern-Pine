import React from 'react';
import { UnitCoverage } from '../types';

interface CoverageCheatSheetProps {
  currentSqFt: number;
}

const CoverageCheatSheet: React.FC<CoverageCheatSheetProps> = ({ currentSqFt }) => {
  const units: UnitCoverage[] = [
    { length: 8, sqFt: 437 },
    { length: 10, sqFt: 546 },
    { length: 12, sqFt: 656 },
    { length: 14, sqFt: 765 },
    { length: 16, sqFt: 874 },
    { length: 20, sqFt: 1093 },
  ];

  // Helper to determine if a unit row is "close" to the requested sq ft
  // This helps guide the user visually.
  const isRelevant = (unitSqFt: number) => {
    if (currentSqFt <= 0) return false;
    // Highlight if requested amount is within range of this unit (or multiples of it)
    // A simple logic: if the user input is within +/- 20% of this unit size or a multiple
    const lower = unitSqFt * 0.8;
    const upper = unitSqFt * 1.2;
    
    // Check single unit
    if (currentSqFt >= lower && currentSqFt <= upper) return true;
    
    // Check double unit (common for larger orders)
    const doubleLower = (unitSqFt * 2) * 0.8;
    const doubleUpper = (unitSqFt * 2) * 1.2;
    if (currentSqFt >= doubleLower && currentSqFt <= doubleUpper) return true;

    return false;
  };

  return (
    <div className="bg-gray-200 p-6 rounded-lg sticky top-8 border-l-4 border-gray-400 shadow-inner">
      <div className="flex items-center space-x-2 mb-4 border-b border-gray-300 pb-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <h3 className="font-serif font-bold text-gray-800 text-xl">COVERAGE CHEAT SHEET</h3>
      </div>
      
      <p className="text-sm font-medium text-gray-700 mb-2">
        <span className="font-bold">1 Bundle = 128 Pieces.</span><br/> Based on 5 1/8" Face Width.
      </p>

      <div className="space-y-2 mt-4">
        {units.map((unit) => {
          const highlight = isRelevant(unit.sqFt);
          return (
            <div 
              key={unit.length} 
              className={`flex justify-between items-center p-2 rounded transition-colors ${
                highlight ? 'bg-amber-100 border border-amber-300 shadow-sm' : 'hover:bg-gray-100'
              }`}
            >
              <span className={`font-semibold ${highlight ? 'text-amber-900' : 'text-gray-800'}`}>
                {unit.length}' Unit:
              </span>
              <span className={`${highlight ? 'text-amber-900 font-bold' : 'text-gray-600'}`}>
                Covers ~{unit.sqFt.toLocaleString()} sq ft
              </span>
            </div>
          );
        })}
      </div>

      {currentSqFt > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-300">
           <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Your Estimate</p>
           <p className="text-gray-800 text-sm">
             For <span className="font-bold">{currentSqFt} sq ft</span>, we will help you optimize the number of bundles and lengths to minimize waste.
           </p>
        </div>
      )}
    </div>
  );
};

export default CoverageCheatSheet;