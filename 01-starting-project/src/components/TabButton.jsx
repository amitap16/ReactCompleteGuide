export default function TabButton({ children, onSelect }) {
    console.log('TabButton Component rendering...');

    return (
        <li><button onClick={onSelect}>{children}</button></li>
    );
}