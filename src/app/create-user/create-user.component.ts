import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      drinkPreference: ['', Validators.required],
      hobbies: this.formBuilder.array(['']),
    });
  }

  onSubmitForm(): void {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue.firstName,
      formValue.lastName,
      formValue.email,
      formValue.drinkPreference,
      formValue.hobbies ? formValue.hobbies : []
    );
    this.userService.addUser(newUser);
    this.router.navigate(['users']);
  }

  getHobbiesAsFormArray(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby(): void {
    const newHobbyControl = this.formBuilder.control(null, Validators.required);
    this.getHobbiesAsFormArray().push(newHobbyControl);
  }
}
