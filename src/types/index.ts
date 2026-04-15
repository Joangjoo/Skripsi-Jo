export interface Course {
    id: number;
    title: string;
    description: string;
    category_id: number;
    category_name: string;
    level_id: number;
    level_name: string;
    level: string;
    rating: number;
    thumbnail: string;
    price: number;
    duration: string;
    instructor: string;
    last_updated: string;
    learn: string[] | string;
    module : string[] | string;
    subtitle : string;
    overview : string;
}

export interface Curriculum {
    id: number;
    title: string;
    description: string;
}