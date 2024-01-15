export default function Tabs({ buttons, children, ButtonContainer }) {
    return (
        <>
            <ButtonContainer>{buttons}</ButtonContainer>
            {children}
        </>);
}