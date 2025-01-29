import { booleanAttribute, Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'a-button-link',
    templateUrl: './link.component.html',
})
export class ButtonLinkComponent {
    @Input({ required: true }) className: string = '';
    @Input({ transform: booleanAttribute }) disabled: boolean = false;
    @Input() href: string = '';
    @Input() target: string = '_self';
    @Input() onClick: (evt: MouseEvent) => void | undefined = () => { };
    @Input() onKeyDown: (evt: KeyboardEvent) => void | undefined = () => { };
}
