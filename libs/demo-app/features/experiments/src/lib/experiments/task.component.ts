import { Component, forwardRef, Host, Optional, Self, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  NgControl,
  Validator,
  AbstractControl,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface ApiResponse {
  code: string;
  data: string;
}

@Component({
  standalone: true,
  selector: 'app-custom-input',
  template: ` <input type="text" [value]="displayedValue" (input)="onInputChange($event)" /> `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TaskComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TaskComponent),
      multi: true,
    },
  ],
})
export class TaskComponent implements OnInit, ControlValueAccessor, Validator {
  @Output() valueChanged = new EventEmitter<ApiResponse>();
  apiResponse: ApiResponse[] = [];
  ngControl = Inject(NgControl);
  onChange: any = () => {};
  onTouched: any = () => {};
  displayedValue = '';

  constructor(private http: HttpClient) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<ApiResponse[]>('/api/tasks').subscribe(
      (response: ApiResponse[]) => {
        this.apiResponse = response;
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      },
    );
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    const inputValue = control.value;
    const matchedRecord = this.apiResponse.find((record: ApiResponse) => record.data === inputValue);

    if (matchedRecord) {
      this.valueChanged.emit(matchedRecord);
      return null; // Valid input
    } else {
      this.valueChanged.emit({ code: '', data: '' });
      return { invalidInput: true }; // Invalid input
    }
  }

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.displayedValue = value;
    this.onChange(value);
    this.onTouched();
  }

  writeValue(value: any): void {
    this.displayedValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
