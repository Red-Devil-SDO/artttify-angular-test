import { Component, Input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'a-button-button',
  templateUrl: './button.component.html',
  standalone: true,
  imports: [NgTemplateOutlet]
})
export class ButtonButtonComponent {
  @Input() contentTemplate?: TemplateRef<any>;
  @Input() htmlButtonType: string = 'button';
  @Input({ required: true }) className: string = '';
  @Input() disabled: boolean = false;
  @Input() onClick: (event: MouseEvent) => void | undefined = () => { };
  @Input() onKeyDown: (event: KeyboardEvent) => void | undefined = () => { };
}
