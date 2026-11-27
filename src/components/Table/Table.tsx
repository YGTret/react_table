import { useState } from "react";
import {
    StyledTableContainer,
    StyledControls,
    StyledButton,
    StyledTableWrapper,
    StyledTable,
    StyledTh,
    StyledTd,
    StyledTr
} from "./StyledTable";

export const Table = () => {
    const [rows, setRows] = useState<number>(4);
    const [cols, setCols] = useState<number>(4);

    const colsArray = Array.from({ length: cols }, (_, i) => i);
    const rowsArray = Array.from({ length: rows }, (_, i) => i);

    return (
        <StyledTableContainer>
            <StyledControls>
                <StyledButton disabled={rows >= 15} onClick={() => setRows(rows + 1)}>
                    + Строка
                </StyledButton>
                <StyledButton disabled={rows <= 1} onClick={() => setRows(rows - 1)}>
                    - Строка
                </StyledButton>
                <StyledButton disabled={cols >= 15} onClick={() => setCols(cols + 1)}>
                    + Столбец
                </StyledButton>
                <StyledButton disabled={cols <= 1} onClick={() => setCols(cols - 1)}>
                    - Столбец
                </StyledButton>
            </StyledControls>

            <StyledTableWrapper>
                <StyledTable>
                    <thead>
                    <StyledTr>
                        <StyledTh>#</StyledTh>
                        {colsArray.map((col) => (
                            <StyledTh key={col}>Столбец {col + 1}</StyledTh>
                        ))}
                    </StyledTr>
                    </thead>
                    <tbody>
                    {rowsArray.map((row) => (
                        <StyledTr key={row}>
                            <StyledTd>Ряд {row + 1}</StyledTd>
                            {colsArray.map((col) => (
                                <StyledTd key={col}>
                                    Ячейка {row + 1} - {col + 1}
                                </StyledTd>
                            ))}
                        </StyledTr>
                    ))}
                    </tbody>
                </StyledTable>
            </StyledTableWrapper>
        </StyledTableContainer>
    );
};