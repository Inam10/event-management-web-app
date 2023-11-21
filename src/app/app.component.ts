// app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    shouldShowNavbar: boolean = true;

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // Adjust the condition based on your routing logic
                this.shouldShowNavbar = !event.url.includes('dashboard');
            }
        });
    }
}
