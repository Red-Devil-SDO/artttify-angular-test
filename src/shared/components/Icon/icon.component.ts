import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { IconNames, TIcons } from './const';

@Component({
    selector: 'icon',
    templateUrl: './icon.component.html',
    styleUrl: './icon.component.scss',
})
export class IconComponent implements OnInit, OnChanges {
    @Input({ required: true }) iconName: TIcons = '' as TIcons;
    @Input() className: string = '';
    @Input() onClick: (evt: Event) => void | undefined = () => { };

    classes: string = '';

    private updateClasses () {
        this.classes = [IconNames[this.iconName], this.className].join(' ');
    }

    ngOnInit() {
        this.updateClasses();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['iconName']) {
            this.updateClasses();
        }
    }
}
