import { TestBed } from '@angular/core/testing';

import { NoteServiceService } from './note-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NoteServiceService', () => {
  let service: NoteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(NoteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
