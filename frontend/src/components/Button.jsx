


export const Button = (onPress, Children) => {
    return (
        <div>
            <button style={buttonStyle} onClick={onPress}> {Children} </button>
        </div>
    );
};

const buttonStyle = {
    backgroundColor: "green",
    width: "100%",
    height: "45px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
};