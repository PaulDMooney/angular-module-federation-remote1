import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemotepageComponent } from './remotepage.component';

describe('RemotepageComponent', () => {
  let component: RemotepageComponent;
  let fixture: ComponentFixture<RemotepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemotepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemotepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
