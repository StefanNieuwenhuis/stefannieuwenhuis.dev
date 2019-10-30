import { TestBed, async } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { of } from 'rxjs';

import { FirebaseService } from './firebase.service';

import { Post } from '../models';

const mockedPosts: Post[] = [
  { id: '1', categoryId: null, title: 'A fake title #1', body: 'A fake body #1', publishDate: '22-05-1987' },
  { id: '2', categoryId: null, title: 'A fake title #2', body: 'A fake body #2', publishDate: '22-05-1987' },
];

const data = of(mockedPosts);

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
}

const afsStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
};

describe('FirebaseService', () => {
  let service: FirebaseService;
  let afs: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FirebaseService,
        { provide: AngularFirestore, useValue: afsStub }
      ]
    });

    service = TestBed.get(FirebaseService);
    afs = TestBed.get(AngularFirestore);
  });

  it('should be created', () => {
    service.getAllPosts();
    expect(service).toBeTruthy();
    expect(afs.collection).toHaveBeenCalledWith('blog-posts');
  });

  it('should load all posts successfully', async(() => {
    service.getAllPosts().subscribe((posts: Post[]) => expect(posts).toEqual(mockedPosts));
  }));
});
