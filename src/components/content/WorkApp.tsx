import { useWork } from './hooks/useWork';
import { WorkAdd } from './workAdd/WorkAdd';
import { WorkList } from './WorkList';

export const WorkApp = () => {

    const { works, dispatcher } = useWork('local');

    const { addWork, deleteWork, toggle } = dispatcher;

    return (
        <>
            <div className="container text-center mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <h1 className='mb-3'>¿Qué quieres hacer hoy?</h1>
                        <WorkAdd
                            onEmit={addWork}></WorkAdd>
                    </div>
                </div>
                {
                    works.length !== 0 &&
                    <div className="row d-flex justify-content-center mt-5">
                        <div className="col-md-10">
                        <h4>Tareas </h4>
                        <span>Total: {works.length}</span> - <span> Pendientes: {works.filter((item) => (!item.done)).length}</span>
                            <WorkList
                                workItem={works}
                                onDelete={deleteWork}
                                onToggleItem={toggle}></WorkList>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

