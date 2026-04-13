import { Projects } from '@/modules/projects/presentation/pages/projects';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/projects')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated()) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: () => <Projects />,
})