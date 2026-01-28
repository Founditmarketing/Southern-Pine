export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  pattern: string;
  grade: string;
  finish: string;
  squareFootage: string;
  hasForklift: boolean;
  needsLiftGate: boolean;
}

export enum PatternType {
  NICKEL_GAP = 'Nickel Gap',
  V_GROOVE = 'V-Groove',
  CENTER_V = 'Center V',
  BEADED = 'Beaded',
  FLOORING = 'Flooring',
}

export enum GradeType {
  CLEAR = 'Clear Grade',
  PREMIUM_KNOTTY = 'Premium Knotty',
}

export enum FinishType {
  UNFINISHED = 'Unfinished (In Stock)',
  PICKLED = 'Pickled (3-5 Days)',
  CHESTNUT = 'Chestnut (3-5 Days)',
}

export interface UnitCoverage {
  length: number;
  sqFt: number;
}