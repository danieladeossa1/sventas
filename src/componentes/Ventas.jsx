import { paste } from '@testing-library/user-event/dist/paste';
import { useState } from 'react';
export default function Ventas() {
    //Definir los estados de este componente
    const [ident, setIdent] = useState('');
    const [lastname, setLastname] = useState('');
    const [name, setName] = useState('');
    const [zone, setZone] = useState('');
    const [date, setDate] = useState('');
    const [price, setprice] = useState('');
    const [commission, setCommission] = useState('');
    const [bonus, setBonus] = useState('');
    //Definir los métodos
    const handleSubmit = (event) => {
        event.preventDefault(); //No hace postback (va al servidor y cuando regrese del servicdor borra la información en el formulario)
        //validar que todos los datos se hayan diligenciado
        if (ident != "" && fullname != "" && course != "" && qualify1 != "" && qualify2 != "" && qualify3 != ""){
            if(qualify1>0 && qualify1<=5 || qualify2 > 0 && qualify2 <=5 || qualify3>0 && qualify3<=5){
            //setFinal((parseFloat(qualify1)+parseFloat(qualify2)+parseFloat(qualify3))/3);
            let definitiva=(parseFloat(qualify1)+parseFloat(qualify2)+parseFloat(qualify3))/3
            setFinal(definitiva.toFixed(1));
            let obs;
            if (definitiva>=3){
                obs="Gana";
            }
            else if(definitiva<2){
                obs="Pierde"
            }
            else{
                obs="Habilita"
            }
                if(obs=="Habilita"&& course =="ma"){
                    obs="Esta asignatura no se puede habilitar "
                }
                setObservation(obs)
        }
        else{
            alert("Debe ingresar todos los datos...")
        }
        
    }
}
    function onClean(e){
        e.preventDefault();
        //Borrar el contenido de los estados
        setIdent("");
        setLastname("");
        setName("");
        setZone("");
        setDate("");
        setPrice("");
        setCommission("");
        setBonus("");
    }
    return (
        <div className="container">
            <h2>Ventas</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="Ident">Identificación</label>
                        <input
                            type="text"
                            placeholder="Identificacion"
                            id="ident"
                            name="ident"
                            className='form-control'
                            onChange={event => setIdent(event.target.value)}
                            value={ident}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="lastname">Apellidos</label>
                        <input
                            type="text"
                            placeholder='Apellido'
                            id='lastname'
                            name='lastname'
                            className='form-control'
                            onChange={e => setLastname(e.target.value)}
                            value={lastname}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            placeholder='Nombre'
                            id='name'
                            name='name'
                            className='form-control'
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="zone">Zona</label>
                        <select
                            id="zone"
                            name="zone"
                            className='form-control'
                            value={zone}
                            onChange={e => setZone(e.target.value)}>
                            <option value=""disabled>Seleccione una zona</option>
                            <option value="mv1">Norte</option>
                            <option value="w1">Sur</option>
                            <option value="ma">Oriente</option>
                             </select>
                    </div>
                    <div className="col">
                        <label htmlFor="date">Fecha de venta</label>
                        <input
                            type="date"//text?
                            placeholder='Fecha de venta'
                            id='date'
                            name='date'
                            className='form-control'
                            onChange={e => setDate(e.target.value)}
                            value={date}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="price">Valor venta</label>
                        <input
                            type="text"
                            placeholder='Valor venta'
                            id='price'
                            name='price'
                            className='form-control'
                            onChange={e => setprice(e.target.value)}
                            value={price}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="commission">Valor comisión</label>
                        <input
                            type="text"
                            placeholder="Valor comisión"
                            id="commission"
                            name="commission"
                            className='form-control'
                            onChange={event => setCommission(event.target.value)}
                            value={commission}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="bonus">Bonificación</label>
                        <input
                            type="text"
                            placeholder='Bonificación'
                            id='bonus'
                            name='bonus'
                            className='form-control'
                            onChange={e => setBonus(e.target.value)}
                            value={bonus}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <button
                            type='Submit'
                            className='btn btn-success' >
                            Calcular
                        </button>
                    </div>
                </div>

            </form>
            <form onSubmit={onClean}>
                <button className='btn btn-dark'>Limpiar</button>
            </form>
        </div>
    );
}