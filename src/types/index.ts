export interface LearningTask {
  id: string;
  title: string;
  type: 'quiz' | 'video' | 'challenge';
  description: string;
  duration: number;
  skillCategory: string;
  completed: boolean;
}

export interface UserProgress {
  completedTasks: number;
  totalScore: number;
  skillPoints: Record<string, number>;
}

export interface SimulationScenario {
  id: string;
  title: string;
  role: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  steps: SimulationStep[];
}

export interface SimulationStep {
  id: string;
  description: string;
  options: string[];
  correctOption: number;
  feedback: string;
}