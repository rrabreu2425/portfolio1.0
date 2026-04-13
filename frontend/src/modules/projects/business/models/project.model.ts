import type { PaginatedResponse } from '@/modules/commons/business/types/shared.type';

export interface Feature {
    id: number;
    project: number;
    title: string;
    description: string;
}

export interface Project {
    id: number;
    title: string;
    slug: string;
    short_description: string;
    description: string;
    technologies: number[];
    github_url: string | null;
    live_url: string | null;
    image: string | null;
    is_featured: boolean;
    is_active: boolean;
    start_date: string | null;
    end_date: string | null;
    order: number;
    created_at: string;
    updated_at: string;
    features: Feature[];
}

export type PaginatedProjectResponse = PaginatedResponse<Project>;