import { DateRange } from './DateRange';
export interface AppointmentSuggestionsWithRespectiveDoctor {
  id: string;
  name: string;
  surname: string;
  appointmentSuggestions: DateRange;
}
