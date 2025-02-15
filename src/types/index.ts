export interface Item {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
}

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
}