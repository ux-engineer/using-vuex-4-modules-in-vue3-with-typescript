import { MutationTree } from 'vuex';

import { UserDocuments } from '@/@types';

import { State } from './state';
import { DocumentsMutationTypes } from './mutation-types';

export type Mutations<S = State> = {
  [DocumentsMutationTypes.SET_DATA](state: S, payload: UserDocuments): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [DocumentsMutationTypes.SET_DATA](state: State, documents: UserDocuments) {
    state.data = documents;
  },
};
