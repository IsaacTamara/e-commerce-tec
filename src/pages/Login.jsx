import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import {loginUserThunk, logOutThunk} from '../store/slices/userInfo.slice'
import "./styles/Login.css"

const Login = () => {
  const {token, user} = useSelector(state => state.userInfo)
  const {register, handleSubmit} = useForm()
  const dispatch = useDispatch()

  const submit = (data) => {
    dispatch(loginUserThunk(data))
  }

  const handleClickLogOut = () => {
    dispatch(logOutThunk())
    alert("thanks for visiting, come back soon")
  }

  return (
    <main className='login'>
      {token ? (
        <section className='login__loged'>
          <i className="login__loged-ico bx bx-user-circle"></i>
          <h3 className='login__loged-name'>{`${user.firstName} ${user.lastName}`}</h3>
          <button className='login__loged-btn' onClick={handleClickLogOut}>Logout</button>
        </section>
      ) : (
        <form className='login__from' onSubmit={handleSubmit(submit)}>
          <h3 className='login__title'>Welcome! Entre your email and password to continue</h3>
          <div className='login__container-test'>
            <h4 className='login__test-title'>Test data</h4>
            <p className='login__test-email'>
            <i class='bx bxs-envelope-open'></i> john@gmail.com
            </p>
            <p className='login__test-password'>
            <i className='bx bxs-lock-open-alt'></i> john1234
            </p>
          </div>
          <div className='login__field'>
            <div>
              <i className='bx bx-envelope' ></i>
              <label className='login__label'> Email</label>
            </div>
            <input className='login__input' type="email" {...register("email")} />
          </div>
          <div className='login__field'>
            <div>
              <i className='bx bx-lock-alt'></i>
              <label className='login__label'> Password</label>
            </div>
            <input className='login__input' type="password" {...register("password")} />
          </div>
          <button className='login__btn'>Login</button>
          <p className='login__text-footer'>
            Don't have an account? <span>Sign up</span>
          </p>
        </form>
      )}
    </main>
  );
}

export default Login