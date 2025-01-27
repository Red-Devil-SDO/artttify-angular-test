import { Component, ViewEncapsulation } from "@angular/core";

import { IconComponent } from "../Icon/icon.component";
import { IconKeys } from "../Icon/const";

@Component({
    selector: 'promo-efes-ge',
    templateUrl: './promoEfesGe.component.html',
    imports: [IconComponent],
    encapsulation: ViewEncapsulation.None
})

export class PromoEfesGeComponent {
    icons = IconKeys;
}
