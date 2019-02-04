import { Registration } from './registration';

export interface EventModel {
    _id: string;
    title: string;
    description: string;
    date: string;
    registrations: Registration[];
}
