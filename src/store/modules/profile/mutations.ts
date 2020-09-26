import { MutationTree } from 'vuex';

import type { UserProfileName, UserRoles } from '@/@types';

import { State } from './state';
import { ProfileMutationTypes as MutationTypes } from './mutation-types';

export type Mutations<S = State> = {
  [MutationTypes.SET_PROFILE](state: S, payload: UserProfileName): void;
  [MutationTypes.SET_ROLES](state: S, payload: UserRoles): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_PROFILE](state: State, profile: UserProfileName) {
    state.profileData = profile;
  },
  [MutationTypes.SET_ROLES](state: State, roles: UserRoles) {
    state.rolesData = roles;
  },
};
