export interface Applicant {
    id: number;
    name: string;
    email: string;
    mobile: string;
    password: string;
    roles: string;
    resume_id?: string;
    local_resume: boolean;
    utm_source?: string;
  }