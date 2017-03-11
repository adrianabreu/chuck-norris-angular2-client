export interface ApiResponse {
    type: string;
    value: Sentence;
}

export interface Sentence {
    id: number;
    categories: string[];
    joke: string;
}