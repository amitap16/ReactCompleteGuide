import { forwardRef } from "react";

const ResultModel = forwardRef(function ({ result, targetTime }, ref) {
    return (
        <dialog ref={ref} className="result-model">
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped time with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModel;
