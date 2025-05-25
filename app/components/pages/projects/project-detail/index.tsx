import { useParams } from "react-router";
const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  return <div>ProjectDetail{projectId}</div>;
};

export default ProjectDetail;
