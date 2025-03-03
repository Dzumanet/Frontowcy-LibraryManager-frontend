type ApiConfig<P = object> = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    body?: P,
    credentials?: 'include' | 'omit',
}

interface ApiError extends Error {
    status?: number;
}

export const apiCall = async <R, P = object>(url: string, config?: ApiConfig<P>): Promise<R> => {
    const headers: HeadersInit = {};

    if (!(config?.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(url, {
        method: config?.method || 'GET',
        headers,
        body: config?.body instanceof FormData ? config.body : JSON.stringify(config?.body),
        credentials: config?.credentials || 'omit'
    });

    if (!response.ok) {
        let errorMessage = `API error: ${response.status} ${response.statusText}`;
        let errorData: unknown;

        try {
            errorData = await response.json();
            if (typeof errorData === "object" && errorData !== null && "message" in errorData) {
                errorMessage = (errorData as { message: string }).message;
            }
        } catch (jsonError) {
            console.error("Failed to parse error response:", jsonError);
        }

        const error: ApiError = new Error(errorMessage);
        error.status = response.status;
        throw error;
    }

    return await response.json() as Promise<R>;
};





// type ApiConfig<P = object> = {
//     method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
//     body?: P,
//     credentials?: 'include' | 'omit',
// }
//
// export const apiCall = async <R, P = object>(url: string, config?: ApiConfig<P>): Promise<R> => {
//     const headers: HeadersInit = {};
//
//     if (!(config?.body instanceof FormData)) {
//         headers['Content-Type'] = 'application/json';
//     }
//
//     const response = await fetch(url, {
//         method: config?.method || 'GET',
//         headers,
//         body: config?.body instanceof FormData ? config.body : JSON.stringify(config?.body),
//         credentials: config?.credentials || 'omit'
//     });
//
//     if (!response.ok) {
//         let errorMessage = `API error: ${response.status} ${response.statusText}`;
//
//         try {
//             const errorData = await response.json();
//             errorMessage = errorData.message || errorMessage;
//         } catch (jsonError) {
//             console.error("Failed to parse error response:", jsonError);
//         }
//
//         const error = new Error(errorMessage) as Error & { status?: number };
//         error.status = response.status;
//         throw error;
//     }
//
//     return await response.json() as Promise<R>;
// };