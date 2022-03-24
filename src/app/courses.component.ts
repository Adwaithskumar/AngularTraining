import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <h2 [textContent]="title"></h2>
        <img src="{{ imageurl }}" />
        <img src="title" />
        <ul>
            <li *ngFor="let course of courses">
                {{ course}}
            </li>
        </ul>
        <img [src]="imageurl" />
        <table>
            <tr>
                <td [attr.colSpan] ="colSpan"></td>
            </tr>
        </table>
        <button class="btn btn-primary" (click)="onSave()" [class.active]="isActive">SAVE</button>
        <input [value]="email" (keyup.enter)="email = ($any($event.target).value); onKeyUp()" />
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        <br/>

        {{ course.title | uppercase | lowercase}}<br/>
        {{ course.students | number }}<br/>
        <br/>
        {{ text | summary}}

`
})

export class CoursesComponent {
    text=`In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available
    `
    course={
        title: "Angular",
        rating:4.9746,
        students : 987836
    }
    title="List of componnets";
    courses;
    imageurl = "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/front-left-side-47.jpg";
    colSpan=2;
    isActive=true;
    onSave(){
        console.log("Button was clicked");
    }
    email="me@example.com";
    onKeyUp() {
        console.log(this.email);
    }

    constructor()
    {
        let service = new CoursesService();
        this.courses= service.getCourses();
    }
    
} 