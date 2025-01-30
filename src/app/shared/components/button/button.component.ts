import { booleanAttribute, Component, computed, Input, OnInit, ViewEncapsulation } from "@angular/core";

import { ButtonButtonComponent } from "./buttonTypes/button.component";
import { ButtonLinkComponent } from "./buttonTypes/link.component";
import { LogoutComponent } from "../../../pages/logout/logout.component";
import { NgComponentOutlet } from "@angular/common";

export type TButtonTypes = 'link' | 'button';

@Component({
    selector: 'a-button',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
    encapsulation: ViewEncapsulation.None,
    imports: [ButtonButtonComponent, ButtonLinkComponent, LogoutComponent, NgComponentOutlet]
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
    buttonComponent: any = computed(() =>
        this.type === 'link'
            ? ButtonLinkComponent
            : ButtonButtonComponent);
    componentContext: any = computed(() => (this.type === 'link'
        ? {
            href: this.href,
            target: this.target,
            className: this.classes,
            disabled: this.disabled,
            onClick: this.onClick,
            onKeyDown: this.onKeyDown
        }
        : {
            htmlButtonType: this.htmlButtonType,
            className: this.classes,
            disabled: this.disabled,
            onClick: this.onClick,
            onKeyDown: this.onKeyDown
        }));

    ngOnInit() {
        const classes = [this.className];

        if (this.disabled && this.type === 'link') {
            classes.push('disabled');
        }

        classes.push(this.className);
        this.classes = classes.join(' ');
    }
}
