import { IDesign } from "../entities/Design";
import { IPaginatedResponse } from "./PaginatedResponse";

export interface IDesignsResponse extends IPaginatedResponse<IDesign> {}
