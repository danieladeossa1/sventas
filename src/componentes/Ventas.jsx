import { paste } from '@testing-library/user-event/dist/paste';
import { useState } from 'react';

function formatNumber(number){
    return new Intl.NumberFormat().format(number)
}
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
                setCommission(formatNumber(com))

                let bonu;
                if (price >= 80000000) {
                    bonu = 50000;
                }
                else {
                    bonu = 0;
                }
                setBonus(formatNumber(bonu));
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
            <center><h2>Pepito Sales</h2></center>
            <form onSubmit={handleSubmit}>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="Ident">Identification</label>
                        <input
                            type="number"
                            placeholder="Identification"
                            id="ident"
                            name="ident"
                            className='form-control'
                            onChange={event => setIdent(event.target.value)}
                            value={ident}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            placeholder='Last Name'
                            id='lastname'
                            name='lastname'
                            className='form-control'
                            onChange={e => setLastname(e.target.value)}
                            value={lastname}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder='Name'
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
                        <label htmlFor="zone">Zone</label>
                        <select
                            id="zone"
                            name="zone"
                            className='form-control'
                            value={zone}
                            onChange={e => setZone(e.target.value)}>
                            <option value="" disabled>Selectec a zone</option>
                            <option value="north">North</option>
                            <option value="south">South</option>
                            <option value="east">East</option>
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="date">Sale Date</label>
                        <input
                            type="date"
                            placeholder='Sale Date'
                            id='date'
                            name='date'
                            min="2022-11-10" max="2025-12-31"
                            className='form-control'
                            onChange={e => setDate(e.target.value)}
                            value={date}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="price">Sales Value</label>
                        <input
                            type="number"
                            placeholder='Sales Value'
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
                        <label htmlFor="commission">Sales Commission</label>
                        <input
                            type="text"
                            placeholder="Sales Commission"
                            id="commission"
                            name="commission"
                            className='form-control'
                            onChange={event => setCommission(event.target.value)}
                            value={commission}
                            
                        />
                    </div>
                    <div className="col-4">
                        <label htmlFor="bonus">Bonus</label>
                        <input
                            type="text"
                            placeholder='Bonus'
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
                            Calculate
                        </button>
                    </div>
                    <div className="col-4">
                        <form onSubmit={onClean}>
                            <button className='btn btn-dark'>Clean</button>
                        </form>
                    </div>
                </div>
            </form>
        </div>
    );
}