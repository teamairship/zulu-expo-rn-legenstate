import { observable } from '@legendapp/state';
import { syncObservable } from '@legendapp/state/sync';
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage';

export interface User {
  redmineKey: string;
  name: string;
}

export interface UserStore {
  user: User;
  isLoggedIn: boolean;
  setUser: (user: Partial<User>) => void;
  reset: () => void;
}

const initialUser = {
  redmineKey: '12345',
  name: 'Test User',
};

export const userStore$ = observable<UserStore>({
  user: initialUser,
  isLoggedIn: false,
  setUser: (user: Partial<User>) => {
    const existingUser = userStore$.user.get();

    const isLoggedIn = Boolean(user.redmineKey || existingUser.redmineKey);

    userStore$.isLoggedIn.set(isLoggedIn);
    return userStore$.user.assign({ ...existingUser, ...user });
  },
  reset: () => {
    userStore$.user.set(initialUser);
    userStore$.isLoggedIn.set(false);
  },
});

syncObservable(userStore$, {
  persist: {
    name: 'userStore',
    plugin: ObservablePersistLocalStorage,
  },
});
