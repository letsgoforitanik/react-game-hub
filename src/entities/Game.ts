import { Genre } from ".";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
    id: number;
    name: string;
    genres: Genre[];
    publishers: Publisher[];
    background_image: string | null;
    parent_platforms: { platform: Platform }[];
    description_raw: string;
    metacritic: number;
    rating_top: number;
    slug: string;
}
