import { Routes } from "@angular/router";
import { MemberListComponent } from "./components/member-list/member-list.component";
import { MemberFormComponent } from "./components/member-form/member-form.component";

export const MEMBER_ROUTES: Routes = [
    // Define child routes here if needed in the future
        { path: '', component: MemberListComponent },
        { path: 'add', component: MemberFormComponent },
        { path: 'edit/:id', component: MemberFormComponent }
];