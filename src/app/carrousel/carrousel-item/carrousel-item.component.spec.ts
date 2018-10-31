import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { CarrouselItemComponent } from './carrousel-item.component';
import { Photo } from '../../model';

const mockPhoto: Photo = {
  albumId: 1,
  id: 1,
  title: 'test title 1',
  thumbnailUrl: 'testitemUrl1',
  url: 'testurl1'
};

describe('CarrouselItemComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: CarrouselItemComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        CarrouselItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
  });

  it('should render correctly', () => {
    expect(component).toBeDefined();
  });

  it('should render correctly and set the values inside the template', () => {
    expect(compiled.querySelector('img').src).toMatch(mockPhoto.url);
    expect(compiled.querySelector('img').getAttribute('aria-label')).toMatch(mockPhoto.title);
    expect(compiled.querySelector('p').textContent).toEqual(mockPhoto.title);

  });

});

@Component({
  template: `
  <app-carrousel-item
  [photo]="photo">
  </app-carrousel-item>
  `
})
class TestHostComponent {
  photo = mockPhoto;
}
