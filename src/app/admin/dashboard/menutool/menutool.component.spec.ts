import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutoolComponent } from './menutool.component';

describe('MenutoolComponent', () => {
  let component: MenutoolComponent;
  let fixture: ComponentFixture<MenutoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenutoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenutoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
