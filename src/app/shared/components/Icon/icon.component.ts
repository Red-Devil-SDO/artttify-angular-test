import { Component, Input, OnInit } from '@angular/core';

import { IconNames, TIcons } from './const';

@Component({
    selector: 'icon',
    templateUrl: './icon.component.html',
    styleUrl: './icon.component.scss',
})
export class IconComponent implements OnInit {
    @Input({ required: true }) iconName: TIcons = '' as TIcons;
    @Input() className: string = '';
    @Input() onClick: (evt: Event) => void | undefined = () => { };

    classes: string = '';

    ngOnInit() {
        this.classes = [IconNames[this.iconName], this.className].join(' ');
    }
}
