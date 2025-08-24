import { api } from "@/apiServices/ApiWrapper";

interface LoginPayload {
  username_or_email: string;
  password: string;
}
export async function loginUser(payload: LoginPayload) {
    try{
  const { data } = await api.post("/login", payload);
  return data;
    }catch(error){
        console.log("Error during login:", error);
    }
}

interface RegisterPayload {
  email: string;
  username: string;
  password: string;
}
export async function registerUser(payload: RegisterPayload) {
    const { data } = await api.post("/register", payload);
  return data;
}

