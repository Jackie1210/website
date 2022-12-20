import { lazy } from 'solid-js'
import type { RouteDefinition } from '@solidjs/router'

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('@/pages/home/index'))
  },
  {
    path: '/resume',
    component: lazy(() => import('@/pages/resume/index'))
  }
]
