export const API_BASE_URL = 'http://localhost:3000';
// const API_BASE_URL = process.env.REACT_APP_API_URL ?? 'http://localhost:3000';


export const API_ENDPOINTS = {
    // Auth
    LOGIN: `${API_BASE_URL}/auth/login`,
    LOGOUT: `${API_BASE_URL}/auth/logout`,
    AUTH_STATUS: `${API_BASE_URL}/auth/check`,

    // User Module
    REGISTER: `${API_BASE_URL}/user/register`,
    USER_DETAILS: `${API_BASE_URL}/user/me`,
    USER_UPDATE: `${API_BASE_URL}/user/update-profile`,
    USER_BORROWED_BOOKS: `${API_BASE_URL}/user/borrowed-books`,

    // book Module
    ADD_BOOK: `${API_BASE_URL}/book/register`, // Admin only
    GET_BOOKS: `${API_BASE_URL}/books`,
    GET_BOOK: (id: string) => `${API_BASE_URL}/book/${id}`,
    UPDATE_BOOK: (id: string) => `${API_BASE_URL}/book/${id}`, // Admin only
    DELETE_BOOK: (id: string) => `${API_BASE_URL}/book/${id}`, // Admin only
    IMAGE_BOOK_UPLOAD: (id: string) => `${API_BASE_URL}/book/${id}/image/upload`, // Admin only
    IMAGE_BOOK_REMOVE: (id: string) => `${API_BASE_URL}/book/${id}/image/remove`, // Admin only


    // Loan Module
    CREATE_LOAN: `${API_BASE_URL}/loans`,
    RETURN_BOOK: (loanId: string) => `${API_BASE_URL}/loans/${loanId}/return`,
    FORCED_RETURN: (loanId: string) => `${API_BASE_URL}/admin/loans/${loanId}/return`,
    GET_LOANS: `${API_BASE_URL}/loans`, // Admin only
    GET_MY_LOANS: `${API_BASE_URL}/loans/me`,
    LOANS_STATISTICS: `${API_BASE_URL}/admin/loans/statistics`, // Admin only

    // Log Module
    CREATE_LOG: `${API_BASE_URL}/log`,
    GET_LOGS: `${API_BASE_URL}/log`, // Admin only
    GET_LOGS_BY_USER: (userId: string) => `${API_BASE_URL}/log/user/${userId}`, // Admin only
};
