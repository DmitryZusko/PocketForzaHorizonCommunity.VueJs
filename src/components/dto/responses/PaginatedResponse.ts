export interface IPaginatedResponse<T> {
  page: number;
  pageSize: number;
  total: number;
  entities: T[];
}
