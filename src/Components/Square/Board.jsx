import { useState } from "react"
import cancel from "/cancel.png"
import circle from "/circle.png"


import styled from "styled-components"

const Board = ({ setvalue }) => {

    let data = Array(9).fill(null)

    const [value, setValue] = useState(0)
    const [lock, setLock] = useState(false)

    const onToggle = (e, num) => {
        if (lock) {

            return;
        }

        if (value % 2 == 0) {

            e.target.innerHTMl = `<img src=${cancel} />`
            data[num] = "x"
            setValue(value + 1)

        }


    }


    return (

        <>
            <Header>
                <Title>Tic Tac Toe Game In React </Title>
                <Button2 >Rest</Button2>
            </Header>

            <Center>


                <div className="block">
                    <Box onClick={(e) => onToggle(e, 0)}></Box>
                    <Box></Box>
                    <Box></Box>
                </div>

                <div className="block">
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                </div>
                <div className="block">
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                </div>



            </Center>
        </>

    )


}

export default Board


const Center = styled.div`

                display: flex;
                margin: 100px auto;
                border :2px solid black;
                align-items: center;
                justify-content: center ;
                width: 300px;
                height: 300px;
                `


const Title = styled.h1`

                text-align: center;
                margin-top: 20px;
                font-size: 40px;


                `

const Button2 = styled.button`

                padding: 8px 25px;
                border: none;
                border: 0.5px solid black;
                border-radius:6px;
                color:white;
                font-size: 20px;
                cursor: pointer;

                `

const Header = styled.div`


                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;

                `

const Box = styled.div`

                width: 85px;
                height: 85px;
                margin: 4px;
                /* border: 2px solid silver; */
                background: gray;
                border-radius: 6px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;

                `