export interface SkautisResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface UserDetail {
  ID: number;
  UserName: string;
  DisplayName: string;
  Email?: string;
}

export interface OrganizationUnit {
  ID: number;
  DisplayName: string;
  UnitType: string;
  RegistrationNumber: string;
} 