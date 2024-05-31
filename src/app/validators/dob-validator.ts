import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dobValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const dob: string = control.value;
    const currentDate: Date = new Date();
    const userDate = new Date(dob);

    if (userDate > currentDate) {
      return { futureDate: true };
    }

    const maxAgeDate = new Date();
    maxAgeDate.setFullYear(maxAgeDate.getFullYear() - 150);
    if (userDate < maxAgeDate) {
      return { maxAge: true };
    }

    return null;
  };
}
