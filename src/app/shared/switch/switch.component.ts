import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() selected: boolean = false;

  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onChange(e) {
    this.change.emit(e.target.checked);
  }

}
