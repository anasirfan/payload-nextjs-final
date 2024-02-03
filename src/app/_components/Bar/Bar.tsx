'use client'
import React from 'react'
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function Bar() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress
        variant="determinate"
        value={50}
        sx={{
          height: "10px",
          backgroundColor: "#f2f5f3", // Set background color here
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#3628CD", // Set progress bar color here
          },
        }}
      />
    </Box>
  );
}
