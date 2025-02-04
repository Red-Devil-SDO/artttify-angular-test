import { Component, ViewEncapsulation } from "@angular/core";

import { IconComponent } from "../../shared/components/Icon/icon.component";
import { IconKeys } from "../../shared/components/Icon/const";
import { PATHS } from "../../app.routes";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: "page-promo-efes-ge",
  templateUrl: "./promoEfesGe.component.html",
  styleUrl: "./promoEfesGe.component.scss",
  imports: [IconComponent, ButtonComponent],
  encapsulation: ViewEncapsulation.None,
})
export class PromoEfesGeComponent {
  icons = IconKeys;
  links = PATHS;
}
