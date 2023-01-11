import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgypteNewsComponent } from './egypte-news.component';

describe('EgypteNewsComponent', () => {
  let component: EgypteNewsComponent;
  let fixture: ComponentFixture<EgypteNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgypteNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgypteNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
