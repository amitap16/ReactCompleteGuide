export default function TabButton({ children }) {
    function handleClick() {
        console.log('Pranam Raj Shamaji!');
    }

    return (
        <li><button onClick={handleClick}>{children}</button></li>
    );
}