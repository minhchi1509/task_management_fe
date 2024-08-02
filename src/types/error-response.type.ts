export interface TErrorResponseData {
  statusCode: number;
  message: string;
  path: string;
}

export class ErrorResponse extends Error {
  data?: TErrorResponseData;
  constructor(message: string, data?: TErrorResponseData) {
    super(message);
    this.data = data;
  }
}
