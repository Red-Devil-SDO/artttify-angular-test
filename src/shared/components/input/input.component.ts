import { booleanAttribute, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'a-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  imports: [ReactiveFormsModule],
})
export class InputComponent implements OnInit {
  @Input({ required: true }) id: string = '';
  @Input() className: string = '';
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() wrapperClassName: string = '';
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) required: boolean = false;
  @Input() onInput: (event: Event) => void = () => { };
  @Input() onChange: (event: Event) => void = () => { };

  classes: string = '';
  classesWrapper: string = '';

  handleChange(event: Event) {
    if (this.type === 'checkbox') {
      this.formGroup.patchValue({ [this.id]: (event.target as HTMLInputElement)?.checked || false });
    }

    this.onChange(event);
  }

  ngOnInit() {
    const validators: Array<ValidatorFn> = [];
    const classes = [this.type === 'checkbox' ? 'checkbox' : 'input'];
    const classesWrapper = [`${this.type === 'checkbox' ? 'checkbox' : 'input'}-wrapper`];

    if (this.disabled) {
      classes.push('disabled');
    }

    classes.push(this.className);
    classesWrapper.push(this.wrapperClassName);
    this.classes = classes.join(' ');
    this.classesWrapper = classesWrapper.join(' ');

    if (this.required) {
      validators.push(Validators.required);
    }

    if ((Validators as unknown as Record<string, ValidatorFn>)[this.type]) {
      validators.push((Validators as unknown as Record<string, ValidatorFn>)[this.type]);
    }

    this.formGroup.addControl(this.id, new FormControl(this.type === 'checkbox' ? false : '', validators));
  }
}
