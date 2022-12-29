import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let loader: HarnessLoader;
  let fakeRouter: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    fakeRouter = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the Photos screen page when Photos button was clicked', async () => {
    const spy = spyOn(fakeRouter, 'navigateByUrl');

    const photosButton = await loader.getHarness(MatButtonHarness.with({
      text: 'Photos',
    }));

    await photosButton.click();

    const url = spy.calls.first().args[0].toString();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(url).toEqual('/');
  });

  it('should navigate to the Favorites screen page when Favorites button was clicked', async () => {
    const spy = spyOn(fakeRouter, 'navigateByUrl');

    const photosButton = await loader.getHarness(MatButtonHarness.with({
      text: 'Favorites',
    }));

    await photosButton.click();

    const url = spy.calls.first().args[0].toString();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(url).toEqual('/favorites');
  });
});
