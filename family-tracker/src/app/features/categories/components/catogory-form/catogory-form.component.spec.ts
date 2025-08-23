import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogoryFormComponent } from './catogory-form.component';

describe('CatogoryFormComponent', () => {
  let component: CatogoryFormComponent;
  let fixture: ComponentFixture<CatogoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatogoryFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatogoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
