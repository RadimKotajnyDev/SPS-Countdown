import Timer from "./Timer.jsx";

function App() {
    return (
        <div
            className="bg-gradient-to-t bg-no-repeat from-[#0F2027] to-[#2C5364] bg-[#0F2027] text-white h-screen w-full flex items-center justify-center flex-col">
            <h1 className="text-6xl font-light">Něco se chystá... 🤔</h1>
            <h2 className="font-semibold text-9xl">
                <Timer/>
            </h2>
        </div>
    );
}

export default App
