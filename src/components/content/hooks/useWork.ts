import React, { useEffect, useReducer } from 'react'
import { workReducer } from '../workReducer';

export const useWork = ( path: string = 'works' ) => {
  
    const initialWork: Work[] = [];

    const initializer = () => JSON.parse( localStorage.getItem(path) || 'null' ) || [];

    const [works, dispatchWork] = useReducer(workReducer, initialWork, initializer);

    useEffect(() => localStorage.setItem(path, JSON.stringify( works )), [works]);

    const addWork = ( value: Work ) => {
        dispatchWork( { type: 'Add', payload: value } );
    }

    const deleteWork = ( value: Work ) => {
        dispatchWork( { type: 'Delete', payload: value } );
    }

    const toggle = ( value: Work ) => {
        dispatchWork( { type: 'Done', payload: value } );
    }
  
  
    return {
        works,
        dispatcher: {
            addWork,
            deleteWork,
            toggle
        }

  }
}

interface Work {
    id: number,
    description: string,
    done: boolean
}
