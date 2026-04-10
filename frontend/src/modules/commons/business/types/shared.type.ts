export interface PaginatedResponse<T = Record<string, unknown>> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}