import { User } from "./user.interface";

export type AuthState = {
    loading: boolean;
    loggedIn: boolean;
    user: User;
}