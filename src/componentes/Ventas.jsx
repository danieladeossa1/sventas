import { paste } from '@testing-library/user-event/dist/paste';
import { useState } from 'react';
export default function Ventas() {
    //Definir los estados de este componente.
    const [ident, setIdent] = useState('');
    const [lastname, setLastname] = useState('');
    const [name, setName] = useState('');
    const [zone, setZone] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [commission, setCommission] = useState('');
    const [bonus, setBonus] = useState('');
    //Definir los métodos
    const handleSubmit = (event) => {
        event.preventDefault(); //No hace postback (va al servidor y cuando regrese del servicdor borra la información en el formulario)
        //validar que todos los datos se hayan diligenciado
        if (ident != "" && lastname != "" && zone != "" && name != "" && date != "" && price != "") {
            if (price >= 1000000 && price <= 100000000) {
                let com;
                if (zone == "norte") {
                    com = (parseFloat(price) * 0.02);
                }
                else if (zone == "south") {
                    com = (parseFloat(price) * 0.025);
                }
                else {
                    com = (parseFloat(price) * 0.03);
                }
                setCommission(com)

                let bonu;
                if (price >= 80000000) {
                    bonu = 50000;
                }
                else {
                    bonu = 0;
                }
                setBonus(bonu);
            }
            else {
                alert("Ingrese un valor que este entre 1.000.000 y 100.000.000")
            }
        }
        else {
            alert("Debe ingresar todos los datos ...")
        }
    }
    function onClean(e) {
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
            <center><h2>Ventas Pepito </h2></center>
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
                            <option value="" disabled>Seleccione una zona</option>
                            <option value="north">Norte</option>
                            <option value="south">Sur</option>
                            <option value="east">Oriente</option>
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="date">Fecha de venta</label>
                        <input
                            type="date"
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
                            onChange={e => setPrice(e.target.value)}
                            value={price}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-4">
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
                    <div className="col-4">
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
                    <div className="col-4">
                        <button
                            type='Submit'
                            className='btn btn-primary' >
                            Calcular
                        </button>
                    </div>
                    <div className="col-4">
                        <form onSubmit={onClean}>
                            <button className='btn btn-dark'>Limpiar</button>
                        </form>
                    </div>
                </div>
            </form>
        </div>
    );
}