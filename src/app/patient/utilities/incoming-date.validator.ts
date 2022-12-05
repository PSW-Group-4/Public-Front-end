import { AbstractControl } from '@angular/forms';

export function IncomingDateValidator(control: AbstractControl) {
    let selectedDateString : string = control.value; 
    let selectedDate : Date = new Date(selectedDateString);
    let currentDate = new Date();
    currentDate.setHours(0);
    currentDate.setMinutes(0);
    if (selectedDate < currentDate) {
        return { invalidDate: true };
    }
    return null;
}