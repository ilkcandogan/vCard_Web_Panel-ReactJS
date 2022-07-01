import React from 'react';

function Address({index, types, values, onChange, onRemove, error}) {
    return (
        <div className="form-group row thin">
            <div className="col-12 col-sm-3 col-form-wrapper">
                <div className="d-block d-sm-none">
                    <label className="col-form-label">Adres </label>
                    <button className="btn btn-link text-secondary float-right">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                            <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                        </svg>
                    </button>
                </div>
                <div className="d-none d-sm-block">
                    <label className="col-form-label">Adres </label>
                </div>
            </div>
            <div className="col-12 col-sm-9">
                <div className="d-flex">
                    <div className="row no-gutters flex-grow-1">
                        <div className="col-12 col-sm-3">
                            <select className={`form-control ${error.id === 'type' && error.part === 'address' && error.index === index ? 'is-invalid' : null}`} onChange={(e) => onChange({...values, typeId: e.target.value})}>
                                <option value={0} selected={values.typeId == 0 ? true : false}>Seç</option>
                                {types.map((type, index) => {
                                    return (
                                        <option key={index} value={type.ID}  selected={values.typeId == type.ID ? true : false}>
                                            {type.TYPE_NAME}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-12 col-sm-9">
                            <input 
                                className={`form-control ${error.id === 'name' && error.part === 'address' && error.index === index ? 'is-invalid' : null}`}
                                placeholder="Adres Adı" 
                                value={values.name} 
                                onChange={(e) => onChange({...values, name: e.target.value})}
                            />
                        </div>
                        <div className="col-12">
                            <input 
                                className={`form-control ${error.id === 'address' && error.part === 'address' && error.index === index ? 'is-invalid' : null}`}
                                placeholder="Açık Adres" 
                                value={values.address} 
                                onChange={(e) => onChange({...values, address: e.target.value})}
                            />
                        </div>
                        <div className="col-12 col-sm-6">
                            <input 
                                className={`form-control ${error.id === 'city' && error.part === 'address' && error.index === index ? 'is-invalid' : null}`}
                                placeholder="Şehir" 
                                value={values.city} 
                                onChange={(e) => onChange({...values, city: e.target.value})}
                            />
                        </div>
                        <div className="col-12 col-sm-6">
                            <input 
                                className={`form-control ${error.id === 'town' && error.part === 'address' && error.index === index ? 'is-invalid' : null}`} 
                                placeholder="İlçe" 
                                value={values.town} 
                                onChange={(e) => onChange({...values, town: e.target.value})}
                            />
                        </div>
                        <div className="col-12 col-sm-8">
                            <input 
                                className="form-control" 
                                placeholder="Ülke" 
                                value={values.country} 
                                onChange={(e) => onChange({...values, country: e.target.value})}
                            />
                        </div>
                        <div className="col-12 col-sm-4">
                            <input 
                                className="form-control" 
                                placeholder="Posta Kodu" 
                                value={values.zipCode} 
                                onChange={(e) => onChange({...values, zipCode: e.target.value})}
                            />
                        </div>
                    </div>
                    <div className="d-none d-sm-block">
                        <button className="btn btn-link text-secondary float-right" onClick={onRemove} type="button">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                                <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {error.part === 'address' && error.index === index ? (
                    <div class="message-block has-error alert alert-danger">
                        <span class="help-block">{error.message}</span>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Address;