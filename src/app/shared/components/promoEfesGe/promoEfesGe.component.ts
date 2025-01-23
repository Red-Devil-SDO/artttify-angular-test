import { Component } from "@angular/core";

import { IconComponent } from "../Icon/icon.component";
import { IconKeys } from "../Icon/const";

@Component({
    selector: 'promo-efes-ge',
    templateUrl: './promoEfesGe.component.html',
    imports: [IconComponent],
})

export class PromoEfesGeComponent {
    icons = IconKeys;
}
