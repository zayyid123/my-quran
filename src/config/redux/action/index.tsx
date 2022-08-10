/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2'
import fbConfig from "../../firebase";

export const registerUserApi = (data: any) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        const auth = getAuth(fbConfig);
        dispatch({ type: 'CHANGE_ISLOADING', value: true })
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert(user)
                dispatch({ type: 'CHANGE_ISLOADING', value: false })
                resolve(true)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode + ' ' + errorMessage)
                dispatch({ type: 'CHANGE_ISLOADING', value: false })
                reject(false)
            })
    })
}

export const signInUserApi = (data: any) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
        const auth = getAuth(fbConfig);
        dispatch({ type: 'CHANGE_ISLOADING', value: true })
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                const dataUser = {
                    email: user.email,
                    uid: user.uid,
                }
                dispatch({ type: 'CHANGE_ISLOADING', value: false })
                dispatch({ type: 'CHANGE_ISLOGIN', value: true })
                dispatch({ type: 'CHANGE_USER', value: dataUser })
                localStorage.setItem('USER', JSON.stringify(dataUser))
                localStorage.setItem('EMAIL', JSON.stringify(dataUser.email))
                localStorage.setItem('UID', JSON.stringify(dataUser.uid))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logged IN',
                    showConfirmButton: false,
                    timer: 1000
                })
                setTimeout(() => {
                    resolve(true)
                }, 1200);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: errorCode,
                    text: errorMessage,
                })
                dispatch({ type: 'CHANGE_ISLOADING', value: false })
                dispatch({ type: 'CHANGE_ISLOGIN', value: false })
                reject(false)
            })
    })
}