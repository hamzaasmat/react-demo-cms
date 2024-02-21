import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import * as endpoints from '../constants/endpoints';
import { toast } from 'react-toastify';

class ApiService {

    public axiosInstance = axios.create({
        baseURL: endpoints.BASE_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Set headers for the request
    setHeaders(headers: Record<string, string>): void {
        this.axiosInstance.defaults.headers = { ...this.axiosInstance.defaults.headers, ...headers };
    }

    // Set content type for the request
    setContentType(contentType: string): void {
        this.axiosInstance.defaults.headers['Content-Type'] = contentType;
    }


    // Generic method for making HTTP requests
    async request<T>(
        method: 'GET' | 'POST' | 'PUT' | 'DELETE' | any,
        url: string | any,
        data?: any,
        isFormData = false,
        config?: AxiosRequestConfig,
    ): Promise<T> {
        try {
            if (isFormData) {
                this.setContentType('multipart/form-data');
            }

            const response = await this.axiosInstance.request<T>({
                method,
                url,
                data: isFormData ? this.convertToFormData(data) : data,
                ...config,
            });
            // this.showSuccessToast('Solicitud exitosa');
            return response.data;
        }
        catch (error: any) {
            this.handleApiError(error);
            this.getErrorMessage(error?.response?.data?.error)
            return (error)
        }

    }

    // Convert object to FormData
    private convertToFormData(data: Record<string, any>): FormData {
        const formData = new FormData();
        for (let index = 0; index < data.length; index++) {

            formData.append('file_', data[index]);
        }
        return formData;
    }

    // Handle API errors (you can customize this based on your needs)
    private handleApiError(error: AxiosError): void {
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Response error:', error.response.data);

        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
            console.error('Response error:', error.request);

        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error:', error.message);
            console.error('Response error:', error.message);

        }
    }

    private getErrorMessage(errorMsg: string): string {
        toast.error(errorMsg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        return errorMsg;
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ApiService();
