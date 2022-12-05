import { DateRangeCustom} from '../Model/DateRangeCustom'
export interface ScheduleAppointmentRequest{
    doctorId: string,
    time: DateRangeCustom
 }