import { createFileRoute } from '@tanstack/react-router';
import { ContactRouteComponent } from './contact-route-component';

export const Route = createFileRoute('/contact')({
  component: ContactRouteComponent,
});
