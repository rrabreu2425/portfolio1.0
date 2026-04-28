import { LoginPage } from '@/modules/auth/presentation/pages/login-page';
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
  component: () => <LoginPage />,
})

