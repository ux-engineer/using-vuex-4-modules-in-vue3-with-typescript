import type { UserProfileName, UserRoles } from '@/@types';

const defaultProfile = 'client';

export type State = {
  profileData: UserProfileName;
  rolesData: UserRoles;
}

export const state: State = {
  profileData: defaultProfile,
  rolesData: [],
};
