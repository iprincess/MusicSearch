import { apiRequest } from './service-base';
import { METHOD_GET } from './methods';

/* eslint ignore:@typescript-eslint/no-unused-vars */
const handleSuccess = (response) => {
  // hook for all responses
};

const handleFailure = (response) => {
  console.log(`music-service request failure. status: ${response.status}, data: ${response.data}`);
};

export function get<T>(path: string, params?: object): Promise<T> {
  return apiRequest<T>(METHOD_GET, path, params)
    .then((response) => {
      if (response.status === 200) {
        handleSuccess(response.data);
        return response.data;
      } else {
        handleFailure(response);
        return null;
      }
    })
    .catch((error) => {
      console.log("music-service request failure. error", error);
      return null;
    });
}
