import { useState, useEffect } from 'react';

// * context
import { NavigationContext } from './context';

// * types
import type { NavigationCtx } from './context';

type RouterProps = {
  children: React.ReactNode;
};

// * Router
const Router = ({ children }: RouterProps) => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  const ctx: NavigationCtx = {
    currentPath,
    navigate,
  };

  useEffect(() => {
    const handler = () => setCurrentPath(window.location.pathname);

    window.addEventListener('popstate', handler);

    return () => window.removeEventListener('popstate', handler);
  }, []);

  return <NavigationContext.Provider value={ctx}>{children}</NavigationContext.Provider>;
};

export { Router };
