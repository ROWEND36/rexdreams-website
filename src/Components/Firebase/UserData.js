import {
  doc,
  collection,
  onSnapshot,
  addDoc,
  writeBatch,
  arrayUnion,
} from "firebase/firestore";
import { store, useUser } from "./Firebase";
import { User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
const USERS = "users";
const MESSAGES = "messages";
const UNREAD_MESSAGES = "unread_meassages";
/**
 * Chose a simple scalable structure for database
 * users: {
 *   [userID]: {
 *       messages:[
 *          {
 *              title: string,
 *              body: string,
 *              [format=text]: html|text,
 *              [senderName="Rexdreams"]
 *          }
 *       ]
 *   }
 * }
 */

export function useUserData() {
  return useContext(UserDataContext);
}
const UserDataContext = createContext(null);
export function UserDataProvider({ children }) {
  const [data, setData] = useState();
  const user = useUser();
  useEffect(
    function () {
      if (!user) return;
      return onSnapshot(doc(store, USERS, user.uid), function (doc) {
        setData(doc.data());
      });
    },
    [user]
  );
  return (
    <UserDataContext.Provider value={data}>{children}</UserDataContext.Provider>
  );
}
export function useUnreadMessageCount() {
  return useUserData()?.unreadMessages || 0;
}

export async function submitJob({ user, description, title }) {
  const jobRef = collection(store, "jobs").doc();
  const userDataRef = doc(store, USERS, user.uid);
  const batch = writeBatch(store);
  batch.update(userDataRef, arrayUnion([jobRef.id]));
  batch.set(jobRef, { userId: user.id, description, title });
  batch.commit();
}
