import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConstSettings } from "../../constSettings";
import { Jwt } from "../model/Jwt.model";
import { LoginDto } from "../model/loginDto.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}


  login(loginDto: LoginDto): Observable<Jwt> {
    return this.http.post<Jwt>(ConstSettings.apiHost + 'api/User/LoginPatient', loginDto, {
            headers: ConstSettings.standardHeader,
        });
}

}