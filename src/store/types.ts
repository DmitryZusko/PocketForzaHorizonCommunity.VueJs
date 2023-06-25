import { IDesign } from "@/components/dto/entities/Design";

interface IEntitiesStoreState<T> {
  isLoading: boolean;
  entities: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface IDesignStoreState extends IEntitiesStoreState<IDesign> {}
