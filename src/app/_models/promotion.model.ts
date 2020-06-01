import { Company } from './company.model';

export class Promotion
{
    id;
    name;
    requiredPoints;
    dateFrom;
    dateTo;
    details;
    company:Company;
    companyId;
}

