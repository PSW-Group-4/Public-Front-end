//DateRange class already exists in DatePickerModule
export interface DateRangeCustom{
    startTime: Date,
    endTime: Date
}

export function dateRangeStringToDate(dateRange : DateRangeCustom) : DateRangeCustom{
   dateRange.startTime = new Date(dateRange.startTime);
   dateRange.endTime = new Date(dateRange.endTime);
   return dateRange;
}