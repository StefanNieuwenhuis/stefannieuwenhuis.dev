export interface Post {
    id: string;
    categoryId: string;
    userId: string
    title: string;
    publishDate: string;
    body: string;
}

export interface Category {
    id: string;
    category: string;
}

export interface User {
    id: string;
    name: string;
}