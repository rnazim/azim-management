export interface IUser {
    id: number;
    firstName: string;
    maidenName?: string;
    lastName: string;
    age?: number;
    gender?: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate?: Date;
    images?: Array<string>;
}

export interface IUserWrapper {
    users: Array<IUser>;
    total: number;
    skip: number;
    limit: number;
}
