
# EasyTrack

EasyTrack is a task management application built with Angular. It allows users to manage their tasks with ease, providing a user-friendly interface and essential features for task management.

## Project Structure

The project has the following structure:

## Components

### HeaderComponent

The `HeaderComponent` is responsible for displaying the header of the application, which includes the logo and the title.

-**Selector**: `app-header`

-**Template**: [header.component.html](src/app/header/header/header.component.html)

-**Styles**: [header.component.css](src/app/header/header/header.component.css)

### UserComponent

The `UserComponent` is responsible for displaying individual user information.

-**Selector**: `app-user`

-**Template**: [user.component.html](src/app/user/user/user.component.html)

-**Styles**: [user.component.css](src/app/user/user/user.component.css)

### AppComponent

The `AppComponent` is the root component that includes the `HeaderComponent` and a list of `UserComponent`.

-**Selector**: `app-root`

-**Template**: [app.component.html](src/app/app.component.html)

-**Styles**: [app.component.css](src/app/app.component.css)

### TasksComponent

The `TasksComponent` is responsible for displaying the tasks of a selected user.

-**Selector**: `app-tasks`

-**Template**: [tasks.component.html](src/app/components/tasks/tasks.component.html)

-**Styles**: [tasks.component.css](src/app/components/tasks/tasks.component.css)

### NewTaskComponent

The `NewTaskComponent` is responsible for creating a new task.

-**Selector**: `app-new-task`

-**Template**: [new-task.component.html](src/app/components/tasks/new-task/new-task.component.html)

-**Styles**: [new-task.component.css](src/app/components/tasks/new-task/new-task.component.css)

### TaskComponent

The `TaskComponent` is responsible for displaying an individual task.

-**Selector**: `app-task`

-**Template**: [task.component.html](src/app/components/tasks/task/task.component.html)

-**Styles**: [task.component.css](src/app/components/tasks/task/task.component.css)

### CardComponent

The `CardComponent` is a shared component used to display content within a card layout.

-**Selector**: `app-card`

-**Template**: [card.component.html](src/app/shared/card/card.component.html)

-**Styles**: [card.component.css](src/app/shared/card/card.component.css)

## Dummy Users

The project includes a list of dummy users defined in [dummy-users.ts](src/app/dummy-users.ts).

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
