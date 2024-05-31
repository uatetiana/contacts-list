import { AbstractControl, ValidatorFn } from '@angular/forms';

const PHONE_NUMBER_REGEX = /^\+(?:[0-9] ?){6,14}[0-9]$/;

export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const phoneNumber = control.value;
    if (!phoneNumber || phoneNumber.match(PHONE_NUMBER_REGEX)) {
      return null;
    } else {
      return { 'invalidPhoneNumber': true };
    }
  };
}
