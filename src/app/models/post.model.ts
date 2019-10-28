export interface Post {
    id: number;
    categoryId: number;
    title: string;
    publishDate: string;
    body: string;
}

export interface Category {
    id: number;
    category: string;
}