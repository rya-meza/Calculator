function App() {
    const [expression, setExpression] = React.useState("")
    const [answer, setAnswer] = React.useState(0)

    const display = (symbol) => {
        setExpression(prev => prev + symbol)
        if(expression(expression.length-1) == "=") {
            if(/[0-9.]/.test(symbol)) {
                setExpression(symbol);
            }
            else {
                setExpression(answer + symbol)
            }
        }
    };

    const calculate = () => {
        setAnswer(eval(expression))
        setExpression(prev => prev + "=")
    }
    const allClear = () => {
        setExpression("")
        setAnswer("")
    }
    const clear = () => {
        setExpression(prev => prev.split("").slice(0, prev.length -1).join(""))
        setAnswer(0)
    }

    return <div class="container">
        <div class="grid">
            <div className="dis">
                <input type="text" value={expression} placeholder="0" disabled></input>
                <div class="total">{answer}</div>
            </div>
            <div onClick={allClear} class="padButton AC tomato">AC</div>
            <div onClick={clear} class="padButton C tomato">C</div>
            <div onClick={() => display("/")} class="padButton div">/</div>
            <div onClick={() => display("*")} class="padButton times">x</div>
            <div onClick={() => display("7")} class="padButton seven dark-gray">7</div>
            <div onClick={() => display("8")} class="padButton eight dark-gray">8</div>
            <div onClick={() => display("9")} class="padButton nine dark-gray">9</div>
            <div onClick={() => display("-")} class="padButton minus">-</div>
            <div onClick={() => display("4")} class="padButton four dark-gray">4</div>
            <div onClick={() => display("5")} class="padButton five dark-gray">5</div>
            <div onClick={() => display("6")} class="padButton six dark-gray">6</div>
            <div onClick={() => display("+")} class="padButton plus">+</div>
            <div onClick={() => display("1")} class="padButton one dark-gray">1</div>
            <div onClick={() => display("2")} class="padButton two dark-gray">2</div>
            <div onClick={() => display("3")} class="padButton three dark-gray">3</div>
            <div onClick={calculate} class="padButton equal blue">=</div>
            <div onClick={() => display("0")} class="padButton zero dark-gray">0</div>
            <div onClick={() => display(".")} class="padButton dot dark-gray">.</div>
            
        </div>
    </div>

    }
    

ReactDOM.render(<App/>, document.getElementById('root'))