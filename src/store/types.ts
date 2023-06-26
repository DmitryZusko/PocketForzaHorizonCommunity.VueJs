import { IDesign } from "@/components/dto/entities/Design";
import { RemovableRef } from "@vueuse/core";

interface IEntitiesStoreState<T> {
  isLoading: boolean;
  entities: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface IDesignStoreState extends IEntitiesStoreState<IDesign> {}

export interface IAuthStoreState {
  isAuthenticated: RemovableRef<boolean>;
  accessToken: RemovableRef<string>;
  refreshToken: RemovableRef<string>;
}
