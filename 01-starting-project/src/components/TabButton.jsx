export default function TabButton({ children, onSelect, isSelected }) {
    console.log('TabButton Component rendering...');

    return (
        <li>
            <button
                className={isSelected ? 'active' : undefined}
                onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}