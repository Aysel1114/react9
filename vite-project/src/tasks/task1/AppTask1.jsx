import CustomButton from "./components/CustomButton";

const AppTask1 = () => {
    return (
        <>
        <CustomButton text = "normal button" />
        <CustomButton text = "warn button" warnMessage = "Warning" />
        <CustomButton text = "hint button" hint = "Helping" />
        </>
    )
}

export default AppTask1;