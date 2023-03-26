
const Login = (props) => {

    return (
        <>
            <h1>Welcome! Guys we are making count app</h1>
            <br /><br />
            <div className="col-12 p-3 d-flex align-items-center justify-content-center">
                <button
                    onClick={() => {
                        props.handleMinus();
                    }}
                    className="btn btn-danger"
                >
                    -
                </button>
                <span className="mx-5">"Count"</span>
                <button
                    onClick={() => {
                        props.handlePlus();
                    }}
                    className="btn btn-primary"
                >
                    +
                </button>
            </div>
        </>
    )
}

export default Login;