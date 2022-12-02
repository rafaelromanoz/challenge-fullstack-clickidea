export interface IErrorMessage {
  statusCode: number;
  message: string
}

const createErrorMessage = (statusCode: number, message: string): IErrorMessage => ({
  statusCode,
  message
});

export { createErrorMessage }