import { api } from "@/apiServices/ApiWrapper";

interface LoginPayload {
  username_or_email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  token?: string;
  message?: string;
}

export async function loginUser(payload: LoginPayload): Promise<LoginResponse | undefined> {
  try {
    const { data } = await api.post<LoginResponse>("/login", payload);

    if (data?.token) {
      sessionStorage.setItem("shortToken", data.token);
      document.cookie = `shortToken=${data.token}; path=/; SameSite=Strict`;
    }

    return data;
  } catch (error) {
    console.error("Error during login:", error);
  }
}

// Registration
interface RegisterPayload {
  email: string;
  username: string;
  password: string;
}

interface RegisterResponse {
  success: boolean;
  token?: string;
  message?: string;
}

export async function registerUser(payload: RegisterPayload): Promise<RegisterResponse | undefined> {
  try {
    const { data } = await api.post<RegisterResponse>("/register", payload);

    if (data?.token) {
      sessionStorage.setItem("shortToken", data.token);
      document.cookie = `shortToken=${data.token}; path=/; SameSite=Strict`;
    }

    return data;
  } catch (error) {
    console.error("Error during registration:", error);
  }
}
