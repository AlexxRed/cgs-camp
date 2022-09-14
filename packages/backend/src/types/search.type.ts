export interface ITodoFilter<T, P = string> {
  completed?: T;
  public?: T;
  owner?: string;
  page?: P;
  pageSize?: P;
}
