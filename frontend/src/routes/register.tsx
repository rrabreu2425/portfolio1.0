import { Register } from '@/modules/auth/presentation/components/register'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/register')({
  component: ()=> <Register />,
})
