import  React, { useContext } from 'react';
import { AppContext }  from '../contexts/AppContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AppContextType } from '../contexts/AppContextType';

const schema = yup.object().shape({
    title: yup.string().required('Tarefa inválida'),
});

interface AddAppForm {
    title: string
}

const AddApp = () => {
    const { addApp } = useContext<AppContextType>(AppContext);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = ( data: AddAppForm, e: any ) => {
        addApp(data.title);
        e.target.reset();
        window.location.href = '/';
    }

    return(
        <form onSubmit={handleSubmit<AddAppForm>(onSubmit)}>
            <h4>Nova Lista</h4>
            <div className="uk-margin uk-width-1-1">
                <input type="text" name="title" id="title" placeholder="Nova Lista..." className="uk-input" ref={register}></input>
                <span><small><strong className="uk-text-danger">{errors.title?.message}</strong></small></span>
            </div>
            <div className="uk-width-1-1">
                <button type="submit" className="uk-button uk-button-primary">Salvar</button>
            </div>
        </form>
    );
}

export default AddApp;