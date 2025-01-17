import React from 'react'
import styled from 'styled-components'
const NumberSelector = () => {
    const arrNum = [1,2,3,4,5,6]

    return (
        <div>
            {
                arrNum.map((value, i) => (
                   <Box key={i}> {value} </Box>
                ))
            }
        </div>
    )
}

export default NumberSelector

const Box = styled.div`
    display: grid;
    place-items: center;
    width: 72px;
    height: 72px;
    border: 1px solid black;
    font-size: 24px;
    font-weight: 700;
`