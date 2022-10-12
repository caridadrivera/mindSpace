import { USER_STATE_CHANGE } from '../constants/index'
import { getAuth} from "firebase/auth";
//import firebase from 'firebase';
//import {Firestore,collection,getDocs} from 'firebase/firestore'

import  firebase from "@firebase/app-compat";
require('firebase/auth')
import { firestore, doc, collection, query, where, onSnapshot } from "@firebase/firestore-compat";

//const auth = getAuth();

export function fetchUser(){
    
    return((dispatch)=> {
        //const db = getFirestore()
        // console.log(db, 'database')
        firebase.firestore().collection("users")
        .doc(getAuth().currentUser.uid)
        .get()
        .then((snapshot)=> {
            console.log(snapshot.data, 'snapshot');
            if(snapshot.exists){
                dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
            } else {
                console.log('doesnt exiiisttt')
            }
        })

        .catch((error) => {
            console.log("wwwhaaattssss ", error);
        })        

    })
}