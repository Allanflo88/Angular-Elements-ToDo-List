import { TestBed } from '@angular/core/testing';
import { NHostService } from './nhost.service';


describe('NHostService', () => {
  let service: NHostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NHostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
