export interface PageModel<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}
