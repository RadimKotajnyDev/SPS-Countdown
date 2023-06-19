import Timer from "./Timer.jsx";

function App() {
    return (
        <div
            className="bg-gray-800 text-white h-screen w-full flex items-center justify-center flex-col">
            <h1 className="md:text-6xl text-3xl font-light text-center">Srovnávačka začíná za</h1>
            <h2 className="font-semibold text-5xl md:text-9xl text-red-600">
                <Timer/>
            </h2>
        </div>
    );
}

export default App
