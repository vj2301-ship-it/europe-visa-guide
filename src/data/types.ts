export type Bloc = "schengen" | "non-schengen";

export type VisaNeed = "visa-required" | "visa-waiver-possible" | "visa-free";

export interface Step {
  title: string;
  when: string;
  detail: string;
}

export interface TimelineItem {
  /** Human label for the moment, e.g. "12 weeks out" */
  label: string;
  /** Weeks before departure this should happen (used to position the marker) */
  weeksBefore: number;
  title: string;
  detail: string;
}

export interface DocGroup {
  group: string;
  items: string[];
}

export interface ResourceLink {
  label: string;
  url: string;
}

export interface Country {
  slug: string;
  name: string;
  flag: string;
  bloc: Bloc;
  need: VisaNeed;
  /** One-line orientation shown on the card */
  blurb: string;
  visaType: string;
  fee: string;
  serviceFee?: string;
  processingTime: string;
  appointmentWait: string;
  applyWindow: string;
  biometrics: string;
  /** Short description of any visa-free route, e.g. via a valid Schengen visa */
  waiver?: string;
  steps: Step[];
  timeline: TimelineItem[];
  documents: DocGroup[];
  links: ResourceLink[];
  notes: string[];
  lastReviewed: string;
  officialSource: string;
}
