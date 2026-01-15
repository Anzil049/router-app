import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Project Details</h2>
      <p>Project ID: {id}</p>
    </div>
  );
}

export default ProjectDetails;
