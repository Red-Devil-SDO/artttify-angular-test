import { booleanAttribute, Component, Input } from "@angular/core";

@Component({
    selector: 'a-button-button',
    templateUrl: './button.component.html',
})
export class ButtonButtonComponent {
    @Input() htmlButtonType: string = 'button';
    @Input({ required: true }) className: string = '';
    @Input({ transform: booleanAttribute }) disabled: boolean = false;
    @Input() onClick: (evt: MouseEvent) => void | undefined = () => { };
    @Input() onKeyDown: (evt: KeyboardEvent) => void | undefined = () => { };
}