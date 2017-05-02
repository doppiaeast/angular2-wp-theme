import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcodeComponent } from './shortcode.component';

describe('ShortcodeComponent', () => {
  let component: ShortcodeComponent;
  let fixture: ComponentFixture<ShortcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
