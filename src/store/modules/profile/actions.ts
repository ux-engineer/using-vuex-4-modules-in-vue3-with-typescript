import { ActionTree } from 'vuex';

// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store';

import { State } from './state';
import { ProfileActionTypes } from './action-types';

// TODO: How to configure a module without any actions?

// type AugmentedActionContext = {
//   commit<K extends keyof Mutations>(
//     key: K,
//     payload: Parameters<Mutations[K]>[1],
//   ): ReturnType<Mutations[K]>
// } & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ProfileActionTypes.NON_ACTION](): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  [ProfileActionTypes.NON_ACTION]() {},
};
