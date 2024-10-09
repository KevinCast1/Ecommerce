const CheckoutForm = ({handleChange, submit, formData, error}) => {
    return (
        <div className="">
            <form onSubmit={submit}>
                {
                    Object.keys(formData).map((key, i) => (
                        <>
                            <label key={i}>Ingrese {key}</label>
                            <input type="text" className="form-control"  name={key} onChange={handleChange}></input>

                            {
                                error[key] && <span className="alert alert-warning">{error[key]}</span>
                            }
                            <br></br>
                        </>
                    ))
                }
                <button className="btn btn-primary">Crear Orden</button>
            </form>
        </div>
    )
}

export default CheckoutForm