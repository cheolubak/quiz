import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function ErrorPage() {
  return <h1>Error Page!!</h1>;
}

const HomePage = React.lazy(() => import('./components/pages/Home'));
const QuizPage = React.lazy(() => import('./components/pages/Quiz'));
const ResultPage = React.lazy(() => import('./components/pages/Result'));

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
  {
    path: '/result',
    element: (
      <Suspense>
        <ResultPage />
      </Suspense>
    ),
  },
  {
    path: '/*',
    element: <ErrorPage />,
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
