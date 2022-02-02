import styled from "styled-components";

export const Button = styled.button`
padding: 5px 3px;
font-size: 14px;
border: 0;
outline: none;
background-color: #52a9ff;
color: #fff;
width: 90px;
border-radius: 5px;
cursor: pointer;
`
export const DeleteButton = styled(Button)`
padding: 5px 3px;
font-size: 12px;
border: 0;
outline: none;
background-color: #e33e3e;
color: #fff;
width: 60px;
border-radius: 5px;
cursor: pointer;

`
export const DisbaledButton = styled(Button)`
    color: #000;
    background-color: #f1f0f0;
`
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    th{
        text-align: left;
        border-bottom: 1px solid #3e3e3e;
        background: #58a6f7;
        padding: 10px 15px;
        color: #fff;
    }
    td{
        padding: 10px 15px;
        border-bottom: 1px solid #ddd;
    }
    h4{
        margin:0;
    }
`