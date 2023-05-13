import { Platform } from "./Platform";

export interface Game {
    id: number;
    name: string;
    background_image: string | null;
    parent_platforms: { platform: Platform }[];
    description_raw: string;
    metacritic: number;
    rating_top: number;
    slug: string;
}
