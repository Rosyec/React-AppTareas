import React from 'react'
import { WorkItem } from './WorkItem'

export const WorkList = ({ workItem, onDelete, onToggleItem }: Props) => {
    return (
        <>
            <ul className='list-group'>
                {
                    workItem.map((item) => (
                        <WorkItem key={ item.id } item={item} onDeleteItem={ onDelete } onToggle={ onToggleItem }></WorkItem>
                    ))
                }
            </ul>
        </>
    )
}

interface Props {
    workItem: Work[],
    onDelete: ( value: Work ) => void,
    onToggleItem: ( item: Work ) => void
}

interface Work {
    id: number,
    description: string,
    done: boolean
}
