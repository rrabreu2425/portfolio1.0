import { Login } from '@/modules/auth/presentation/components/login';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
  validateSearch: (search: Record<string, unknown>): { redirect?: string } => {
    if (typeof search.redirect === 'string') {
      return { redirect: search.redirect }
    }

    return {}
  },
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated()) {
      throw redirect({ to: '/' })
    }
  },
  component: () => <Login />,
})

