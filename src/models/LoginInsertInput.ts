export interface LoginInsertInput {
    UserName: string;
    Password: string;
    ID_UserRole: number;
    ID_Application: string;
    IP: string;
    IsPersistent: boolean;
    ID_PersistentLogin: string;
    Token: string;
    UserAgent: string;
    Place: string;
    IsMobile: boolean;
} 