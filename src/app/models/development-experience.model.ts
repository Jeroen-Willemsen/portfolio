export interface DevelopmentExperience {
  name: string;
  info: string[];
}

export interface DevelopmentExperienceCategory {
  name: string;
  experiences: DevelopmentExperience[];
  info: string;
}
