import PropTypes from 'prop-types';

import styled from 'styled-components';

export default function InputBox({onPress, onChange, value}) {
   
    return (
        
        <div style={formStyle}>
            <Input
                type="text"
                placeholder="Enter URL"
                value={value}
                onChange={onChange}
            
            />
            <button style={buttonStyle} onClick={onPress}>Short</button>
        </div>
       
    );
}

InputBox.propTypes = {
    onPress: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}


const Input = styled.input`
  width: 100%;
  height: 25px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom:10px;
  background-color:rgb(58, 56, 56);
    color:white;
  
  }
`;

const formStyle = { 
    display: 'flex', 
    gap: '10px',
    width: '600px',
}

const buttonStyle = {
    backgroundColor: "green",
    width: "110px",
    height: "45px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
};