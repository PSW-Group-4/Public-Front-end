import { Time } from "@angular/common";

export interface Appointment {
    id: string,
    startTime: Time,
    doctorName: string,
    doctorSurname: string,
    roomNumber: string
}