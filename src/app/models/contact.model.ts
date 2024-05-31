export interface NewContact {
    firstName: string;
    lastName: string;
    phone: string;
    dateOfBirth: string;
    email: string;
    address: string;
}

export interface Contact extends NewContact {
    id: string;
}