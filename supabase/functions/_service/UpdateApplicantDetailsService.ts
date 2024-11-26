import { updateApplicant } from "../_repository/updateApplicantdetailsRepo.ts";
import { Applicant } from "../_model/ApplicantModel.ts";

export default async function updateApplicantFromService(id:number,data: Partial<Applicant>) {
    return await updateApplicant(id,data); 
    
}