export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string | null;

  createdAt: string;
  updatedAt: string;
}

export interface SignUpPayload {
  username: string;
  email: string;
  password: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user: User;
}

export interface CurrentUserResponse {
  success: boolean;
  user: User;
}
