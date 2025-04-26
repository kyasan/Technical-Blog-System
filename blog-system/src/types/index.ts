export interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    createdAt: string;
    tags: string[];
}

export interface Comment {
    id: number;
    postId: number;
    author: string;
    content: string;
    createdAt: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
    avatar: string;
}



