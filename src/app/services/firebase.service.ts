import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Post } from './../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private afs: AngularFirestore) { }

  getAllPosts(): Observable<Post[]> {
    return this.afs.collection<Post>('blog-posts').valueChanges({ idField: 'id' });
  }
}
