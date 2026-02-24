export type PortfolioData = {
  title: string;
  heroHeading: string;
  headings: string[];
  paragraphs: string[];
  buttons: string[];
};

export interface RoastResult {
  first_impression: string;

  
  ux_issues: string[];
  

  copy_improvements: string[];

  conversion_suggestions: string[];
  shareable_roast: string;
  scores: {
    design: number;
    clarity: number;
    conversion: number;
    overall: number;
  };
}
export interface Scores {
  design: number;
  clarity: number;
  conversion: number;
  overall: number;
}

export interface Headers {
  onSubmit: (url: string) => void;
  loading: boolean;
  hasResult: boolean;
}