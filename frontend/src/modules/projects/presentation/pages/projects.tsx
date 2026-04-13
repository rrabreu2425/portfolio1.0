import { useGetProjects } from '@/modules/projects/presentation/hooks/use-get-projects';

export function Projects() {
    const { data: projects, isLoading, error } = useGetProjects();
console.log(projects, isLoading, error)
    return (
        <div>
            <h1>Projects</h1>
        </div>
    )
}