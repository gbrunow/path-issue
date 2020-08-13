import { Component, OnInit } from '@angular/core';
import { DummyComponent } from '@components';

@Component({
  selector: 'lib-test-lib',
  template: `
    <p>
      test-lib works!
    </p>
  `,
  styles: [],
})
export class TestLibComponent implements OnInit {
  test: DummyComponent;

  constructor() {}

  ngOnInit(): void {}
}
