# MyContacts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

pros:

- custom validators;
- UX: modals, flows are good;
- material usage;
- RxJS usage;
  cons:
- CRUD methods located in local-storage-service;
- initial data is set into local-storage in service constructor - which leads to reset of data on each reload (all changes erased);
- href navigation, SPA doesn't work;
- unused injections, imports;
- old syntax for angular 17;
- edit on 'detail' page doesn't save changes;
- useless 'onSubmit()' in the form dialog component;
- unused code (for intstance: contact in Contact-view.components etc.);
- RxJS - is used a lot, but frequently mixed with simple synchronous code with workarounds of wrapping it on the spot with of() etc.;
- missed return types.
