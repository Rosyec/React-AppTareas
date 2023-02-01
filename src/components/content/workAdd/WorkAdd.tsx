import React, { SyntheticEvent, useState } from 'react'
import './WorkAdd.css'

export const WorkAdd = ( { onEmit }:Props ) => {

    const [Work, setWork] = useState<Work>({
        id: 0,
        description: '',
        done: false
    });

    const onChange = ( { target }: SyntheticEvent ) => {
        const { value } = target as HTMLInputElement;
        setWork({ ...Work, id: Math.floor(Math.random() * 500), description: value, done: false });
    }

    const onSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        if ( Work.description.length === 0 ) return;
        const { currentTarget } = event;
        const input = currentTarget.elements[0] as HTMLInputElement;
        // const input = currentTarget.elements.namedItem('description') as HTMLInputElement;
        onEmit( Work );
        input.value = '';
        setWork( { ...Work, id: 0, description: '', done: false } );
    }

    return (
        <>
            <form onSubmit={ onSubmit }>
                <div className="row">
                    <div className="col-md-12 d-flex align-items-center">
                        <input className='form-control p-2' name='description' onChange={ onChange } type="text" placeholder='Agregar taréa...' />
                        <button className='btn btn-success fs-4 mx-2' type='submit'><i className="bi bi-send-plus"></i></button>
                    </div>
                </div>
            </form>
        </>
    )
}

interface Props {
    onEmit: ( value: Work ) => void,
}

interface Work {
    id: number,
    description: string,
    done: boolean
}
