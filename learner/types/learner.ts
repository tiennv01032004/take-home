export interface Learner {
  name: string;
  avatar: string;
  tagline: string;
  simsStarted: number;
  simsCompleted: number;
  avgScore: number;
  streak: number;
  careerActivationRate: number;
  simulations: Simulation[];
  skills: Skill[];
  recommendations: Recommendation[];
}

export interface Recommendation {
  id: number;
  title: string;
  company: string;
  difficulty: string;
  estimate: string;
  reason: string;
  skills: string[];
}

export interface Simulation {
  id: number;
  title: string;
  company: string;
  logo: string;
  role: string;
  difficulty: string;
  lastActivity: string;
  progress: number;
  skills: string[];
  status: string;
}

export interface Skill {
  name: string;
  value: number;
}
