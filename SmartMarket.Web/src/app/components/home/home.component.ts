import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    providers: []
})
export class HomeComponent {
    title: string = 'Welcome Home Page!';
    ngOnInit(): void { }
}
