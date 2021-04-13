import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarWashPointComponent } from './car-wash-point.component';

describe('CarWashPointComponent', () => {
  let component: CarWashPointComponent;
  let fixture: ComponentFixture<CarWashPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarWashPointComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarWashPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
