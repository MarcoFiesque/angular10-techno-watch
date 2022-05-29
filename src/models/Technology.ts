import { TechnologyInterface } from './technologyInterface';
export class Technology implements TechnologyInterface{
    id: number | null;
    technoname: string;
    category: string;
    details: string;
    constructor(id: number = Date.now(), technoname: string, category: string, details: string ){
        this.id = id;
        this.technoname = technoname;
        this.category = category;
        this.details = details;
    }
    
}