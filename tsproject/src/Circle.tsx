import styled from "styled-components";

interface ContainerProps{
    bgColor:string;
}

interface CirccleProps {
    bgColor:string;
}

const Circle = ({bgColor}:CirccleProps) =>{
    return <Container bgColor={bgColor} />
}

interface PlayerShape{
    name:string;
    age:string;
}

const sayHello = (playerObj:PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old`;

export default Circle;

const Container = styled.div<ContainerProps>`
    width:200px;
    height:200px;
    background-color: ${props=>props.bgColor};
    border-radius: 50%;
`;

