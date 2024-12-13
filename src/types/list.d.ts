declare module 'app-list' {
  export interface Results<T = any> {
    results: T[];
  }
  
  export interface Paginate {
    page: number;
    limit: number;
    total: number;
  }
  
  export interface FilterParams {
    query?: string | null;
  }
  
  export interface ListParams extends FilterParams {
    page: number;
    limit: number;
  }
  
  export interface ListData<T = any> extends Results<T> {
    paginate: Paginate;
  }
  
  export interface ListResponseData<T> {
    total: number;
    limit: number;
    page: number;
    total_page: number;
    records: T[];
  }
}