import { NgModule } from '@angular/core';
import { TestLibComponent } from './test-lib.component';
import { DummyComponent } from './components/dummy/dummy.component';



@NgModule({
  declarations: [TestLibComponent, DummyComponent],
  imports: [
  ],
  exports: [TestLibComponent]
})
export class TestLibModule { }
