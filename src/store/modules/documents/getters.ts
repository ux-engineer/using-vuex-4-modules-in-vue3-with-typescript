import { GetterTree } from 'vuex';

// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store';

import { UserDocuments } from '@/@types';

import { State } from './state';

export type Getters = {
  getDocuments(state: State): UserDocuments | null;
}

export const getters: GetterTree<State, RootState> & Getters = {
  getDocuments: (state) => state.data,
};
