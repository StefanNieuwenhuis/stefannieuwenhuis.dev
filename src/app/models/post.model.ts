import { Timestamp } from '@firebase/firestore-types';

export interface Post {
    id: string;
    categoryId?: string;
    userId?: string;
    title: string;
    publishDate: Timestamp;
    body: string;
}
