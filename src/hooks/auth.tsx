import { useEffect } from 'react';
import { firebase } from '@firebase/app';
import { atom, useRecoilState } from 'recoil';
import { User } from 'models/user';

export const userState = atom<User>({
  key: 'userState',
  default: null,
});

export const useAuthenticate = (): User => {
  const [user, setUser] = useRecoilState<User>(userState);

  useEffect(() => {
    if (user) return;

    firebase.auth().onAuthStateChanged((u) => {
      if (u) {
        setUser({ id: u.uid, displayName: u.displayName });
      } else {
        setUser(null);
      }
    });
  }, [setUser, user]);

  return user;
};
