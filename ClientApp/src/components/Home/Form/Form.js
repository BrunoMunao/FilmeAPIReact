import "./Form.css";

const Form = () => {
    return (
        <form>
            <h2>Filme</h2>
            <fieldset className="field">
                <label className="label">Filme</label>
                <input type="text" className="input" />
            </fieldset>
            <fieldset>
                <label className="label">Ano</label>
                <input type="text" className="input" />
            </fieldset>
            <fieldset>
                <label className="label">Diretor</label>
                <input type="text" className="input" />
            </fieldset>
            <fieldset>
                <label className="label">Gênero</label>
                <input type="text" className="input" />
            </fieldset>
            <button>Adicionar</button>
        </form>
    );
};

export default Form;
