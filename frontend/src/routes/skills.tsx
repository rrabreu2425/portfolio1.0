import { createFileRoute } from '@tanstack/react-router';
import { SkillsPage } from '../modules/skills/presentation/pages/index';

export const Route = createFileRoute('/skills')({
  component: () => <SkillsPage />,
})

