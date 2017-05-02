import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shortcode',
  templateUrl: './shortcode.component.html',
  styleUrls: ['./shortcode.component.css']
})
export class ShortcodeComponent implements OnInit {

  @Input() input: string;

  constructor() { }

  ngOnInit() {
    console.log(this.input);
  }

}
