export interface ProjectProps {
  name: string;
  image?: string;
  repo?: string;
  deps?: string;
  tags: Array<string>;
  desc: string;
  contributed?: boolean;
  organizationUrl?: string;
  project: string;
}

interface Data {
  data: Array<ProjectProps>;
}