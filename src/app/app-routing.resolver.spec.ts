import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { appRoutingResolver } from './app-routing.resolver';

describe('appRoutingResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => appRoutingResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
