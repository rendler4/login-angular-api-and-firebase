import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserAuth } from 'src/app/interfaces/users/user-auth';
import { environment } from 'src/environments/environment';
import { Observable, take } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface UserData {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users$: Observable<UserData[]> = new Observable<UserData[]>();

  constructor(private http: HttpClient, private firestore: AngularFirestore) { } 

  login(formValue: any): Observable<any>{
    let validateUser = false;
    const res_firebase = this.firestore.collection('users').snapshotChanges();
    res_firebase.pipe(take(1))
    .subscribe(
      (res: any) => {
      console.log('res_firebase Response->', res[0].payload.doc.data(), formValue);
        if(formValue.username === res[0].payload.doc.data().username && formValue.password ===res[0].payload.doc.data().password){
          validateUser = true;
        }
      },
    ) 

    const completeEndPoint = validateUser?'exitologin':'fallologin'

    return this.http.post<UserAuth[]>(`${environment.baseUrlAPI}/${completeEndPoint}`, formValue);
  }




}
