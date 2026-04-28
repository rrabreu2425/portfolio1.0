import { RegisterPage } from '@/modules/auth/presentation/pages/register-page'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/register')({
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated()) {
      throw redirect({ to: '/' })
    }
  },
  component: () => <RegisterPage />,
})
