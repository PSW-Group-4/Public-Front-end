import { DateRangeCustom } from './DateRangeCustom';
export interface ScheduleAppointmentSuggestion {
  time: DateRangeCustom;
  doctorId: string;
  priority: string;
}
