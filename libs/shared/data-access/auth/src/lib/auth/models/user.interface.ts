export type User = {
    userId: number;
    email: string;
    username: string;
}

export type LoginUserRequest = {
    email: string;
    password: string;
}
