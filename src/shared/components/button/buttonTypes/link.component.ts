import { Component, Input, TemplateRef } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";

@Component({
  selector: "a-button-link",
  templateUrl: "./link.component.html",
  standalone: true,
  imports: [NgTemplateOutlet],
})
export class ButtonLinkComponent {
  @Input() contentTemplate?: TemplateRef<any>;
  @Input() href: string = "";
  @Input() target: string = "_self";
  @Input({ required: true }) className: string = "";
  @Input() disabled: boolean = false;
  @Input() onClick: (event: MouseEvent) => void | undefined = () => {};
  @Input() onKeyDown: (event: KeyboardEvent) => void | undefined = () => {};
}
