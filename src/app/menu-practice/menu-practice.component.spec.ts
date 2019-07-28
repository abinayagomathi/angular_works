import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPracticeComponent } from './menu-practice.component';

describe('MenuPracticeComponent', () => {
  let component: MenuPracticeComponent;
  let fixture: ComponentFixture<MenuPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
