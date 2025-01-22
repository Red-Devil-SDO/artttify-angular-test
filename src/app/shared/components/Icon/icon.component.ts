import { Component, Input, OnInit } from "@angular/core";

import { IconNames, TIcon } from "./const";

@Component({
    selector: 'icon',
    templateUrl: './icon.component.html',
    styleUrl: './icon.component.scss',
})
export class IconComponent implements OnInit {
    @Input() iconName: TIcon | undefined;
    @Input() className: string = '';
    @Input() onClick: (evt: Event) => void | undefined = () => {};
    icon: string | undefined;

    ngOnInit() {
        this.icon = IconNames[this.iconName as TIcon];
    }
}
