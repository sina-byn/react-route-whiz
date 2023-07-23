import { createContext } from 'react';

// * types
export type NavigationCtx = {
  currentPath: string;
  navigate: (to: string) => void;
};

export const NavigationContext = createContext<NavigationCtx | undefined>(undefined);
