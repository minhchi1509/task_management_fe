export interface TErrorResponseData {
  errorType: string;
  message: string;
}

export class ErrorResponse extends Error {
  data?: TErrorResponseData;
  constructor(message: string, data?: TErrorResponseData) {
    super(message);
    this.data = data;
  }
}
