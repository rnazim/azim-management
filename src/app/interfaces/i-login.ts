export interface ILogin {
    username: string;
    password: string;
}

export interface ILoginToken {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
}