import Card from "~/components/atom/card";
import { Badge } from "~/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { static_data } from "~/data/static";
import { Button } from "~/components/ui/button"; // Make sure to import Button

const ProjectsPage = () => {
  return (
    <div className="p-4">
      <button
        onClick={(e) => {
          e.stopPropagation(); // <--- Add this line
          alert("tetets");
        }}
      >
        tetet
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {static_data.pages.projects.simple_projects.map((project) => (
          <Card
            key={project.id}
            className="cursor-pointer relative" // Added relative positioning
            subtitle={project.name}
            content={project.desc}
            hoverEffect="scale"
          >
            <div className="flex justify-end mb-2">
              <Badge variant="secondary">
                آخرین آپدیت : {project.updated_at}
              </Badge>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation(); // <--- Add this line
                alert("tetets");
              }}
            >
              Details
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
