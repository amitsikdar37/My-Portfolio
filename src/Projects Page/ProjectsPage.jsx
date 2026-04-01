import './style/projects-page.css';
import { PPHeading } from './pp-heading';
import { ProjectGrid } from './project-grid';

export function ProjectsPage() {
  return (
    <div className="projects-page">
      <PPHeading />
      <ProjectGrid />
    </div>
  );
}

