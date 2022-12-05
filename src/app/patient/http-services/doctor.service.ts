import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstSettings } from 'src/app/constSettings';
import { PersonFullname } from '../Model/PersonFullname';
import { AvailableTimesRequest } from '../Model/AvailableTimesRequest';
import { DateRangeCustom } from '../Model/DateRangeCustom';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  basePath:string = ConstSettings.apiHost + "api/Doctor";
  constructor(private readonly http: HttpClient) { }

  getSpecialties = () : Observable<string[]> =>
  {
      let path = this.basePath + "/specialties";
      return this.http.get<string[]>(path);
  }

  GetDoctorsWithSpecialty = (specialty: string) : Observable<PersonFullname[]> =>
  {
      let path = this.basePath + "/specialties/" + specialty;
      return this.http.get<PersonFullname[]>(path);
  }

  GetAvailableTimes = (dto: AvailableTimesRequest) : Observable<DateRangeCustom[]> =>
  {
      //let path = this.basePath + "/specialties/" + specialty;
      let path = "";
      return this.http.get<DateRangeCustom[]>(path);
  }

}
