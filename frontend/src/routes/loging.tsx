import { Login } from '@/modules/auth/presentation/components/login';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/loging')({
  component: () => <Login />,
})

