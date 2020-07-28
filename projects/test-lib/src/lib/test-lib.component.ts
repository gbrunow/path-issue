import { Component, OnInit } from '@angular/core';
import { DummyComponent } from "@components/dummy/dummy.component";

@Component({
  selector: 'lib-test-lib',
  template: `
    <p>
      test-lib works!
    </p>
  `,
  styles: [
  ]
})
export class TestLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
