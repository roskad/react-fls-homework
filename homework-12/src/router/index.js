import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import PostsPage from '@/pages/PostsPage'
import InfiniteScrollPostPage from '@/pages/PostsPage/InfiniteScrollPostPage'

import { createBrowserRouter } from 'react-router'

export const routes = [
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        handler: {
          title: 'Головна',
        },
      },
      {
        path: 'posts',
        Component: PostsPage,
        handler: {
          title: 'Пости',
        },
      },
      {
        path: 'infinite-posts',
        Component: InfiniteScrollPostPage,
        handler: {
          title: 'Нескінченні пости',
        },
      }
    ],
  },
]

const router = createBrowserRouter(routes, {
  basename: "/react-fls-homework/12",
})

export default router
