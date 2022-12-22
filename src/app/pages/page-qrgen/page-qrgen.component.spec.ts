import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQrgenComponent } from './page-qrgen.component';

describe('PageQrgenComponent', () => {
  let component: PageQrgenComponent;
  let fixture: ComponentFixture<PageQrgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageQrgenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageQrgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
