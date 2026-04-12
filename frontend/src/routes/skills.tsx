import { createFileRoute, redirect } from '@tanstack/react-router';
import { SkillsPage } from '../modules/skills/presentation/pages/index';

export const Route = createFileRoute('/skills')({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated()) {
      throw redirect({ to: '/login' })
    }
  },
  component: () => <SkillsPage />,
})

