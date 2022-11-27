import { useForm } from '../hooks/useForm';
import './Forms.css'

export const Forms = () => {

  const { userName, email, password, onValue, onResetForm } = useForm({
    userName: '',
    email: '',
    password: '',
  });

  return(

    <div className='container'>
        <h1> Form </h1>
        <input 
          name='userName'
          type="text"
          placeholder="Name"
          value={ userName }
          onChange={ onValue }
        />
        
        <input
          name='email'
          type="email"
          placeholder='Email'
          value={ email }
          onChange={ onValue }
        />

        <input 
          name='password'
          type="password"
          placeholder='Password'
          value={ password }
          onChange={ onValue }
        />
  
      <button onClick={ onResetForm }> Reset </button>  
    </div>
  );
};

