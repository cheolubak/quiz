import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const HomePage = React.lazy(() => import('./components/pages/Home'));
const QuizPage = React.lazy(() => import('./components/pages/Quiz'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: '/quiz',
    element: (
      <Suspense>
        <QuizPage />
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
