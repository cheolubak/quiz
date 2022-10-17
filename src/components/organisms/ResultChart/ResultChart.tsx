import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import {
  correctQuizCountState,
  wrongQuizCountState,
} from '../../../store/Quiz';
import { ResultCartStyled, ResultCartContentStyled } from './ResultChartStyled';

function ResultChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const correntCount = useRecoilValue(correctQuizCountState);
  const wrongCount = useRecoilValue(wrongQuizCountState);

  useEffect(() => {
    const ctx = chartRef.current!.getContext('2d')!;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Correct', 'Wrong'],
        datasets: [
          {
            label: 'Quiz Result',
            data: [correntCount, wrongCount],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }, []);

  return (
    <ResultCartStyled>
      <ResultCartContentStyled
        id='quizResultChart'
        ref={chartRef}
      />
    </ResultCartStyled>
  );
}

export default ResultChart;
