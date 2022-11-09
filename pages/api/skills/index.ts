interface SkillProps {
    name: string;
    slug: string;
    hasPage: boolean;
  }
  
  export interface SkillSet {
    title: string;
    skills: Array<SkillProps>;
  }
  
  interface SkillPageProps {
    skillSets: Array<SkillSet>;
  }