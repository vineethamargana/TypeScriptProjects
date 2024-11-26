export interface Job {
    id: bigint;
    alert_count: number;
    creation_date: Date;
    description: string;
    employee_type: string;
    industry_type: string;
    job_highlights: string;
    job_status: string;
    job_title: string;
    location: string;
    max_salary: number;
    maximum_experience: number;
    min_salary: number;
    minimum_experience: number;
    minimum_qualification: string;
    new_status: string;
    promote: string;
    recent_application_date_time: Date;
    save_job_status: string;
    specialization: string;
    status: string;
    upload_document: number | null;
    job_recruiter_recruiter_id: bigint;
    is_saved: string;
    joburl: string;
  }
  