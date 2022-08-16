export{};
// import {useRef, FormEvent} from 'react';
// import {useNavigate} from 'react-router-dom';
// import {useAppDispatch} from '../../hooks/';
// import {loginAction} from '../../store/api-actions';
// import {AuthData} from '../../types/auth-data';
// import {APPRoute} from '../../const';

// function AuthScreen(): JSX.Element {
//   const loginRef = useRef<HTMLInputElement | null>(null);
//   const passwordRef = useRef<HTMLInputElement | null>(null);

//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   const onSubmit = (authData: AuthData) => {
//     dispatch(loginAction(authData));
//   };

//   const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
//     evt.preventDefault();

//     if (loginRef.current !== null && passwordRef.current !== null) {
//       onSubmit({
//         login: loginRef.current.value,
//         password: passwordRef.current.value,
//       });
//     }
//   };
// }


