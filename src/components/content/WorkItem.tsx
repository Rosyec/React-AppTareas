import React from 'react'

export const WorkItem = ({ item, onDeleteItem, onToggle }: Props) => {



    return (
        <>
            <li key={item.id} className='list-group-item text-center'>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between align-items-center">
                        <span
                            onDoubleClick={() => onToggle(item)}
                            className={` align-self-center ${(item.done) ? 'text-decoration-line-through text-success' : ''}`}
                            style={{ cursor: 'pointer', height: '20px', lineHeight: '30px' }}> {item.description} </span>
                        <button
                            onClick={() => onDeleteItem(item)}
                            className='btn btn-danger fs-5'><i className="bi bi-x"></i></button>
                    </div>
                </div>
            </li>
        </>
    )
}

interface Props {
    item: Work,
    onDeleteItem: (value: Work) => void,
    onToggle: (item: Work) => void
}

interface Work {
    id: number,
    description: string,
    done: boolean
}
