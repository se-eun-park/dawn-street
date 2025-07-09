import { createFileRoute } from '@tanstack/react-router'
import { ProjectPage } from '@/pages'

export const Route = createFileRoute('/project')({
  component: ProjectPage,
})
