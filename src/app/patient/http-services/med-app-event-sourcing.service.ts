import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; import { ConstSettings } from 'src/app/constSettings';
import { ChooseDate } from 'src/app/patient/Model/event-sourcing/ChooseDate'
import {StartScheduling} from 'src/app/patient/Model/event-sourcing/StartScheduling'
import {GoBackToSelection} from 'src/app/patient/Model/event-sourcing/GoBackToSelection'
import {Selection} from 'src/app/patient/Model/event-sourcing/GoBackToSelection'
import {FinishScheduling} from 'src/app/patient/Model/event-sourcing/FinishScheduling'
import {ChooseSpeciality} from 'src/app/patient/Model/event-sourcing/ChooseSpeciality'
import {ChooseDoctor} from 'src/app/patient/Model/event-sourcing/ChooseDoctor'
@Injectable({
  providedIn: 'root'
})
export class MedAppEventSourcingService {

  basePath: string = ConstSettings.apiHost + 'api/MedicalAppointmentSchedulingEventSourcing/';


  constructor(private readonly http: HttpClient) {}

  startSchedulingSession = (dto : StartScheduling) : Observable<string> => {
    let path = this.basePath + 'start-scheduling';
    return this.http.post<string>(path, dto);
  }

  chooseDate = (dto : ChooseDate): Observable<void> => {
    let path = this.basePath + 'choose-date';
    return this.http.post<void>(path, dto);
  };

  chooseSpeciality = (dto : ChooseSpeciality): Observable<void> => {
    let path = this.basePath + 'choose-speciality';
    return this.http.post<void>(path, dto);
  };

  chooseDoctor = (dto : ChooseDoctor): Observable<void> => {
    let path = this.basePath + 'choose-doctor';
    return this.http.post<void>(path, dto);
  };

  finishScheduling = (dto : FinishScheduling): Observable<void> => {
    let path = this.basePath + 'finish-scheduling';
    return this.http.post<void>(path, dto);
  };

  goBackToSelection = (dto : GoBackToSelection): Observable<void> => {
    let path = this.basePath + 'go-back-to-selection';
    return this.http.post<void>(path, dto);
  };
}
