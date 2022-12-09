import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AllegrieService } from 'src/app/Services/allegrie.service';
import { DoctorService } from 'src/app/Services/doctor.service';
import { UserService } from './user.service';

export interface Jmbg {
  JmbgValue: string;
}

export interface Gender {
  value: number;
  viewValue: string;
}

export interface BloodType {
  bloodGroup: number;
  rhFactor: number;
}

export interface BloodGroup {
  value: number;
  viewValue: string;
}

export interface RhFactor {
  value: number;
  viewValue: string;
}

export interface Allergies {
  name: string;
  id: string;
}

export interface Doctor {
  id: string;
  name: string;
  surname: string;
  patientCount: number;
}

export interface UserInfo {
  userLoginDto: {
    username: string;
    password: string;
  };
  addressRequestDto: {
    city: string;
    country: string;
    street: string;
    streetNumber: string;
  };
  name: string;
  surname: string;
  birthdate: string;
  gender: number;
  jmbg: Jmbg;
  email: string;
  phoneNumber: string;
  bloodType: BloodType;
  allergieIds: string;
  choosenDoctorId: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  maxDate = new Date();

  bloodGroup: BloodGroup[] = [
    { value: 0, viewValue: 'O' },
    { value: 1, viewValue: 'A' },
    { value: 2, viewValue: 'B' },
    { value: 3, viewValue: 'AB' },
  ];
  selectedBloodGroup = this.bloodGroup[0].value;

  rhFactor: RhFactor[] = [
    { value: 0, viewValue: 'POSITIVE' },
    { value: 1, viewValue: 'NEGATIVE' },
  ];

  selectedRhFactor = this.rhFactor[0].value;

  genders: Gender[] = [
    { value: 0, viewValue: 'Male' },
    { value: 1, viewValue: 'Female' },
  ];
  selectedGender = this.genders[0].value;

  doctors: Doctor[] = [{ id: '', name: '', surname: '', patientCount: 0 }];

  selectedDoctor = this.doctors[0].id;

  allergiesList: Allergies[] = [];
  allergiesListSelected = new FormControl('');

  hide = true;
  registrationForm = new FormGroup({
    password: new FormControl<string>('', [Validators.required]),
    username: new FormControl<string>('', [Validators.required]),
    number: new FormControl<string>('', [Validators.required]),
    city: new FormControl<string>('', [Validators.required]),
    street: new FormControl<string>('', [Validators.required]),
    country: new FormControl<string>('', [Validators.required]),
    name: new FormControl<string>('', [Validators.required]),
    surname: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required]),
    phoneNumber: new FormControl<string>('', [Validators.required]),
    birthDate: new FormControl(new Date().toISOString().substring(0, 10), [
      Validators.required,
    ]),

    jmbg: new FormControl<string>('', [Validators.required]),
  });

  errorMessage: string = 'Fill the form data correctly';

  myFilter = (d: Date | null): boolean => {
    const day = d || new Date();
    let today = new Date();
    return day < today;
  };

  constructor(
    private readonly router: Router,
    private readonly allegrieService: AllegrieService,
    private readonly doctorService: DoctorService,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.allegrieService.getsAllegries().subscribe((res) => {
      this.allergiesList = res;
      console.table(res);
    });
    this.doctorService.getDoctorsWithLeastPatients().subscribe((res) => {
      this.doctors = res;
      this.selectedDoctor = this.doctors[0].id;
    });
  }
  get form() {
    return this.registrationForm.controls;
  }

  registerUser(): void {
    this.errorMessage = 'Fill the form data correctly';

    let bloodType1: BloodType = {
      bloodGroup: this.selectedBloodGroup,
      rhFactor: this.selectedRhFactor,
    };

    let jmbg1: Jmbg = {
      JmbgValue: this.form.jmbg.value ?? '',
    };

    let dto: UserInfo = {
      userLoginDto: {
        username: this.form.username.value ?? '',
        password: this.form.password.value ?? '',
      },
      addressRequestDto: {
        streetNumber: this.form.number.value ?? '',
        city: this.form.city.value ?? '',
        street: this.form.street.value ?? '',
        country: this.form.country.value ?? '',
      },

      name: this.form.name.value ?? '',
      surname: this.form.surname.value ?? '',
      birthdate: this.form.birthDate.value ?? '',
      gender: this.selectedGender,
      jmbg: jmbg1,
      phoneNumber: this.form.phoneNumber.value ?? '',
      email: this.form.email.value ?? '',
      bloodType: bloodType1,
      allergieIds: this.allergiesListSelected.value ?? '',
      choosenDoctorId: this.selectedDoctor,
    };

    console.log(dto);
    this.userService.registerUser(dto).subscribe(
      (res) => {
        this.router.navigate(['loginPage']);
      },
      (err) => {
        console.log(err);

        this.errorMessage = err.error;
      }
    );
  }
}
