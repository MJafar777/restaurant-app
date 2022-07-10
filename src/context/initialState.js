import { fetchUser } from "../utils/fetchLocalStorageData";

const userState = fetchUser();

export const initialState = {
  user: userState,
};
