import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  standalone: true,
  selector: "hls-keyword-filter",
  template: `
    <input
      placeholder="Search"
      class="keyword-filter mr-2 rounded-full tracking-wider"
      (change)="handleChange($event)"
    />
  `,
  styleUrls: ["./keyword-filter.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class KeywordFilter {
  handleChange = ($event: any) => {
    this.onChange.emit($event.target.value);
  };

  @Output() onChange = new EventEmitter<string>();
}
