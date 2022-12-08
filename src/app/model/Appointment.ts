export interface Appointment {
    id: string;
    doctor: {
        name: string;
        surname: string;
    };
    date: string;
    time: string;
    room: string;
}