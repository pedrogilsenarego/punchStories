import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

interface Props {
  message?: string;
}

const HackerLettering = ({ message = "The men that killed his mother" }: Props) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789+-";
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [stopEffect, setStopEffect] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(-1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newRandomNumbers = message.split("").map(() => {
        return Math.floor(Math.random() * 37);
      });
      setRandomNumbers(newRandomNumbers);
    }, 50);
    return () => clearInterval(intervalId);
  }, [message]);

  useEffect(() => {
    if (stopEffect) {
      const intervalId = setInterval(() => {
        if (counter <= message.length) setCounter(counter + 1);
      }, 100);
      return () => clearInterval(intervalId);
    }
    if (!stopEffect) setCounter(-1);
  }, [stopEffect, counter]);

  return (
    <Box
      display="flex"
      position="relative"
      onMouseEnter={() => setStopEffect(true)}
      onMouseLeave={() => setStopEffect(false)}
    >
      {message.split("").map((item, pos) => {


        return (
          <div key={pos} style={{
            border: "solid 1px #ffffff36",

            width: "2rem",
            height: "2.8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            {item === " " ? (
              "\u00A0"
            ) : (
              <Typography color="white" style={{



                opacity: pos <= counter ? 1 : 0.6,
                textTransform: "uppercase",
                fontSize: "2rem",
                fontWeight: 800,
              }}>
                {pos <= counter ? item : letters[randomNumbers[pos]]}
              </Typography>
            )}
          </div>
        );
      })}
    </Box>
  );
};

export default HackerLettering;
