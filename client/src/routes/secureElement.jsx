import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/secureElement')({
  component: () => <div>Hello /secureElement!</div>
})