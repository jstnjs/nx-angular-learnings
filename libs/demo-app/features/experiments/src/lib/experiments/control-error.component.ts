import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'control-error',
  template: `<p class="mt-2 text-sm text-red-600" [class.hide]="_hide" id="email-error">{{ _text }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorComponent {
  // @ts-ignore
  _text: string;
  _hide = true;

  @Input() message: any;

  @Input() set text(value: string) {
    if (value !== this._text) {
      this._text = value;
      this._hide = !value;
      this.cdr.detectChanges();
    }
  }

  constructor(private cdr: ChangeDetectorRef) {}
}
