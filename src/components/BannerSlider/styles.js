import styled from "styled-components";

export const SliderWrapper = styled.div`
    position: relative;
`;

export const IndicatorList = styled.ul`
    position: absolute;
    display: flex;
    gap: 12px;
    bottom: 37px;
    left: 50%;
    transform: translateX(-50%); 
    z-index: 3;
`;

export const IndicatorItem = styled.li`
    height: 10px;
    width: 10px;
    background-color: ${props => props.isActive ? props.theme.colors.red : '#BDBDBD'};
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
`;