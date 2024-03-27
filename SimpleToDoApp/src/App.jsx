import { NavBar } from './shared/NavBar';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <div className="page">
        <main>
          <NavBar />

          <article className="content px-4">
            <Outlet />
          </article>
        </main>
      </div>
    </>
  )
};