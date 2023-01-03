export interface GoBackToSelection{
    AggregateId : string;
    Selection :  Selection;
    OccurenceTime : Date; 
}

export enum Selection
{
    Date,
    Speciality,
    Doctor,
    Time
}
