import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div><h1>{{pageTitle}}</h1>
        <el-events></el-events>
    </div>`
})

export class AppComponent {
    pageTitle: string = 'Angular 2/4';
}
