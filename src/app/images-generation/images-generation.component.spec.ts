import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES } from '@infragistics/igniteui-angular';
import { ImagesGenerationComponent } from './images-generation.component';

describe('ImagesGenerationComponent', () => {
  let component: ImagesGenerationComponent;
  let fixture: ComponentFixture<ImagesGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ImagesGenerationComponent, NoopAnimationsModule, FormsModule, IGX_CARD_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
