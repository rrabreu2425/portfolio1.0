import { useGetSkills } from '@/modules/skills/presentation/hooks/use-get-skills';
export function SkillsPage() {
    const { data: skills } = useGetSkills();
    console.log(skills);
    return (
        <div>
            <h1>Skills Page</h1>
        </div>
    );
}