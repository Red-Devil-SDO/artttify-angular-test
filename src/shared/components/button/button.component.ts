import {
  booleanAttribute,
  Component,
  computed,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  ViewChild,
  TemplateRef,
  effect,
  signal,
} from "@angular/core";

import { ButtonButtonComponent } from "./buttonTypes/button.component";
import { ButtonLinkComponent } from "./buttonTypes/link.component";
import { NgComponentOutlet } from "@angular/common";

export type TButtonTypes = "link" | "button";

@Component({
  selector: "a-button",
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgComponentOutlet],
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() htmlButtonType: string = "button";
  @Input() className: string = "";
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input() href: string = "";
  @Input() target: string = "_self";
  @Input() type: TButtonTypes = "link";
  @Input() onClick: (event: MouseEvent) => void | undefined = () => {};
  @Input() onKeyDown: (event: KeyboardEvent) => void | undefined = () => {};
  @ViewChild("contentTpl", { static: true }) contentTemplate!: TemplateRef<any>;

  classes: string = "";
  disabledState = signal(this.disabled);
  buttonComponent = computed(() =>
    this.type === "link" ? ButtonLinkComponent : ButtonButtonComponent,
  );

  componentContext = computed(() =>
    this.type === "link"
      ? {
          href: this.href,
          target: this.target,
          className: this.classes,
          disabled: this.disabledState(),
          onClick: this.onClick,
          onKeyDown: this.onKeyDown,
          contentTemplate: this.contentTemplate,
        }
      : {
          htmlButtonType: this.htmlButtonType,
          className: this.classes,
          disabled: this.disabledState(),
          onClick: this.onClick,
          onKeyDown: this.onKeyDown,
          contentTemplate: this.contentTemplate,
        },
  );

  ngOnChanges(changes: SimpleChanges) {
    if (changes["disabled"]) {
      this.disabledState.set(changes["disabled"].currentValue);
    }
  }

  ngOnInit() {
    const classes = ["button"];

    if (this.disabled && this.type === "link") {
      classes.push("disabled");
    }

    classes.push(this.className);
    this.classes = classes.join(" ");
  }
}
