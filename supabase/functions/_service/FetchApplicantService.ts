import getApplicantById from "../_repository/FetchApplicantonIdRepo.ts";
export default async function fetchApplicantonid(applicant_id: number) {
    return await getApplicantById(applicant_id);
    
}