import type { PaginatedResponse } from '@/modules/commons/business/types/shared.type';
export interface Category {
    id: number;
    name: string;
    slug: string;
    description?: string;
    order: number;
    created_at: string;
    updated_at: string;
}

export interface Skill {
    id: number;
    name: string;
    level: 1 | 2 | 3 | 4 | 5;
    category: Category | number; // Can be Category object or ID
    icon?: string | null; // URL or null
    is_featured: boolean;
    order: number;
    created_at: string;
    updated_at: string;
}

export type PaginatedSkillResponse = PaginatedResponse<Skill>;