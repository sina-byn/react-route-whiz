import { useContext } from 'react';

// * context
import { NavigationContext } from './context';

// * types
import type { NavigationCtx } from './context';
export type UseNavigation = () => NavigationCtx;

const useNavigation: UseNavigation = () => useContext(NavigationContext)!;

export { useNavigation };
