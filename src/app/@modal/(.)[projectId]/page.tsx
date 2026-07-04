import { getProject } from '@/lib/projects';
import ProjectDetails from '@/components/project-details';
import ProjectModal from '@/components/project-modal';

export default async function InterceptedProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  const project = getProject(projectId);
  if (!project) return null;

  return (
    <ProjectModal key={project.id} projectId={project.id}>
      <ProjectDetails project={project} inModal />
    </ProjectModal>
  );
}
