import { Component, ViewEncapsulation } from '@angular/core';

import { IconComponent } from '../../shared/components/Icon/icon.component';
import { IconKeys } from '../../shared/components/Icon/const';
import { PATHS } from '../../app.routes';

@Component({
    selector: 'promo-efes-ge',
    templateUrl: './promoEfesGe.component.html',
    imports: [IconComponent],
    encapsulation: ViewEncapsulation.None
})

export class PromoEfesGeComponent {
    icons = IconKeys;
    links = PATHS;
}
