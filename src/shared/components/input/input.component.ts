import { booleanAttribute, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'a-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  imports: [ReactiveFormsModule],
})
export class InputComponent {
  @Input() className: string = '';
  @Input() wrapperClassName: string = '';
  @Input() formControlName: string = '';
  @Input() id: string = '';
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() onInput: (event: Event) => void = () => { };

  classes: string = '';

  ngOnInit() {
    const classes = ['input'];

    if (this.disabled) {
        classes.push('disabled');
    }

    classes.push(this.className);
    this.classes = classes.join(' ');
}
}
