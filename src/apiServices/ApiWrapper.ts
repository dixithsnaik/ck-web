import axios from "axios";

const MG_SERVER = import.meta.env.VITE_MANAGEMENT_SERVER;

export const api = axios.create({
  baseURL: MG_SERVER,
  headers: {
		'Content-Type': 'application/json',
		bearer: document.cookie
	}
});