import { booleanAttribute, Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

import { ButtonButtonComponent } from "./buttonTypes/button.component";
import { ButtonLinkComponent } from "./buttonTypes/link.component";
import { LogoutComponent } from "../../../pages/logout/logout.component";

export type TButtonTypes = 'link' | 'button';

@Component({
    selector: 'a-button',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
    encapsulation: ViewEncapsulation.None,
    imports: [ButtonButtonComponent, ButtonLinkComponent, LogoutComponent]
})
export class ButtonComponent implements OnInit {
    @Input() htmlButtonType: string = 'button';
    @Input() className: string = '';
    @Input({ transform: booleanAttribute }) disabled: boolean = false;
    @Input() href: string = '';
    @Input() target: string = '_self';
    @Input() type: TButtonTypes = 'link';
    @Input() onClick: (evt: MouseEvent) => void | undefined = () => { };
    @Input() onKeyDown: (evt: KeyboardEvent) => void | undefined = () => { };

    classes: string = '';

    getRenderedClass() {
        return {
            outlet: this.type === 'link'
                ? ButtonLinkComponent
                : ButtonButtonComponent,
            inputs: this.type === 'link'
                ? {
                    href: this.href,
                    target: this.target,
                    className: this.classes,
                    disabled: this.disabled,
                    click: this.onClick,
                    keydown: this.onKeyDown
                }
                : {
                    htmlButtonType: this.htmlButtonType,
                    className: this.classes,
                    disabled: this.disabled,
                    click: this.onClick,
                    keydown: this.onKeyDown
                }
        };
    }

    ngOnInit() {
        const classes = [this.className];

        if (this.disabled && this.type === 'link') {
            classes.push('disabled');
        }

        classes.push(this.className);
        this.classes = classes.join(' ');
    }
}
