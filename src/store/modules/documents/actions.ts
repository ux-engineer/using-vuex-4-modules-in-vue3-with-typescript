import { ActionTree, ActionContext } from 'vuex';

// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store';

import { State } from './state';
import { Mutations } from './mutations';
import { DocumentsMutationTypes } from './mutation-types';
import { DocumentsActionTypes } from './action-types';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [DocumentsActionTypes.FETCH_DOCUMENTS](
    { commit }: AugmentedActionContext,
    someId: string, // Obsolete in here but left as an example
  ): Promise<boolean>;
}

export const actions: ActionTree<State, RootState> & Actions = {
  async [DocumentsActionTypes.FETCH_DOCUMENTS]({ commit }, someId: string) {
    return new Promise(() => {
      setTimeout(() => {
        console.debug('FETCH_DOCUMENTS', someId);
        const data = {
          documents: [{}, {}],
        };
        commit(DocumentsMutationTypes.SET_DATA, data);
        return true;
      }, 500);
    });
  },
};
