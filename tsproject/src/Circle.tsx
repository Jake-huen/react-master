import styled from "styled-components";

interface ContainerProps{
    bgColor:string;
    borderColor:string;
}

interface CirccleProps {
    bgColor:string;
    borderColor?:string;
}

const Circle = ({bgColor,borderColor}:CirccleProps) =>{
    return <Container bgColor={bgColor} borderColor={borderColor ?? "white"} />
}

interface PlayerShape{
    name:string;
    age:string;
}

export default Circle;

const Container = styled.div<ContainerProps>`
    width:200px;
    height:200px;
    background-color: ${props=>props.bgColor};
    border-radius: 50%;
    border:1px solid ${props=>props.borderColor};
`;

