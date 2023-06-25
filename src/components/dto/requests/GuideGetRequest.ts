export interface IGuideGetRequest {
  descriptionLimit: number;
  searchQuery: string | null;
  page: number;
  pageSize: number;
}
