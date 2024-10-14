// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
  id: number;
  name: string;
  email: string;
  phone: string;
  experience: number;
  education: string;
  skills: string[];
  status: string;
  created_at: string;
  updated_at: string;
}
