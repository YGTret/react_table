import styled from 'styled-components';

export const StyledTableContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
    background: #232526;
    color: #d4e1e5;
    border-radius: 8px;
    width: 100%;
    margin: 0 auto; 
    box-sizing: border-box;
`;

export const StyledControls = styled.div`
    display: flex;
    gap: 10px;
`;

export const StyledButton = styled.button`
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    background: #3c3f41;
    color: #d4e1e5;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.5s;

    &:hover:not(:disabled) {
        background: #464544;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const StyledTableWrapper = styled.div`
    width: 100%;
    overflow-x: auto; 
    overflow-y: auto;
    max-height: 60vh;
    border: 1px solid #464544;
    border-radius: 4px;
`;

export const StyledTable = styled.table`
    width: 100%;
    table-layout: fixed; 
    border-collapse: collapse;
    font-size: 14px;
`;

export const StyledTh = styled.th`
    position: sticky;
    top: 0;
    background: #3c3f41;
    padding: 10px 8px;
    text-align: left;
    border-bottom: 2px solid #464544;
    border-right: 1px solid #464544;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
`;

export const StyledTd = styled.td`
    padding: 8px;
    border-bottom: 1px solid #464544;
    border-right: 1px solid #464544;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const StyledTr = styled.tr`
    &:nth-child(even) {
        background: #3a4144;
    }
`;