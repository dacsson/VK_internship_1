export interface IUser {
    id: number;
    uname: string;
    image: string;
    first_name: string;
    last_name: string;
    age: number;
    email: string;
}

export type MockinContextType = {
    users: IUser[];
    setUsers: () => {};
};