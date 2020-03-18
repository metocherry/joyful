export interface Observer {
  next: (data: any) => any,
  error: (data: any) => any,
  complete: (data: any) => any,
}

