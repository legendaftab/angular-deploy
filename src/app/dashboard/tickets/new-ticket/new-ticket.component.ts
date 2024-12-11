import { afterNextRender, afterRender, AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, ViewChild, viewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @viewChild('form')form!:ElementRef<HTMLFormElement>;
  @ViewChild('form', { static: false }) form!: ElementRef<HTMLFormElement>;
  //@Output() add = new EventEmitter();
  add = output<{ title: string, text: string }>();


  // onSumit(titleElement: HTMLInputElement) {
  //   console.log('submitted!', titleElement);
  //   const enteredTitle = titleElement.value;
  //   console.log('ENTERED TITLE' + enteredTitle);
  // }

  //reset function
  // onSumit(title: string, ticketText: string, form: HTMLFormElement) {
  //   console.log('TITLE', title);
  //   console.log('TICKET TEXT', ticketText);
  //   form.reset();
  // }


  //two way binding
  enteredTitle = '';
  enteredText = '';

  constructor() {
    afterNextRender(() => {
      console.log('after render')
    });
    afterRender(() => {
      console.log('after NEXT render')
    });
  }
  // onSumit(title:string, ticketText:string,) {
  //   console.log('TITLE', title);
  //   console.log('TICKET TEXT', ticketText);
  //   this.form.nativeElement.reset();
  //   this.add.emit({title:title,text:ticketText});

  // }

  onSumit() {
    //this.form.nativeElement.reset();
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    this.enteredTitle = '';
    this.enteredText = '';
  }

  ngOnInit(): void {
    console.log('ONINIT');
    console.log(this.form.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form.nativeElement);
  }
}
